const {Schema, model} = require('mongoose');

const dentinhoSchema = new Schema({
    dentinho_name: String,
    bar_name: String,
    picture_url: String,

});

const dentinhos = model('Dentinho', dentinhoSchema);

module.exports = Dentinho;