const mongoose = require('mongoose');

const { events } = mongoose.connection.collections;

// console.log(mongoose.connection.collections);

module.exports = function() {

    // return Promise.all([events.drop(), clickedlinks.drop(), purchaseds.drop()]);
    return events.drop()

}


