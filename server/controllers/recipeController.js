require("../models/database");
const Category = require("../models/Category");
const Recipe = require("../models/Recipe");

// Getting our homepage

exports.homepage = async (req, res) => {
  try {
    const limitNumber = 5;
    const categories = await Category.find({}).limit(limitNumber);
    const latest = await Recipe.find({}).sort({ _id: -1 }).limit(limitNumber);

    //finding recipes according to its categories
    const thai = await Recipe.find({ category: "Thai" })
      .sort({ _id: -1 })
      .limit(limitNumber);
    const american = await Recipe.find({ category: "American" })
      .sort({ _id: -1 })
      .limit(limitNumber);
    const chinese = await Recipe.find({ category: "Chinese" })
      .sort({ _id: -1 })
      .limit(limitNumber);

    const food = { latest, thai, american, chinese };

    res.render("index", { title: "Cooking Blog - Home", categories, food });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured " });
  }
};

// Getting our Categories page
exports.exploreCategories = async (req, res) => {
  try {
    const limitNumber = 20;
    const categories = await Category.find({}).limit(limitNumber);

    res.render("categories", {
      title: "Cooking Blog - Categories",
      categories,
    });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured " });
  }
};

// Getting our Categories page by id
exports.exploreCategoriesById = async (req, res) => {
  try {
    let categoryId = req.params.id;
    const limitNumber = 20;
    const categoryById = await Recipe.find({ category: categoryId }).limit(
      limitNumber
    );

    res.render("categories", {
      title: "Cooking Blog - Categories",
      categoryById,
    });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured " });
  }
};

//recipe  by id
exports.exploreRecipe = async (req, res) => {
  try {
    let recipeId = req.params.id;

    const recipe = await Recipe.findById(recipeId);

    res.render('recipe', { title: "Cooking Blog - Recipe", recipe });
  } catch (error) {
     res.status(500).send({ message: error.message || "Error Occured " });
  }
};

// POST/search
exports.searchRecipe =async(req,res) =>{
try {
  let searchTerm =req.body.searchTerm;
  let recipe =await Recipe.find({ $text: { $search: searchTerm,$diacriticSensitive:true}})
res.json(recipe);

} catch (error) {
  res.status(500).send({message: error.message || "Error Occured"})
  
}





  res.render('search',{title:'Cooking Blog- Search'});
}