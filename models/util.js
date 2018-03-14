var mongoose = require("mongoose");
var connection = null;

var mongodbConnectionString = "mongodb://mongodb3197fa:ny3pip@danu7.it.nuigalway.ie:8717/mongodb3197";

if (!mongoose.connection.db) {
    connection = mongoose.connect(mongodbConnectionString, function(err) {

        if(err) {
            console.error("Error connecting to mongoDB: %d", JSON.stringify(err));
            return;
        } else {
            console.log("connected to database...... ");
            require('./user');
            require('./image');
            require('./cafe');
        }
    });
}

exports.connection = connection;
