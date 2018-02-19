var express = require('express');
var router = express.Router();
var hbsHelpers = require('./lib');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 'title': 'Express', 'hbsHelpers':hbsHelpers(req) });
});

module.exports = router;