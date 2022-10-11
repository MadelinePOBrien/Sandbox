const mongoose = require("mongoose");
const ingredientModule = mongoose.Schema({
    ingredName: { type: String, required: true },
    allergen: { type: String },
    ingredPic: { type: String, required: true }, // Add default: "link"
});