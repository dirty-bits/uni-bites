const express = require('express');

const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user');

/*GET login page. */
router.get('/', (req, res, next) => {
    res.render('login', { title: 'uni-bites - Login' });
});

//TODO: This is an api call, used from javascript, here it looks like the
//postback call from the login form, move into a non-rest api section
router.post('/', (req, res, next) => {
    console.log('POST: Login. \n%s	 ', JSON.stringify(req.body));

    const email = req.body.email;
    const password = req.body.password;
    User.findOne({ email }, (err, user) => {
        //if there are any errors, return the error
        if(err) {
            console.log('/users/login User.findOne Erro: \n\t%s', JSON.stringify(err));
            throw err;
        }

        //If user account found then check the password
        if(user) {
            let validLogin = true;

            //try {
            validLogin = user.validPassword(password);

            //}
            //catch(invalidPasswordEx) {
            //console.log("login error: %s", JSON.stringify(invalidPasswordEx));
            //validLogin = false;
            //}

            //validLogin
            //Compare passwords
            if(validLogin) {
                //Success : Assign new access token for the session
                user.access_token = createJwt({ email });
                console.log('user.access_token: %s ', user.access_token);

                user.save();
                console.log('saved user');
                res.cookie('Authorization', `Bearer ${user.access_token}`);

                console.log('set cookie: %s', JSON.stringify({ Authorization: `Bearer ${user.access_token}` }));
                res.json({ success: 'loggedIn' });
            } else{
                res.status(401).send({
                    status: 'error',
                    body: 'Invalid email/passsword.' //should not differentiate error messages at this level (imformation leak, could check usernames / emails)
                });
            }
        } else{
            res.status(401).send({
                status: 'error',
                body: 'Invalid email/passsword.' //should not differentiate error messages at this level (imformation leak, could check usernames / emails)
            });
        }
    });
});

function createJwt(profile) {
    return jwt.sign(profile, 'CSIsTheWorst', {
        expiresIn: '10d'
    });
}

//router.post('/users/login', function(req, res, next){
//console.log("POST: Login. \n%s	 ", req.body);
//var username = req.body.user_name;
//var password = req.body.password;

//User.findOne({'user_name': username}, function (err, user) {
//// if there are any errors, return the error
		
//if (err) {
//console.log("/users/login User.findOne Erro: \n\t%s", err);
//throw err;
//}

////if (err)
////	res.json(err);

//// If user account found then check the password
//if (user) {

//// Compare passwords
//if (user.validPassword(password)) {
//// Success : Assign new access token for the session
//user.access_token = createJwt({user_name: username});
//console.log("user.access_token: %s ", user.access_token);
//user.save();
//console.log("saved user");
//res.cookie('Authorization', 'Bearer ' + user.access_token);
//console.log("set cookie: %s", {'Authorization': 'Bearer ' + user.access_token});
//res.json({'success' : 'loggedIn'});
//}
//else {
//res.status(401).send({
//"status": "error",
//"body": "Email or password does not match"
//});
//}
//}
//else
//{
//res.status(401).send({
//"status": "error",
//"body": "Username not found"
//});
//}
//});
//});

module.exports = router;