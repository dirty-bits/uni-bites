const mongoose = require('mongoose');
const User = require('../models/user.js');

const populateDB = function () {
    console.log('[Users]');

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
        User.find().count((err, count) => {
            if(err) {
                reject(new Error(err));
                return;
            }
        
            console.log('Removing %d users..', count);

            User.find().remove((err) => {
                if(err) {
                    reject(new Error(err));
                }

                console.log('%d Users removed.. ', count);
                resolve(count);
            });
        });
    }));
};

var addData = function () {
    return new Promise(((resolve, reject) => {
        try{
            const admin = new User({
                email: 'admin'
            });
            admin.password_hash = admin.generateHash('admin');
            admin.save();

            const cafe = new User({
                email: 'cafe'
            });
            cafe.password_hash = admin.generateHash('cafe');
            cafe.save();

            const test = new User({
                email: 'test'
            });
            test.password_hash = test.generateHash('test');
            test.save();

            console.log('Added new Users to mongodb');
            resolve();
        } catch(exception) {
            console.log('Error added users to mongodb: %s', exception);
            reject(exception);
        }
    }));
};

exports.populateDB = populateDB;