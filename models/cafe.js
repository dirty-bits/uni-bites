var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

require('./util');

var cafeSchema = new mongoose.Schema({
  name: String,
  location: String
});

module.exports = mongoose.model('cafe', cafeSchema);