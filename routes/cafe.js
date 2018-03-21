const express = require('express');

const router = express.Router();
const User = require('../models/cafe');

/*GET cafe page. */
router.get('/:cafename', (req, res, next) => {
    console.log(req.params.cafename);

    const viewModel = {
        cafeTag: req.params.cafeTag,
        cafeName: req.params.cafename,
        cafe: null,
        title: null,
        lunch_menu: [
            {
                name: "Scone",
                price: 1.00
            },
            {
                name: "Sandwiches",
                price: 1.00
            },
            {
                name: "Panini/Bap",
                price: 1.00
            },
            {
                name: "Salad",
                price: 1.00
            },
            {
                name: "Chocolate Bar",
                price: 1.00
            }
        ],
        drink_menu: [
            {
                name: "Tea",
                price: 1.00
            },
            {
                name: "Coffee",
                price: 1.00
            },
            {
                name: "Americano",
                price: 1.00
            },
            {
                name: "Latte",
                price: 1.00
            },
            {
                name: "Milk",
                price: 100.00
            }
        ]
    }

    const cafes = req.app.locals.cafes;

    console.log(JSON.stringify(req.app.locals));

    for(let i = 0; i < cafes.length; i++) {
        if(cafes[i].urlTag == viewModel.cafeTag) {
            viewModel.title = `${cafe[i].name} | Uni-Bites`;
            break;
        }
    }

    res.render('cafe', viewModel);
});

module.exports = router;