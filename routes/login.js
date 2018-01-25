var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET login page. */
router.get('/', function(req, res, next) {
	console.log("GET: Login");
	res.render('login', { title: 'Login' });
});

// router.post('/users/login', function(req, res, next){
// 	console.log("POST: Login. \n%s	 ", req.body);
// 	var username = req.body.user_name;
// 	var password = req.body.password;

// 	User.findOne({'user_name': username}, function (err, user) {
// 		// if there are any errors, return the error
		
// 		if (err) {
// 			console.log("/users/login User.findOne Erro: \n\t%s", err);
// 			throw err;
// 		}

// 		//if (err)
// 		//	res.json(err);

// 		// If user account found then check the password
// 		if (user) {

// 			// Compare passwords
// 			if (user.validPassword(password)) {
// 				// Success : Assign new access token for the session
// 				user.access_token = createJwt({user_name: username});
// 				console.log("user.access_token: %s ", user.access_token);
// 				user.save();
// 				console.log("saved user");
// 				res.cookie('Authorization', 'Bearer ' + user.access_token);
// 				console.log("set cookie: %s", {'Authorization': 'Bearer ' + user.access_token});
// 				res.json({'success' : 'loggedIn'});
// 			}
// 			else {
// 				res.status(401).send({
// 					"status": "error",
// 					"body": "Email or password does not match"
// 				});
// 			}
// 		}
// 		else
// 		{
// 			res.status(401).send({
// 				"status": "error",
// 				"body": "Username not found"
// 			});
// 		}
// 	}); 
// });

module.exports = router;