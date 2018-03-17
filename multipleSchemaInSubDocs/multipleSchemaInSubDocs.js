const mongoose = require('mongoose');
const main = require('./main.js');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/learn_mongo');

mongoose.connection
    .once('open', function (data) {
        console.log("Connection opened to learn_mongo database");
        const { userdatas } = mongoose.connection.collections;
        userdatas.drop(function () {
            console.log("Previous collections dropped");
        })
        console.log(mongoose.connection.collections);

        main();
    })
    .on('error', function (error) {
        console.warn("Warning ", error);
    })