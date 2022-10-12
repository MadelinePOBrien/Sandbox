const dotenv = require("dotenv");
const express = require("express");
const app = express();
const { chats } = require("./data/data");
const connectDB = require("./config/db");

dotenv.config();
connectDB();


//Can use nodemon to auto update it, just change start: node to nodemon
app.get('/', (req,res) => {
    res.send("API is running");
});

app.use('/api/user', userRoutes);

const PORT = process.env.PORT || 5000
//Might have to replace 50000 with port below
app.listen(5000, console.log("Server started at port 5000"));
//Security issue that we use port 5000, we should use a variable or something
