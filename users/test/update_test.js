const assert = require('assert');
const User = require('../src/user');

describe("Updating records", () => {
    let joe;

    beforeEach((done) => {
        joe = new User({ name: 'Joe' });
        joe
            .save()
            .then(() => done())
    });

    function assertName(operation, done) {

        operation
            .then(() => User.find({}))
            .then((users) => {
                assert(users.length === 1);
                assert(users[0].name === 'Alex');
                done();

            })
    }

    it('Instance type using set n save', (done) => {
        assertName(joe.set('name', 'Alex').save(), done)
    })

    it("Update via Model instance", (done) => {
        assertName(joe.update({ name: 'Alex' }), done);
    })

    it("Update via Model class method update", (done) => {
        assertName(
            User.update({ name: 'Joe' }, { name: 'Alex' }),
            done
        );
    });

    it("Update via Model class method findOneAndUpdate", (done) => {
        assertName(
            User.findOneAndUpdate({ name: 'Joe' }, { name: 'Alex' }),
            done
        );
    });

    it("Update via Model class method findByIdAndUpdate", (done) => {
        assertName(
            User.findByIdAndUpdate(joe._id, { name: 'Alex' }),
            done
        );
    });
});