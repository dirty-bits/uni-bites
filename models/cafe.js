var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var imageSchema = mongoose.model('unibites-images').schema;
var commentSchema = mongoose.model('unibites-comments').schema;
var Schema = mongoose.Schema;

require('./util');

var cafeSchema = new mongoose.Schema({
    name:  {type: String},
    location:  {type: String},
    images: [imageSchema],
    comments: [commentSchema]
});

module.exports =  mongoose.model('unibites-cafes', cafeSchema);