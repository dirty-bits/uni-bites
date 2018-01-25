var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var hbsHelpers = require('./lib');

/* GET feed page. */
router.get('/', function(req, res, next) {
  // TODO: move catch into the verifyJwt, recode verifyJwt to return a boolean 
  try {
    var jwtString = req.cookies.Authorization.split(" ");
    console.log("req.cookies.Authorization: %s", req.cookies.Authorization);
    var profile = verifyJwt(jwtString[1]);  
    if (profile) {
      res.render('feed', {'hbsHelpers':hbsHelpers(req)});
    }
  }
  catch(err) {
    console.log ("/feed Caught error: %s", JSON.stringify(err));
    res.render ("unauthorised", {title: "", 
                                description:"You are not authorised to access this url, please login first.", 
                                url:"/feed"} );
  }
});

function verifyJwt(jwtString) {
  var value = jwt.verify(jwtString, 'CSIsTheWorst');
  return value;
}

module.exports = router;