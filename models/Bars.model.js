const { Schema, model } = require("mongoose");

const barsSchema = new Schema({
  name: String,
  opening_hours: String,
  address: String,
  rating: Number,
  picture_url: "",
});

const Bars = model("Bars", barsSchema);

module.exports = Bars;
