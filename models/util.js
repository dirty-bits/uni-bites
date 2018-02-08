var mongoose = require("mongoose");
var connection = null;
var mongodbConnectionString = 'mongodb://mongodb3477rj:hy6rib@danu7:8717/mongodb3477';

console.log(mongoose.connection.db);

if (!mongoose.connection.db) {
    connection = mongoose.connect(mongodbConnectionString, function(err) {
        if(err) {
            console.error("Error connecting to mongoDB: %d", JSON.stringify(err));
        }
        console.log("connected to database: danu7.it.nuigalway.ie");
    });
}

exports.connection = connection;