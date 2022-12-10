const {Schema, model} = require('mongoose');

const dentinhoSchema = new Schema({
    name: String,
    picture_url: String,
    bar: [{type: Schema.Types.ObjectId, ref:'Bars'}]
});

const Dentinho = model('Dentinho', dentinhoSchema);

module.exports = Dentinho;