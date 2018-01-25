var jwt = require('jsonwebtoken');

function helpers(request) {
    var req = request;
    console.log("helpers.authorised called");

    var auth = false;
    if(req.cookies.Authorization) {
        var jwtString = req.cookies.Authorization.split(" ");

        var profile = null;
        try {
            profile = verifyJwt(jwtString[1]);
        }
        catch(ex) {
            console.log("Helpers: Caught exception: %s", ex);
        }

        auth = profile != null;
    }

    return helpers = {
        authorised: auth, 
        notAuthorised: !auth, 
        isAuthorised: function() {
            console.log ( "helpers.isAuthorised called" );
            return auth;
        },
        unAuthorised: function() {
            console.log ( "helpers.unAuthorised called" );
            return !auth;
        },
        username: function() {
            console.log( "helpers.username called" );
            // TODO: save username in cookie on login
            return "Not Implemented";
        }
    }
}

function verifyJwt(jwtString) {
    var value = jwt.verify(jwtString, 'CSIsTheWorst');
    return value;
}

module.exports = helpers;