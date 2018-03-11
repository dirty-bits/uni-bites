var express = require('express');
var router = express.Router();

/* GET careers page. */
router.get('/', function(req, res, next) {
	res.render('careers', { title: 'Careers @ Uni-Bites' });
});

module.exports = router;