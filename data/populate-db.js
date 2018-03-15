const mongoose = require('mongoose');
const commentData = require('./comments');
const userData = require('./users');
const mongodbConnection = require('../models/util.js');

console.log('Attempting to populate the database.. ');

//this could fail when there are more complex dependencies between the documents
commentData.populateDB().then(() => {
    userData.populateDB();
}).finally(() => {
    //close database
});

/*
    try
    {
        // should be promise based..

    }
    finally
    {
        // mongodbConnection.connection.disconnect(
        //     function(error){
        //         console.log("error disconnecting from database: ", error);
        //     }
        // )
    }
*/