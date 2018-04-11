const express = require('express');

const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user');

router.get('/', (req, res, next) => {
    res.render('register', { title: 'uni-bites - Register' });
});

//TODO: This is an api call, used from javascript, here it looks like the
//postback call from the register form, move into a non-rest api section
router.post('/', (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const full_name = req.body.full_name;
    
    //Check if account already exists
    User.findOne({ email }, (err, user) => {
        if(err) {
            throw err;
        }

        //res.send(err);
        //check to see if theres already a user with that email
    
        if(user) {
            res.status(401).json({
                status: 'info',
                body: 'Email address already taken'
            });
        } else{
            //If there is no user with that username create the user
            const newUser = new User();

            //set the user's local credentials
            newUser.email = email;
            newUser.full_name = full_name;
            newUser.password_hash = newUser.generateHash(password);
            newUser.access_token = createJwt({ email });
            newUser.save((err, user) => {
                if(err) {
                    throw err;
                }

                res.cookie('Authorization', `Bearer ${user.access_token}`);
                res.json({ success: 'account created' });
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