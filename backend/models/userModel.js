const mongoose = require("mongoose")
const userModel = mongoose.Schema(
    {
        isGuest: { type: Boolean, default: false },
        name: { type: String, required: true },
        userName: { type: String, required: true, unique: true },
        email: {type: String, required: true, unique: true }, 
        password: { type: String, required: true },
        profilePic: { type: String,  
                    default: "../frontend/src/images/blank-profile-photo.jpeg"}, //Change to true, then create default: "/path or link"
        pantry: [ { type: mongoose.Schema.Types.ObjectId } ],
        //recipes: [ { 
          //          type: mongoose.Schema.Types.ObjectId,
            //         ref:Recipe 
              //  }], 
        //Add user settings here
        
    }
    //Do we need timestamps?
);
const User = mongoose.model("User", userModel);
module.exports  = User;