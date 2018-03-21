const mongoose = require('mongoose');
const User = require('../models/user.js');

function add_users() {

    return User.deleteMany({}).then(
        (res) => {
            console.log('\n[Users]');
            console.log('Removed existing users, %s', res);

            const admin = new User({
                email: 'admin'
            });
            admin.password_hash = admin.generateHash('admin');
            admin.save();
            console.log('   * admin');

            const cafe = new User({
                email: 'cafe'
            });
            cafe.password_hash = admin.generateHash('cafe');
            cafe.save();
            console.log('   * cafe');

            const test = new User({
                email: 'test'
            });
            test.password_hash = test.generateHash('test');
            test.save();
            console.log('   * test\n');
        }
    );
}

module.exports = add_users;
