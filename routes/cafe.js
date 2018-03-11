var express = require('express');
var router = express.Router();
var User = require('../models/cafe');

/* GET cafe page. */
router.get('/:cafename', function(req, res, next) {

    console.log(req.params.cafename);

    var cafeTag = req.params.cafename;
    var cafeTitle = "";
    var cafe = "";

    var cafes = req.app.locals.cafes;

    for(var i = 0; i < cafes.length; i++) {
        if(cafes[i].urlTag == cafeTag) {
            cafeTitle = cafes[i].name;
            break;
        }
    }

	res.render('cafe', { title: cafeTitle + " | Uni-Bites", cafe: cafeTitle});
});


module.exports = router;