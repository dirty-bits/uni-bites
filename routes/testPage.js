var express = require('express');
var router = express.Router();
var hbsHelpers = require('./lib');

/* GET home page. */
router.get('/testPage', function(req, res, next) {
  res.render('footer', { 'title': 'Express', 'hbsHelpers':hbsHelpers(req) });
});

module.exports = router;