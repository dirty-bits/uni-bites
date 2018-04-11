const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const cafe = require('../models/cafe');
require('./util');

const itemSchema = new Schema({
    name: { type: String },
    seller: { type: String }
});

module.exports = mongoose.model('unibites-items', itemSchema);