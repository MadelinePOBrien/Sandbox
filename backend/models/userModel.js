const mongoose = require("mongoose")
const userModel = mongoose.Schema(
    {
        isGuest: { type: Boolean, default: true },
        name: { type: String, required: true },
        userName: { type: String, required: true },
        email: {type: String, required: true }, 
        Password: { type: String, required: true },
        ProfilePic: { type: String, required: false} //Change to true, then create default: "/path or link"

        //Add user settings here
        
    }
    //Do we need timestamps
);
const User = mongoose.model("User", "userModel");
module.exports  = User;