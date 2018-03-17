const mongoose = require('mongoose');
const UserData = require('./userData.js');


module.exports = main;

function main() {

    UserData.create({
        name: 'Jan',
        address: {
            homeAddress: 'home',
            officeAddress: 'office'
        }
    })

}