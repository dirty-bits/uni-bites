var mongoose = require("mongoose");
var connection = null;

var mongodbConnectionString = "mongodb://#MongoDbUser#:#MongoDbPassword#@#MongoDbServer#:#MongoDbPort#/#MongoDbSchema#";

if (!mongoose.connection.db) {
    connection = mongoose.connect(mongodbConnectionString, function(err) {

        if(err) {
            console.error("Error connecting to mongoDB: %d", JSON.stringify(err));
            return;
        } else {
            console.log("connected to database...... ");
        }
    });
}

exports.connection = connection;
