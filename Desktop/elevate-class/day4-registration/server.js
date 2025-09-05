const express = require("express");
const app = express();

//Middleware to fix destructioning of fields
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Require mongoose for our database
const mongoose = require('mongoose');


//Create database connection with mongoose
async function connectDB() {
  await mongoose.connect('mongodb+srv://stanleyjs:pPlA5BGcAS03WHnf@cluster0.cqhvftj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

  console.log('Connected to MongoDB');
}
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true, minlength: 8, maxlength: 100, select: false }
});

const User = mongoose.model('User', userSchema);

// TODO: create an in-memory users array to store { username, email }
const users = [];

// TODO: enable JSON and urlencoded parsers (express.json, express.urlencoded)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

// Registration
app.post("/register", (req, res) => {
  // TODO: read username, email, password from req.body
  const { username, email, password } = req.body;

  // TODO: validate presence of all fields
  if (!username || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // TODO: validate username with regex ^[A-Za-z0-9_]{3,20}$
  const usernameRegex = /^[A-Za-z0-9_]{3,20}$/;
  if (!usernameRegex.test(username)) {
    return res.status(400).json({ error: "Invalid username" });
  }

  // TODO: validate simple email .+@.+\..+
  const emailRegex = /.+@.+\..+/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email" });
  }

  // TODO: validate password length >= 8 
  if (password.length < 8) {
    return res.status(400).json({ error: "Password must be at least 8 characters long" });
  }

  // TODO: check duplicate email (case-insensitive) against users array
  const existingUser = users.find(user => user.email.toLowerCase() === email.toLowerCase());
  if (existingUser) {
    return res.status(400).json({ error: "Email already in use" });
  }
  User.create({ username, email, password })
    .then(() => {
      // TODO: push new user (without password) to users array
      users.push({ username, email });
      // TODO: return 201 with { message, user }
      res.status(201).json({ message: "User registered successfully", user: { username, email } });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    });
});

// (Optional) List users
app.get("/users", (_req, res) => {
  res.json({ count: users.length, users });
}); 

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));

