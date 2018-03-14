var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

require('./util');

var usersSchema = new Schema({
    full_name: {type: String},
    email: {type: String},
    password_hash: {type: String},
    date_created: {type: Date, default: new Date()},
    fb_id:{ type: String, default: null },
    access_token: {type: String}
});

usersSchema.pre('save', function(next){
  console.log("saving user: password: %s password_hash: %s", this.password, this.password_hash);
  next();
})

usersSchema.methods.generateHash = function(password){
    console.log("usersSchema.methods.generateHash: %s", password);
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

usersSchema.methods.validPassword = function(password) {
    console.log("usersSchema.methods.validPassword: %s, %s", password, this.password);
    return bcrypt.compareSync(password, this.password_hash);
}

module.exports = mongoose.model('unibites-users', usersSchema);