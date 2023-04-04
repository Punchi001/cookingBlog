require('../models/database');
const Category = require('../models/Category');
const Recipe = require('../models/Recipe');


// Getting our homepage

exports.homepage = async(req, res) => {




    try {

        const limitNumber = 5;
        const categories = await Category.find({}).limit(limitNumber);
        const latest = await Recipe.find({}).sort({ _id: -1 }).limit(limitNumber);

        //finding recipes according to its categories
        const thai = await Recipe.find({ 'category': 'Thai' }).sort({ _id: -1 }).limit(limitNumber);
        const american = await Recipe.find({ 'category': 'American' }).sort({ _id: -1 }).limit(limitNumber);
        const chinese = await Recipe.find({ 'category': 'Chinese' }).sort({ _id: -1 }).limit(limitNumber);


        const food = { latest, american, chinese, thai };

        res.render('index', { title: 'Cooking Blog - Home', categories, food });


    } catch (error) {

        res.status(500).send({ message: error.message || "Error Occured " });

    }
}



// Getting our Categories page 
exports.exploreCategories = async(req, res) => {

    try {

        const limitNumber = 20;
        const categories = await Category.find({}).limit(limitNumber);

        res.render('categories', { title: 'Cooking Blog - Categories', categories });


    } catch (error) {

        res.status(500).send({ message: error.message || "Error Occured " });

    }
}

// Getting our Categories page by Id
exports.exploreCategoriesByID = async(req, res) => {

    try {

        let categoryId = req.params.id;

        const limitNumber = 20;
        const categoryById = await Recipe.find({ 'category': categoryId }).limit(limitNumber);

        res.render('categories', { title: 'Cooking Blog - Categories', categoryById });


    } catch (error) {

        res.status(500).send({ message: error.message || "Error Occured " });

    }
}





// Getting our Recipe pageand using there id to get content
exports.exploreRecipe = async(req, res) => {

    try {

        let recipeId = req.params.id;

        const recipe = await Recipe.findById(recipeId);

        res.render('recipe', { title: 'Cooking Blog - Recipe', recipe });



    } catch (error) {

        res.status(500).send({ message: error.message || "Error Occured " });

    }
}


// making a post request using the search field

exports.searchRecipe = async(req, res) => {

    // name id searchTerm

    try {

        let searchTerm = req.body.searchTerm;

        let recipe = await Recipe.find({ $text: { $search: searchTerm, $diacriticSensitive: true } });

        res.render('search', { title: 'Cooking Blog - search', recipe })

    } catch (error) {

        res.status(500).send({ message: error.message || "Error Occured " });

    }

}

//getting the exploreLatest page

exports.exploreLatest = async(req, res) => {

    try {
        const limitNumber = 20;

        const recipe = await Recipe.find({}).sort({ _id: -1 }).limit(limitNumber);


        res.render('explore-latest', { title: 'Cooking Blog - Categories', recipe });


    } catch (error) {

        res.status(500).send({ message: error.message || "Error Occured " });

    }
}


// getting the exploreRandom page 

exports.exploreRandom = async(req, res) => {

    try {
        let count = await Recipe.find().countDocuments();
        let random = Math.floor(Math.random() * count);
        let recipe = await Recipe.findOne().skip(random).exec();


        res.render('explore-random', { title: 'Cooking Blog - Categories', recipe });


    } catch (error) {

        res.status(500).send({ message: error.message || "Error Occured " });

    }
}

// getting the submitRecipe page

exports.submitRecipe = async(req, res) => {
    const infoErrorsObj = req.flash('infoErrors');
    const infoSubmitObj = req.flash('infoSubmit');
    res.render('submit-recipe', { title: 'Cooking Blog - Submit Recipe', infoErrorsObj, infoSubmitObj });
}

// posting the submitted recipe 

exports.submitRecipeOnPost = async(req, res) => {
    req.flash('infoSubmit', 'Recipe has been added');
    res.redirect('/submit-recipe');
}