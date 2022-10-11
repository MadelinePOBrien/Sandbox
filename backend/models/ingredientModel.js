const mongoose = require("mongoose");
const ingredientModel = mongoose.Schema({
    ingredName: { type: String, required: true },
    Allergen: [{ type: String }],
    ingredPic: { type: String, required: true }, // Add default: "link"
});
const Recipe = mongoose.model("Ingredient", ingredientModel);
module.exports = Ingredient;