const Promise = require('bluebird');
const mongoose = require('mongoose');
const Comment = require('../models/comment.js');

function promptPromise(message) {
    return new Promise(((resolve, reject) => {
        const result = window.prompt(message);
        if(result != null) {
            resolve(result);
        } else{
            reject(new Error('User cancelled'));
        }
    }));
}

const populateDB = function () {
    console.log('[Comments]');

    return new Promise(((resolve, reject) => {
        removeExisting()
            .then(() => {
                addData();
                resolve();
            })
            .error((reason) => {
                reject();
            });
    }));
};

var removeExisting = function () {
    return new Promise(((resolve, reject) => {
        Comment.find().count((err, count) => {
            if(err) {
                reject(new Error(err));
                return;
            }
        
            console.log('Removing %d comments..', count);

            Comment.find().remove((err) => {
                if(err) {
                    reject(new Error(err));
                }

                console.log('Comments removed.. ', err);
                resolve(count);
            });
        });
    }));
};

var addData = function () {
    //var comments = mongoose.model( 'firstapp-comments' );
    
    //Random comments courtesy of faker.js
    //https://rawgit.com/Marak/faker.js/master/examples/browser/index.html

    return new Promise(((resolve, reject) => {
        try{
            new Comment({
                user_name: 'anon',
                comment: 'compressing the hard drive won\'t do anything, we need to input the multi-byte SQL pixel!'
            }).save();

            new Comment({
                user_name: 'anon',
                comment: 'I\'ll quantify the primary SCSI microchip, that should circuit the COM panel!'
            }).save();
            
            new Comment({
                user_name: 'anon',
                comment: 'If we bypass the capacitor, we can get to the TCP sensor through the haptic AI pixel!'
            }).save();
            
            new Comment({
                user_name: 'anon',
                comment: 'hacking the firewall won\'t do anything, we need to generate the haptic PNG panel!'
            }).save();
            
            new Comment({
                user_name: 'anon',
                comment: 'The JSON interface is down, index the solid state microchip so we can synthesize the THX protocol!'
            }).save();
            
            new Comment({
                user_name: 'anon',
                comment: 'If we transmit the array, we can get to the JSON driver through the digital SCSI transmitter!'
            }).save();
            
            new Comment({
                user_name: 'anon',
                comment: 'Use the multi-byte CSS capacitor, then you can calculate the bluetooth monitor!'
            }).save();

            console.log('Comments added to Database');
            resolve();
        } catch(ex) {
            reject(ex);
        }
    }));
};

exports.populateDB = populateDB;