const mongoose = require('mongoose');

const populateUsers = require('./users');
const populateCafes = require('./cafes');

const mongodbConnection = require('../models/util.js');

console.log('[populate-db]');
console.log(`   mongodb://${mongoose.connection.host}:${mongoose.connection.port}/${mongoose.connection.name}\n`);
console.log('   Clearing out old entries and inserting default data.\n');

//dropDb();
populateUsers();
populateCafes();

//TODO: remove this and promisify
//mongodbConnection.disconnect();
setTimeout(() => {
    console.log('[+] Finsihed - Press Ctrl+c to exit');
},
10000);