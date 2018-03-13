const assert = require('assert');
const User = require('../src/user');

describe('Subdocuments', () => {

    it("Can create a sub-document", (done) => {
        const joe = new User({
            name: 'Joe',
            posts: [{ title: 'PostTitle' }]
        });

        joe.save()
            .then(() => User.findOne({ name: 'Joe' }))
            .then((user) => {
                assert(user.posts[0].title === "PostTitle");
                done();
            })

    })

    it("Can add sub-documents to an existing record", (done) => {
        const joe = new User({
            name: 'Joe',
            posts: []
        });

        joe
            .save()
            .then(() => User.findOne({ name: 'Joe' }))
            .then((user) => {
                user.posts.push({ title: 'NewPost' });
                return user.save();
            })
            .then(() => User.findOne({ name: 'Joe' }))
            .then((user) => {
                assert(user.posts[0].title === "NewPost");
                done();
            })
    })

    it("Can remove an existing sub-document", (done) => {
        const joe = new User({
            name: 'Joe',
            posts: [{ title: "New Title" }]
        });

        joe
            .save()
            .then(() => User.findOne({ name: 'Joe' }))
            .then((user) => {
                const post = user.posts[0];
                user.posts.remove(post);
                return user.save();
            })
            .then(() => User.findOne({ name: 'Joe' }))
            .then((user) => {
                assert(user.posts.length === 0);
                done();
            })
    })
})