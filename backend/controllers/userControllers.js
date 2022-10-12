const { response } = require("express");
const asyncHandler = require("express-async-handler");
const User = require('../models/userModel');
const generateToken = require("../config/generateToken");

const registerUser = asyncHandler(async (req, res) => {
    const { name, userName, email, password, profilePic } = req.body;
    if (!name || !userName || !email || !password || !profilePic) {
        res.status(400);
        throw new Error("Please Enter all fields");
    }
    const userNameExists = await User.findOne({ userName });
    const emailExists = await User.findOne({ email });
    if (userNameExists) {
        res.status(400);
        throw new Error("Username unavailable");
    }
    if (emailExists) {
        res.status(400);
        throw new Error("An account with that email already exists.");
    }
    const user = await User.create({
        name,
        userName, 
        email, 
        password,
        profilePic,
    });
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            userName: user.userName,
            email: user.email,
            password: user.password,
            profilePic: user.profilePic,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error("Failed to create user");
    }
});
module.exports = { registerUser };