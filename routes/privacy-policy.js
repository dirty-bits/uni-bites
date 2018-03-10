var express = require('express');
var router = express.Router();

/* GET privacy policy page. */
router.get('/', function(req, res, next) {
	res.render('privacy-policy', { title: 'Privacy Policy', layout:'no-header' });
});

module.exports = router;