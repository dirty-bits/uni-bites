var express = require('express');
var router = express.Router();
var User = require('../models/cafe');

/* GET login page. */
router.get('/', function(req, res, next) {
	console.log("GET: Login");
	res.render('cafe', { title: 'Cafe' });
});


module.exports = router;