const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { Event, ClickedLinkEvent, PurchasedEvent, User } = require('./event.js');

module.exports = main;

console.log("Inside function main");
console.log(User.collection);
console.log(User.collection.name);
console.log(User.collection.namespace);

function main() {
    console.log("Inside function main");

    var cle = new ClickedLinkEvent({
        from: "John",
        to: "Jane"
    })

    var pe = new PurchasedEvent({
        product: new mongoose.Types.ObjectId
    })

    var e = new Event()

    Promise.all([cle.save(), pe.save(), e.save()])
    .then(function(data) {
        ClickedLinkEvent.find({})
        .then((data) => {
            console.log("ClickedLinkEvents");
            console.log(data);
        })

        PurchasedEvent.find({})
        .then((data) => {
            console.log("PurchasedEvent");
            console.log(data);
        })

        Event.find({})
        .then((data) => {
            console.log("Events");
            console.log(data);
        })
    })
}

