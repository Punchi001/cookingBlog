const express = require('express');
const router = express.Router();

const recipeController = require('../controllers/recipeController');

// app routes

router.get('/', recipeController.homepage);
router.get('/categories', recipeController.exploreCategories);
router.get('/categories/:id', recipeController.exploreCategoriesByID);
router.get('/recipe/:id', recipeController.exploreRecipe);
router.get('/explore-latest', recipeController.exploreLatest);
router.post('/search', recipeController.searchRecipe);



module.exports = router;