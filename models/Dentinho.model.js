const {Schema, model} = require('mongoose');

const dentinhoSchema = new Schema({
    name: String,
    picture_url: String,
});

const Dentinho = model('Dentinho', dentinhoSchema);

module.exports = Dentinho;