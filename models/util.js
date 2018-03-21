const mongoose = require('mongoose');

let connection = null;

var mongodbConnectionString = "mongodb://localhost:27017/tester";

if(!mongoose.connection.db) {
    connection = mongoose.connect(mongodbConnectionString, (err) => {
        if(err) {
            console.error('Error connecting to mongoDB: %d', JSON.stringify(err));
        } else{
            console.log('connected to database...... ');
        }
    });
}

module.exports = connection;