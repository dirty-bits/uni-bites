var express = require('express');
var router = express.Router();

/* GET about us page. */
router.get('/', function(req, res, next) {
	res.render('about-us', { title: 'About Us', layout: 'no-header' });
});

module.exports = router;