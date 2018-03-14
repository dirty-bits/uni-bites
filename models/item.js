var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var cafe = require('../models/cafe');
require('./util');

var itemSchema = new Schema({
    name:  {type: String},
    seller:  {type: String}
});

module.exports = mongoose.model('unibites-items', itemSchema);