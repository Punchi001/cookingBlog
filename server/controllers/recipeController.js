require('../models/database');
const Category = require('../models/Category');
const Recipe= require('../models/Recipe');


// Getting our homepage

exports.homepage = async(req, res) => {
<<<<<<< HEAD

    try {

        const limitNumber = 5;
        const categories = await Category.find({}).limit(limitNumber);

        res.render('index', { title: 'Cooking Blog - Home' ,categories});
=======

    try {

        const limitNumber = 5;
        const categories = await Category.find({}).limit(limitNumber);
        const latest  = await Recipe.find({}).sort({_id: -1}).limit(limitNumber);

        //finding recipes according to its categories
        const thai = await Recipe.find({'category':'Thai'}).sort({_id: -1}).limit(limitNumber);
        const american = await Recipe.find({'category':'American'}).sort({_id: -1}).limit(limitNumber);
        const chinese = await Recipe.find({'category':'Chinese'}).sort({_id: -1}).limit(limitNumber);
       

        const food = {latest,american,chinese,thai};

        res.render('index', { title: 'Cooking Blog - Home' ,categories,food});

        
    } catch (error) {

        res.status(500).send({message: error.message || "Error Occured "});
        
    }
}


// Getting our Categories page 
exports.exploreCategories = async(req, res) => {

    try {

        const limitNumber = 20;
        const categories = await Category.find({}).limit(limitNumber);
  
        res.render('categories', { title: 'Cooking Blog - Categories' ,categories});

        
    } catch (error) {

        res.status(500).send({message: error.message || "Error Occured "});
        
    }
}

// Getting our Categories page by Id
exports.exploreCategoriesByID = async(req, res) => {

    try {

        let categoryId = req.params.id;

        const limitNumber = 20;
        const categoryById = await Category.find({'category':categoryId}).limit(limitNumber);
  
        res.render('categories', { title: 'Cooking Blog - Categories' ,categoryById});

        
    } catch (error) {

        res.status(500).send({message: error.message || "Error Occured "});
        
    }
}





// Getting our Recipe pageand using there id to get content
exports.exploreRecipe = async(req, res) => {

    try {

       let recipeId =  req.params.id;

       const recipe = await Recipe.findById(recipeId);
  
        res.render('recipe', { title: 'Cooking Blog - Recipe',recipe});
>>>>>>> 2bfa3dbcec0bfaec9a7b2c6fc9995dde37418ffe

        
    } catch (error) {

        res.status(500).send({message: error.message || "Error Occured "});
        
    }
}



<<<<<<< HEAD
// 

// async function insertDummyCategoryData() {
//     try {
//         const categories = [
//             { name: "Thai", image: "thai-food.jpg" },
//             { name: "American", image: "american-food.jpg" },
//             { name: "Chinese", image: "chinese-food.jpg" },
//             { name: "Mexican", image: "mexican-food.jpg" },
//             { name: "Indian", image: "indian-food.jpg" },
//             { name: "Spanish", image: "spanish-food.jpg" },
//         ];

//         await Category.create(categories);
//     } catch (error) {
//         console.log('Error:', error);
//     }
// }
// insertDummyCategoryData();
=======




>>>>>>> 2bfa3dbcec0bfaec9a7b2c6fc9995dde37418ffe
