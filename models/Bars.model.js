const {Schema, model} = require('mongoose');

const barsSchema = new Schema({
    name: String,
    opening_hours: String,
    address: String,
    rating: Number,
    picture_url: String,
    dentinho: [String], //dentinho: [ type: Schema.Types.ObjectId],
    drinks: [String]
});

const Bars = model('Bars', barsSchema);

module.exports = Bars;