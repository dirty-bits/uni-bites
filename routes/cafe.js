var express = require('express');
var router = express.Router();
var User = require('../models/cafe');

/* GET login page. */
router.get('/:cafename', function(req, res, next) {

    console.log(JSON.stringify(req.url.cafename));

    var cafeTag = req.url.cafename;
    var cafeTitle = "";
    var cafe = "";

    var cafes = [
        {name:"An Bialann", urlTag:"an-bialann"},
        {name:"Smokeys", urlTag: "smokeys"},
        {name:"Sult", urlTag: "sult"},
        {name:"Friars", urlTag: "friars"},
        {name:"Zinc", urlTag: "zinc"},
        {name:"Cloud-Cafe", urlTag: "cloud-cafe"},
        {name:"The-Wall", urlTag: "the-wall"},
        {name:"Caife-na-Gaeilge", urlTag: "caife-na-gaeilge"}
    ];

    for(var c in cafes) {
        if(c.urlTag == cafeTag) {
            cafeTitle = c.name;
            cafe = c;
            break;
        }
    }

    console.log(JSON.stringify(cafe));

	res.render('cafe', { title: cafeTitle, 'cafes': cafes, 'cafe': cafe});
});


module.exports = router;