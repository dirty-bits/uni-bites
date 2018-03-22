require('dotenv').config();

const mongoose = require('mongoose');

const populateUsers = require('./users');
const populateCafes = require('./cafes');

const mongodbConnection = require('../models/util.js');

console.log('[populate-db]');
console.log(`   mongodb://${mongoose.connection.host}:${mongoose.connection.port}/${mongoose.connection.name}\n`);
console.log('   Clearing out old entries and inserting default data.\n');

//dropDb();
populateUsers()
.then(populateCafes)
.then(()=>{
    console.log('[+] Finished adding data to model.');
    mongodbConnection.disconnect();
});