
# fix error 1:

(node:13984) DeprecationWarning: `open()` is deprecated in mongoose >= 4.11.0, use `openUri()` instead, or set the
 `useMongoClient` option if using `connect()` or `createConnection()`. See http://mongoosejs.com/docs/connections.
html#use-mongo-client
Db.prototype.authenticate method will no longer be available in the next major release 3.x as MongoDB 3.6 will only allow auth against users in the admin db and will no longer allow multiple credentials on a socket. Please authenticate using MongoClient.connect with auth credentials.

# fix error 2:
(node:13984) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 1): TypeError: removeExisting(...).then(...).error is not a function
(node:13984) DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.

Error does not occur in the Comments section. Possibly due to the way they are called in populate-db.js

# Notes:
https://github.com/madhums/node-express-mongoose-demo/blob/master/config/routes.js
https://github.com/madhums/node-express-mongoose-demo/blob/master/test/test-users-create.js

# TODO
 * Make set the menu active class based on the url
 * Test
 * Add Test code

# Add mocha, chai, json-server | postman mock server, e2e, chromedriver tests 
https://github.com/elliotf/mocha-mongoose/blob/master/example/manual.js

# Promisifying:
Promises in the data

var Mongoose = Promise.promisifyAll(require("mongoose"));
http://bluebirdjs.com/docs/working-with-callbacks.html

read PROPERLY!
https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html

mongoose.Promise = require('bluebird');

var Promise = require("bluebird");
Promise.promisifyAll(require("mongoose"));

// the async version of User.findById will be User.findByIdAsync
https://gist.github.com/bclinkinbeard/5171359
http://bluebirdjs.com/docs/getting-started.html

https://github.com/caolan/async
http://mongoosejs.com/docs/populate.html

https://github.com/elliotf/mocha-mongoose


# Testing
Use protractor for ui testing, not just for AngularJS.
* http://www.protractortest.org/#/tutorial

Use supertest for testing the api's, copy the postman tests and implement them in 
code.

## Testing Stack
* Jasmine [Language, BDD type syntax]
* Chai [Should style assertions]
* Protractor [Test runner, possible to manage multiple browsers]

https://github.com/angular/protractor/blob/master/docs/frameworks.md

https://www.codementor.io/codementorteam/javascript-testing-framework-comparison-jasmine-vs-mocha-8s9k27za3
https://medium.com/welldone-software/an-overview-of-javascript-testing-in-2018-f68950900bc3
https://medium.com/@boriscoder/the-hidden-power-of-jest-matchers-f3d86d8101b0

# settings.json
Extract all settings out to a json file and add this to the
git.ignores file

# move app.js out into seperate servers, testing-server.js, production-server.js, develop-server.js each with seperate db's and seperate ports to enable easy quick unit testing locally while also possibly running seperate production and develop servers on the same box. 



DOCS:
https://jasmine.github.io/2.0/introduction.html
http://www.protractortest.org/#/
http://www.protractortest.org/#/locators#actions


http://www.protractortest.org/#/typescript