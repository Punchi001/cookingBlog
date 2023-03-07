require('../models/database');
const Category = require('../models/Category');
const Recipe= require('../models/Recipe');


// Getting our homepage

exports.homepage = async(req, res) => {




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

