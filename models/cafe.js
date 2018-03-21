var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var imageSchema = require('./image').schema;
var Schema = mongoose.Schema;

require('./util');
console.log(JSON.stringify(imageSchema));

const cafeSchema = new mongoose.Schema({
    name: { type: String },
    location: { type: String },
    urlTag: { type: String }
});

module.exports = mongoose.model('unibites-cafes', cafeSchema);