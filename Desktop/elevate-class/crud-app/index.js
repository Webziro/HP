import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

const app = express();
dotenv.config();
const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL

//Connecting Moongooes and catch error
mongoose.connect(MONGOURL).then(() =>{
    console.log("Connection to Database successfully")
    app.listen(PORT, () => {
        console.log(`Server was connect at ${PORT}`);
    });
}).catch((error) => console.log(error));

//Middleware
app.use(express.json());

//User Schema
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    sex: String,
    prefrence: String
});

const User = mongoose.model("users", userSchema);

//Endpoint to fetch users from db
app.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});