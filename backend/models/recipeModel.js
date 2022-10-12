const mongoose = require('mongoose');

const recipeModel = mongoose.Schema({
    
    owner: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User" },
    ingredients: [ {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Ingredients" }],
    recipePic: { type: String }, // Add default: "link" and change to required.
    difficulty: { type: String }, 
    rating: { type: String },
    
    //Add equipment
    //Add difficulty like above
    //Add


},
{
    timestamps: true,
}
);

const Recipe = mongoose.model("Recipe", recipeModel);
module.exports = Recipe;