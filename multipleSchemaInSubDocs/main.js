const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { Event, ClickedLinkEvent, PurchasedEvent } = require('./event.js');

module.exports = main;

function main() {
    console.log("Inside function main");

    new ClickedLinkEvent({
        from: "John",
        to: "Jane"
    })
        .save()
        .then((data) => {
            // console.log(data)
        });

    new PurchasedEvent({
        product: new mongoose.Types.ObjectId
    })
        .save()
        .then((data) => {
            // console.log(data)
        });

    new Event()
        .save()
        .then((data) => {
            // console.log(data)
        });

}

