const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGODB_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');

        // Models Schema
        require('./Category');
        require('./Recipe');
    })
    .catch(error => console.error('Error connecting to MongoDB', error));
