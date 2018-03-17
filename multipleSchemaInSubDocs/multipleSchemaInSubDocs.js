const mongoose = require('mongoose');
const main = require('./main.js');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/learn_mongo');

mongoose.connection
    .once('open', function (data) {
        console.log("Connection opened to learn_mongo database");
        
        main();
    })
    .on('error', function (error) {
        console.warn("Warning ", error);
    })