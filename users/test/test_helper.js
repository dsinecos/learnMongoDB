const mongoose = require('mongoose');

// To connect to users_test database inside MongoDB instance running on locahost
mongoose.connect('mongodb://localhost/users_test');

mongoose.connection
    .once('open', () => console.log("Good to go "))
    .on('error', (error) => {
        console.warn('Warning', error);
    });

beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => {
        done();
    });
})