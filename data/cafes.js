const mongoose = require('mongoose');
const Cafe = require('../models/cafe.js');

const cafes = [
    {
        name: 'An Bialann',
        urlTag: 'an-bialann',
        long: -9.060548,
        lat : 53.278765
    },
    {
        name: 'Smokeys',
        urlTag: 'smokeys',
        long : -9.060245,
        lat: 53.269906
    },
    {
        name: 'Sult',
        urlTag: 'sult',
        long : -9.058331,
        lat : 53.278188
    },
    {
        name: 'Friars',
        urlTag: 'friars',
        long : -9.066198,
        lat : 53.284446
    },
    {
        name: 'Zinc',
        urlTag: 'zinc',
        long : -9.063305,
        lat : 53.283872
    },
    {
        name: 'Cloud Cafe',
        urlTag: 'cloud-cafe',
        long : -9.058582,
        lat : 53.280332
    },
    {
        name: 'The Wall',
        urlTag: 'the-wall',
        long : -9.062401,
        lat : 53.282282
    },
    {
        name: 'Caife na Gaeilge',
        urlTag: 'caife-na-gaeilge',
        long : -9.060548,
        lat : 53.278765
    }
];

function add_cafes() {
    //clear out entries, add default data
    return Cafe.deleteMany({}).then(
        (res) => {
            console.log('[Cafes]');
            console.log('Removed existing cafes, %s', res);
            for(let i = 0; i < cafes.length; i++) {
                console.log(`    * ${cafes[i].name}`);
                new Cafe(cafes[i]).save();
            }

            console.log();
        }
    );
}

module.exports = add_cafes;