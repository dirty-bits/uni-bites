var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/logout', function(req, res, next) {
    res.clearCookie('Authorization');
    res.redirect("/");
});


module.exports = router;