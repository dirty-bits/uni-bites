var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var User = require('../models/user');

router.get('/register', function(req, res, next) {
    res.render("register", {title:"uni-bites - Register"});
});

router.post('/users/register', function(req, res, next) {
    var username = req.body.user_name;
    var password = req.body.password;
    // Check if account already exists
    User.findOne({ 'user_name' : username }, function(err, user) {
        if (err)
            throw err;

        //    res.send(err);
        // check to see if theres already a user with that email
    
        if (user) {
            res.status(401).json({
                "status": "info",
                "body": "Username already taken"
            });
        } 
        else 
        {
            // If there is no user with that username create the user
            var newUser = new User();
            // set the user's local credentials
            newUser.user_name = username;
            newUser.password_hash = newUser.generateHash(password);
            newUser.access_token = createJwt({user_name:username});
            newUser.save(function(err, user) {

                if (err)
                    throw err;

                res.cookie('Authorization', 'Bearer ' + user.access_token);
                res.json({'success' : 'account created'});
            });
        }
    });
});

function createJwt(profile) {
    return jwt.sign(profile, 'CSIsTheWorst', {
        expiresIn: '10d'
    });
}

module.exports = router;