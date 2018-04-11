
var mongoose = require('mongoose');
var commentData = require('./comments');
var userData = require('./users');
var mongodbConnection = require('../models/util.js');

console.log("Attempting to populate the database.. ");

// this could fail when there are more complex dependencies between the documents
commentData.populateDB().then(
    function(){
        userData.populateDB();
    }
).finally(function (){
    // close database
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