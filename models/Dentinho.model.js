const {Schema, model} = require('mongoose');

const dentinhoSchema = new Schema({
    name: String,
    picture_url: String,
    dentinho: [ type: Schema.Types.ObjectId],
    drinks: [String]
});

const Dentinho = model('Dentinho', dentinhoSchema);

module.exports = Dentinho;