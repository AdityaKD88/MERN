const {Schema, model} = require('../connection');

const myschema = new Schema({
    pid: Integer,
    pname: String,
    cname: String,
    pmodel: String,
    price: String
});

module.exports = model('products', myschema);