const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const Schema = mongoose.Schema;

require('./util');

const cafeSchema = new mongoose.Schema({
    name: { type: String },
    location: { type: String },
    urlTag: { type: String },
    long: {type: Number },
    lat: {type: Number }
});

module.exports = mongoose.model('unibites-cafes', cafeSchema);