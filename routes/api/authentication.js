const express = require('express');

const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../../models/user');


//TODO: This is an api call, used from javascript, here it looks like the
//postback call from the login form, move into a non-rest api section
router.post('/', (req, res, next) => {
    console.log('POST: Login. \n%s	 ', JSON.stringify(req.body));

    const email = req.body.email;
    const password = req.body.password;
    User.findOne({ 'email': email }, (err, user) => {
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

module.exports = router;