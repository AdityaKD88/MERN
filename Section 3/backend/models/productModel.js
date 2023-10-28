const {Schema, model} = require('../connection');

const myschema = new Schema({
    id: String,
    pname: String,
    price: String
});

module.exports = model('products', myschema);