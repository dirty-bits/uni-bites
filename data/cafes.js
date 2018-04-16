var Promise = require("bluebird");
var mongoose = require('mongoose');
var Comment = require('../models/comment.js');
var Image = require('../models/image.js');
const Cafe = require('../models/cafe.js');

Image.remove({}).exec();

new Image({
    id: 1,
    name: "Sult",
    tags: "yummy",
    image_main_url: "sult.pnghjdsfk",
    image_thumbnail_url: "no.jpeg"
}).save();

const cafes = [
    {
        name: 'An Bialann',
        urlTag: 'an-bialann'
    },
    {
        name: 'Smokeys',
        urlTag: 'smokeys'
    },
    {
        name: 'Sult',
        urlTag: 'sult'
    },
    {
        name: 'Friars',
        urlTag: 'friars'
    },
    {
        name: 'Zinc',
        urlTag: 'zinc'
    },
    {
        name: 'Cloud Cafe',
        urlTag: 'cloud-cafe'
    },
    {
        name: 'The Wall',
        urlTag: 'the-wall'
    },
    {
        name: 'Caife na Gaeilge',
        urlTag: 'caife-na-gaeilge'
    }
];

function add_cafes() {
    //clear out entries, add default data
    return Cafe.deleteMany({}).then(
        (res) => {
            console.log('[Cafes]');
            console.log('Removed existing cafes, %s', res);
            return Cafe.insertMany(cafes, (err, docs) => {
                for(let i = 0; i < docs.length; i++) {
                    console.log(`    * ${docs[i].name}`);
                }
                console.log();
            });
        }
    );
}

module.exports = add_cafes;