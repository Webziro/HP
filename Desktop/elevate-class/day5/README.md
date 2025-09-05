# 📝 Assignment – Day 4: Input Parsing & Registration Backend 

## 🎯 Objectives
- Parse client input from **query params**, **form data/JSON body**, and **headers**.
- Build a **registration endpoint** with server-side **validation** using Express.js.
- Return clear **success/error** responses with correct **HTTP status codes**.
- Test using **Postman**.

---

## 📚 Prerequisites
- Node.js v16+ installed
- Basic Express server knowledge

**Quick project setup**
```bash
mkdir day4-registration && cd day4-registration
npm init -y
npm install express
```

---

## 🧑‍💻 What to Build
Create an Express.js app with endpoints:

### 1) Health Check
**GET `/health`** → returns `{ "status": "ok" }`

### 2) Registration
**POST `/register`** – accepts: `username`, `email`, `password`  
Parse both **JSON** and **URL-encoded form** bodies.

---

## ✅ Validation Rules
- **username**: required, 3–20 chars, letters/numbers/underscore (`^[A-Za-z0-9_]{3,20}$`)
- **email**: required, looks like an email (`.+@.+\..+`)
- **password**: required, min **6** chars
- **duplicate email**: not allowed (use in-memory array)

---

## 🔄 Responses
- **201 Created** (success): include `message` and `user` (no password)
- **400 Bad Request**: invalid/missing fields → `{ "error": "..." }`
- **409 Conflict**: duplicate email → `{ "error": "Email already registered." }`

> Never return passwords.

---

## 🧩 Starter Skeleton (fill in the TODOs)
Create `server.js`:

```js
const express = require("express");
const app = express();

// TODO: create an in-memory users array to store { username, email }

// TODO: enable JSON and urlencoded parsers (express.json, express.urlencoded)

// Health check
app.get("/health", (_req, res) => {
  // TODO: return { status: "ok" }
});

// Registration
app.post("/register", (req, res) => {
  // TODO: read username, email, password from req.body

  // TODO: validate presence of all fields

  // TODO: validate username with regex ^[A-Za-z0-9_]{3,20}$

  // TODO: validate simple email .+@.+\..+

  // TODO: validate password length >= 6

  // TODO: check duplicate email (case-insensitive) against users array

  // TODO: push new user (without password) to users array

  // TODO: return 201 with { message, user }
});

// (Optional) List users
app.get("/users", (_req, res) => {
  // TODO: return { count, users }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
```

Run it:
```bash
node server.js
```

---

## 🔍 Testing Checklist
- `GET /health` → `{ "status": "ok" }`
- `POST /register` valid body → **201**
- Missing/invalid fields → **400**
- Duplicate email → **409**
- Test both **JSON** and **x-www-form-urlencoded**

---

---

## 🛠️ Common Pitfalls
- Missing body parsers **(express.json())** → `req.body` is `undefined`
- Wrong status codes (use 400/409 for errors)
- Returning passwords to the client

---

## 🚀 Stretch Goals
- Strong password rule (≥8 chars; letters & numbers)
- Collect and return all validation errors at once
- `Location: /users` header on success