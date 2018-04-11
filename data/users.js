
var mongoose = require('mongoose');
var User = require('../models/user.js');

var populateDB = function(){
  console.log("[Users]");

  return new Promise(
      function(resolve, reject) {
            removeExisting()
            .then(function(){
                addData();
                resolve();
            })
            .error(function(reason){
                reject();
            });
      }
    );
}

var removeExisting = function() {
  return new Promise(function(resolve, reject) {
    User.find().count(function(err, count){
        if(err){
            reject(new Error(err));
            return;
        }
        
        console.log("Removing %d users..", count)

        User.find().remove(function(err){
            if(err)
                reject(new Error(err));

            console.log("%d Users removed.. ", count);
            resolve(count);
        });
    });
  });
}

var addData = function()
{
    return new Promise(function(resolve, reject) {
        try
        {
            new User({
                user_name:'Admin', 
                password_hash:''
            }).save();

            new User({
                user_name:'Cafe Owner', 
                password_hash:''
            }).save();

            console.log("Added new Users to mongodb");
            resolve();
        }
        catch(exception)
        {
            console.log("Error added users to mongodb: %s", exception);
            reject(exception);
        }
    });
}

exports.populateDB = populateDB;