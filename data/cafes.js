const mongoose = require('mongoose');
const Cafe = require('../models/cafe.js');

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

function add_cafes () {
    console.log('[Cafes]');

    // clear out entries
    Cafe.deleteMany({}).exec();

    for( var i = 0; i < cafes.length; i++ ) {
        console.log(`    * ${cafes[i].name}`);
        new Cafe(cafes[i]).save();
    }

    console.log();
};

module.exports = add_cafes