const { Schema, model } = require("mongoose");

const dentinho = require('./Dentinho.model')

const barsSchema = new Schema({
    name: String,
    opening_hours: String,
    address: String,
    rating: Number,
    picture_url: String,
    dentinho: [{type: Schema.Types.ObjectId, ref:'Dentinho'}],
});

const Bars = model("Bars", barsSchema);

module.exports = Bars;
