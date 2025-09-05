const express = require("express");
const app = express();
const mongoose = require('mongoose');

// BODYPARSER
// TODO: create an in-memory users array to store { username, email, id }
var users = [];
// TODO: enable JSON and urlencoded parsers (express.json, express.urlencoded)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


async function connectDB() {
  await mongoose.connect('mongodb+srv://stanleyjs:pPlA5BGcAS03WHnf@cluster0.cqhvftj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

  console.log('Connected to MongoDB');
}
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});


const User = mongoose.model('User', userSchema);

// Health check
app.get("/health", (_request, response) => {
  // TODO: return { status: "ok" }

    response.json({ status: "ok" });
});

// Registration
app.post("/register", async (req, res) => {
    if (!req.body) {
      return res.status(400).json({ message: "Request body is required" });
    }
  // TODO: read username, email, password from req.body
  const { username, email, password } = req.body;
// const username = req.body.username;
// const email = req.body.email;
// const password = req.body.password;

  // TODO: validate presence of all fields



    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

  // TODO: validate username with regex ^[A-Za-z0-9_]{3,20}$
    const usernameRegex = /^[A-Za-z0-9_]{3,20}$/;
    if (! usernameRegex.test(username)) {
      return res.status(400).json({ message: "Invalid username" });
    }

  // TODO: validate simple email .+@.+\..+
    const emailRegex = /.+@.+\..+/;
    if (! emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email" });
    }

  // TODO: validate password length >= 6
    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters long" });
    }

  // TODO: check duplicate email (case-insensitive) against users array
//  example@gmail.com
//  Example@gmail.com
//  EXAMPLE@GMAIL.COM
    const existingUser =await  User.findOne({
      email:email
    })
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }



User.create({ username, email, password }).then(() => {}).catch(err => {})

  // TODO: return 201 with { message, user }
    return res.status(201).json({ message: "User registered successfully",  });
});

// (Optional) List users
app.get("/users", async (_req, res) => {
  // TODO: return { count, users }
  const users = await User.find();
  
  return res.json({ count: users.length, users });


});

const PORT = process.env.PORT || 8989;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
}).catch(err => {
  console.error(err);
  process.exit(1);
});