const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserDataSchema = new Schema({
    name: {
        type: String,
        required: true,
        default: "John"
    },
    address: {
        type: Object
    }
})

var UserData = mongoose.model('userdata', UserDataSchema);

module.exports = UserData;