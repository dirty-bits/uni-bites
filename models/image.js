var mongoose = require('mongoose');
var Schema = mongoose.Schema;

require('./util');

var imageSchema = new mongoose.Schema({
    id: {type: Number},
    name: {type: String},
    tags: {type: String},
    image_main_url: {type: String},
    image_thumbnail_url: {type: String}
});

module.exports =  mongoose.model('unibites-images', imageSchema);