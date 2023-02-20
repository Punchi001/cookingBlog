require('../models/database');
const Category = require('../models/Category');
const Recipe= require('../models/Recipe');


// Getting our homepage

exports.homepage = async(req, res) => {

    try {

        const limitNumber = 5;
        const categories = await Category.find({}).limit(limitNumber);

        res.render('index', { title: 'Cooking Blog - Home' ,categories});

        
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


//func for inserting data in our database

async function insertDummyRecipeData() {
    try {
        const categories = [
          
        ];

        await Category.create(categories);
    } catch (error) {
        console.log('Error:', error);
    }
}
insertDummyRecipeData();


// func for inserting data in our database

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