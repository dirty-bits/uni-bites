var Promise = require("bluebird");
var mongoose = require('mongoose');
var Comment = require('../models/comment.js');
var Image = require('../models/image.js');

Image.remove({}).exec();

new Image({
    id: 1,
    name: "Sult",
    tags: "yummy",
    image_main_url: "sult.pnghjdsfk",
    image_thumbnail_url: "no.jpeg"
}).save();