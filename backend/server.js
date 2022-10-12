const dotenv = require("dotenv");
const express = require("express");
const app = express();
const { chats } = require("./data/data");

dotenv.config();

//Can use nodemon to auto update it, just change start: node to nodemon
app.get('/', (req,res) => {
    res.send("API is running");
});

app.get('/api/chat',(req,res) => {
    res.send(chats);
});

app.get('/api/chat/:id', (req, res) => {
    const singleChat = chats.find((c) => c._id === req.params.id);
    res.send(singleChat);
});

const PORT = process.env.PORT || 5000
//Might have to replace 50000 with port below
app.listen(5000, console.log("Server started at port 5000"));
//Security issue that we use port 5000, we should use a variable or something
