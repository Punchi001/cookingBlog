require('../models/database');
const Category = require('../models/Category');
const Recipe= require('../models/Recipe');


// Getting our homepage

exports.homepage = async(req, res) => {

    try {

        const limitNumber = 5;
        const categories = await Category.find({}).limit(limitNumber);
        const latest  = await Recipe.find({}).sort({_id: -1}).limit(limitNumber);

        const food = {latest};

        res.render('index', { title: 'Cooking Blog - Home' ,categories,food});

        
    } catch (error) {

        res.status(500).send({message: error.message || "Error Occured "});
        
    }
}


// Getting our Categories page 
exports.exploreCategories = async(req, res) => {

    try {

        const limitNumber = 20;
        const categories = await Recipe.find({}).limit(limitNumber);

        res.render('categories', { title: 'Cooking Blog - Categories' ,categories});

        
    } catch (error) {

        res.status(500).send({message: error.message || "Error Occured "});
        
    }
}











//func for inserting data in our database

// async function insertDummyRecipeData() {
//     try {
//         const recipe_categories = [
//             { 
//                 "name": "TATER TOTS",
//                 "description": `The name for the food emphasizes the small size and playful shape of tater tots. In American slang, “tater” is another word for a potato. The word is used in many parts of the American south, although it is reasonably well known in the rest of the country as well. A “tot” is a small child, and the word could have been used to reference the size of the food, or the fact that it is frequently served to children. Alternate names for the food include “potato tots,” for the more formally minded, or just “tots” as a form of shorthand.
//                                 To make them, potatoes are shredded and then compacted into bite-sized logs. Initially, they were developed as a way of using up the remainders from French fry cutting. The grated potatoes are then deep fried, so that they acquire a crispy exterior. Ketchup is a common accompaniment to tater tots, although other condiments may be used as well, depending on the region. Some cooks also prefer to bake the cylinders, making them a slightly lower fat food.`,
//                 "email": "recipeemail@raddy.co.uk",
//                 "ingredients": [
//                           "1 Place potatoes in a large saucepan and cover with cold water by 1 inch. Bring to a boil and cook until parboiled, about 6-7 minutes; drain well and let cool.   ",
//                           "2 Using a box grater, finely shred potatoes. Using a clean dish towel or cheese cloth, drain potatoes completely, removing as much water as possible.",
//                           "3 Transfer potatoes to a large bowl. Stir in flour, garlic powder, onion powder, oregano and dill; season with salt and pepper, to taste. The mixture should be workable but dry. Form potatoes into tots.",
//                           "4 Heat vegetable oil in a large stockpot or Dutch oven over medium heat",
//                           "5 Add tots to the skillet, 5 or 6 at a time, and cook until evenly golden and crispy, about 3-4 minutes. Transfer to a paper towel-lined plate.",
//                           "6 Serve immediately, garnished with parsley, if desired.*"
//                         ],
//                 "category": "American", 
//                 "image": "tatertots.jpg"
//             },
//             { 
//                 "name": "TATER TOTS",
//                 "description": `The name for the food emphasizes the small size and playful shape of tater tots. In American slang, “tater” is another word for a potato. The word is used in many parts of the American south, although it is reasonably well known in the rest of the country as well. A “tot” is a small child, and the word could have been used to reference the size of the food, or the fact that it is frequently served to children. Alternate names for the food include “potato tots,” for the more formally minded, or just “tots” as a form of shorthand.
//                 To make them, potatoes are shredded and then compacted into bite-sized logs. Initially, they were developed as a way of using up the remainders from French fry cutting. The grated potatoes are then deep fried, so that they acquire a crispy exterior. Ketchup is a common accompaniment to tater tots, although other condiments may be used as well, depending on the region. Some cooks also prefer to bake the cylinders, making them a slightly lower fat food.`,
//                 "email": "recipeemail@raddy.co.uk",
//                 "ingredients": [
//                               "1 Place potatoes in a large saucepan and cover with cold water by 1 inch. Bring to a boil and cook until parboiled, about 6-7 minutes; drain well and let cool.   ",
//                               "2 Using a box grater, finely shred potatoes. Using a clean dish towel or cheese cloth, drain potatoes completely, removing as much water as possible.",
//                               "3 Transfer potatoes to a large bowl. Stir in flour, garlic powder, onion powder, oregano and dill; season with salt and pepper, to taste. The mixture should be workable but dry. Form potatoes into tots.",
//                               "4 Heat vegetable oil in a large stockpot or Dutch oven over medium heat",
//                               "5 Add tots to the skillet, 5 or 6 at a time, and cook until evenly golden and crispy, about 3-4 minutes. Transfer to a paper towel-lined plate.",
//                               "6 Serve immediately, garnished with parsley, if desired.*"
//                             ],
//                 "category": "American", 
//                 "image": "tatertots.jpg"
//                           },

          
          
//         ];

//         await Recipe.create(recipe_categories);
//     } catch (error) {
//         console.log('Error:', error);
//     }
// }
// insertDummyRecipeData();


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