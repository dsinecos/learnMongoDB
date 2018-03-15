const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before((done) => {

    // To connect to users_test database inside MongoDB instance running on locahost
    mongoose.connect('mongodb://localhost/users_test');
    mongoose.connection
        .once('open', () => { done(); })
        .on('error', (error) => {
            console.warn('Warning', error);
        });


})

beforeEach((done) => {
    const { users, comments, blogposts } = mongoose.connection.collections;

    users.drop(() => {
        comments.drop(() => {
            blogposts.drop(() => {
                done();
            })
        })
    })
})