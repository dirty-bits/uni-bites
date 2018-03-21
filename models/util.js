const mongoose = require('mongoose');

let connection = null;

const mongodbConnectionString = 'mongodb://#MongoDbUser#:#MongoDbPassword#@#MongoDbServer#:#MongoDbPort#/#MongoDbSchema#';

if(!mongoose.connection.db) {
    connection = mongoose.connect(mongodbConnectionString, (err) => {
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

module.exports = connection;