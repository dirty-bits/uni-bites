
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
            var admin = new User({
                email:'admin'
            });
            admin.password_hash = admin.generateHash("admin");
            admin.save();

            var cafe = new User({
                email:'cafe', 
            });
            cafe.password_hash = admin.generateHash("cafe");
            cafe.save();

            var test = new User({
                email:'test', 
            });
            test.password_hash = test.generateHash("test");
            test.save();

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