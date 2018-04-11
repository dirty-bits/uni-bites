var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

require('./util');

var cafeSchema = new mongoose.Schema({
  name: String,
  location: String
});

module.exports = {
    model = mongoose.model('unibites-users', cafeSchema)
    schema: cafeSchema;
}