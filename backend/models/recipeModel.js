const mongoose = require('mongoose') 

const recipeModel = mongoose.Schema({
    
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    //Add ingredients ingredients: [ {type: mongoose ObjectId, ref: "ingredients"}]
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