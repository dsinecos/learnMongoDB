const mongoose = require('mongoose');
const main = require('./main.js');
const DropModels = require('./dropModels.js')

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/learn_mongo');

mongoose.connection
    .once('open', function (data) {
        console.log("Connection opened to learn_mongo database");
        // DropModels()
        // .then((data) => {
        //     main();
        // })
        // .catch((err) => console.log(err));
        main();
    })
    .on('error', function (error) {
        console.warn("Warning ", error);
    })