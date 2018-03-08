var express = require('express');
var router = express.Router();
var User = require('../models/cafe');

/* GET cafe page. */
router.get('/:cafename', function(req, res, next) {

    console.log(req.params.cafename);

    var cafeTag = req.params.cafename;
    var cafeTitle = "";
    var cafe = "";

    var cafes = [
        {name: "An Bialann", urlTag: "an-bialann"},
        {name: "Smokeys", urlTag: "smokeys"},
        {name: "Sult", urlTag: "sult"},
        {name: "Friars", urlTag: "friars"},
        {name: "Zinc", urlTag: "zinc"},
        {name: "Cloud Cafe", urlTag: "cloud-cafe"},
        {name: "The Wall", urlTag: "the-wall"},
        {name: "Caife na Gaeilge", urlTag: "caife-na-gaeilge"}
    ];

    for(var i = 0; i < cafes.length; i++) {
        if(cafes[i].urlTag == cafeTag) {
            cafeTitle = cafes[i].name;
            break;
        }
    }

    console.log("Cafe Name: " + cafeTitle);

	res.render('cafe', { title: cafeTitle + " | Uni-Bites", cafes: cafes, cafe: cafeTitle});
});


module.exports = router;