var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

require('./util');

var cafeSchema = new mongoose.Schema({
  name:  {type: String},
  location:  {type: String}
});

module.exports =  mongoose.model('unibites-cafes', cafeSchema);