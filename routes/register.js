var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var User = require('../models/user');

router.get('/', function(req, res, next) {
    res.render("register", {title:"uni-bites - Register" });
});

// TODO: This is an api call, used from javascript, here it looks like the
//       postback call from the register form, move into a non-rest api section
router.post('/', function(req, res, next) {
    var email = req.body.email;
    var password = req.body.password;
    var full_name = req.body.full_name;
    
    // Check if account already exists
    User.findOne({ 'email' : email }, function(err, user) {
        if (err)
            throw err;

        //    res.send(err);
        // check to see if theres already a user with that email
    
        if (user) {
            res.status(401).json({
                "status": "info",
                "body": "Email address already taken"
            });
        } 
        else 
        {
            // If there is no user with that username create the user
            var newUser = new User();
            // set the user's local credentials
            newUser.email = email;
            newUser.full_name = full_name;
            newUser.password_hash = newUser.generateHash(password);
            newUser.access_token = createJwt({email:email});
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