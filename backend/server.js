const dotenv = require("dotenv");
const express = require("express");
const { chats } = require("./data/data"); //can be deleted later
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

dotenv.config();
connectDB();
const app = express();
app.use(express.json()); //So we can accept json data


//Can use nodemon to auto update it, just change start: node to nodemon
app.get('/', (req,res) => {
    res.send("API is running");
});

app.use('/api/user', userRoutes);

const PORT = process.env.PORT || 5000
//Might have to replace 50000 with port below
app.listen(5000, console.log("Server started at port 5000"));
//Security issue that we use port 5000, we should use a variable or something
