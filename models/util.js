var mongoose = require("mongoose");
var connection = null;
var mongodbConnectionString = 'mongodb://localhost/uni-bitesDB';

console.log(mongoose.connection.db);

if (!mongoose.connection.db) {
    connection = mongoose.connect(mongodbConnectionString, function(err) {
        if(err) {
            console.error("Error connecting to mongoDB: %d", JSON.stringify(err));
        }
        console.log("connected to database: localhost");
    });
}

exports.connection = connection;