const {Schema, model} = require('mongoose');

const dentinho = require('./Dentinho.model')

const barsSchema = new Schema({
    name: String,
    opening_hours: String,
    address: String,
    rating: Number,
    picture_url: String,
    dentinho: [dentinho],
});

const Bars = model('Bars', barsSchema);

module.exports = Bars;