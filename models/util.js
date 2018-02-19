var mongoose = require("mongoose");
var connection = null;
var mongodbConnectionString = "mongodb://#MongoDbUser#:#MongoDbPassword#@#MongoDbServer#:#MongoDbPort#/#MongoDbSchema#";

console.log(mongoose.connection.db);

if (!mongoose.connection.db) {
    connection = mongoose.connect(mongodbConnectionString, function(err) {
        if(err) {
            console.error("Error connecting to mongoDB: %d", JSON.stringify(err)); 
            return;
        }
        console.log("connected to database...... ");
    });
}

exports.connection = connection;