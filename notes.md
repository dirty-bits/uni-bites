
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
