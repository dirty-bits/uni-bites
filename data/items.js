const mongoose = require('mongoose');
const Item = require('../models/item');
const Cafe = require('../models/cafe');

const items = [
    {
        name: "Tea",
        price: [{cafeTag: "an-bialann", price: 1.00}, {cafeTag: "zinc", price: 2.00}],
        category: "Drink"
    },
    {
        name: "Coffee",
        price: [{cafeTag: "an-bialann", price: 1.00}, {cafeTag: "zinc", price: 2.00}],
        category: "Drink"
    },
    {
        name: "Americano",
        price: [{cafeTag: "an-bialann", price: 1.00}, {cafeTag: "zinc", price: 2.00}],
        category: "Drink"
    },
    {
        name: "Latte",
        price: [{cafeTag: "an-bialann", price: 1.00}, {cafeTag: "zinc", price: 2.00}],
        category: "Drink"
    },
    {
        name: "Scone",
        price: [{cafeTag: "an-bialann", price: 1.00}, {cafeTag: "zinc", price: 2.00}],
        category: "Lunch"
    },
    {
        name: "Sandwiches",
        price: [{cafeTag: "an-bialann", price: 1.00}, {cafeTag: "zinc", price: 2.00}],
        category: "Lunch"
    },
    {
        name: "Panini/Bap",
        price: [{cafeTag: "an-bialann", price: 1.00}, {cafeTag: "zinc", price: 2.00}],
        category: "Lunch"
    },
    {
        name: "Salad",
        price: [{cafeTag: "an-bialann", price: 1.00}, {cafeTag: "zinc", price: 2.00}],
        category: "Lunch"
    },
    {
        name: "Chocolate Bar",
        price: [{cafeTag: "an-bialann", price: 1.00}, {cafeTag: "zinc", price: 2.00}],
        category: "Lunch"
    }
];

function add_items() {
    //clear out entries, add default data
    return Item.deleteMany({}).then(
        (res) => {
            console.log('[Items]');
            console.log('Removed existing items, %s', res);
            return Item.insertMany(items, (err, docs) => {
                for(let i = 0; i < docs.length; i++) {
                    console.log(`    * ${docs[i].name}`);
                }
                console.log();
            })
        }
    );
}

module.exports = add_items;