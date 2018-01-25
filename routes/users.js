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

router.post('/login', function(req, res, next) {
    console.log("POST: Login. \n%s	 ", JSON.stringify (req.body));

    var username = req.body.user_name;
    var password = req.body.password;
    User.findOne({'user_name': username}, function (err, user) {
        // if there are any errors, return the error
		if (err) {
			console.log("/users/login User.findOne Erro: \n\t%s", JSON.stringify(err));
			throw err;
		}

        // If user account found then check the password
        if (user) {
            var validLogin = true;
            //try {
                validLogin = user.validPassword(password);
            // }
            // catch(invalidPasswordEx) {
            //     console.log("login error: %s", JSON.stringify(invalidPasswordEx));
            //     validLogin = false;
            // }

            // validLogin
            // Compare passwords
            if (validLogin) {
                // Success : Assign new access token for the session
                user.access_token = createJwt({user_name: username});
                console.log("user.access_token: %s ", user.access_token);

                user.save();
                console.log("saved user");
                res.cookie('Authorization', 'Bearer ' + user.access_token);

                console.log("set cookie: %s", JSON.stringify({'Authorization': 'Bearer ' + user.access_token}));
                res.json({'success' : 'loggedIn'});
                }
            else {
                res.status(401).send({
                    "status": "error",
                    "body": "Email or password does not match"
                });
            }
        }
        else {
            res.status(401).send({
                "status": "error",
                "body": "Username not found"
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