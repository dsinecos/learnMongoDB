const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var eventSchema = new Schema(
    {
        time: {
            type: Date,
            defafult: Date.now
        }
    },
    {
        discriminatorKey: 'kind'
    }
)

var Event = mongoose.model('Event', eventSchema);

var clickedEventSchema = new Schema(
    {
        from: { type: String, required: true },
        to: { type: String, required: true }
    },
    {
        discriminatorKey: 'kind'
    }
)

var ClickedLinkEvent = Event.discriminator('ClickedLink', clickedEventSchema);

var purchasedSchema = new Schema(
    {
        product: { type: Schema.Types.ObjectId }
    },
    {
        discriminatorKey: 'kind'
    }
)

var PurchasedEvent = Event.discriminator('Purchased', purchasedSchema);

var userSchema = new Schema(
    {
        name: String,
        phone: Number
    }
)

var User = mongoose.model('UserData', userSchema);

module.exports = {
    Event: Event,
    ClickedLinkEvent: ClickedLinkEvent,
    PurchasedEvent: PurchasedEvent,
    User: User
}