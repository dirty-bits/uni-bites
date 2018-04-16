const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Comment = require('./comment');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

require('./util');

const cafeSchema = new mongoose.Schema({
    name: { type: String },
    location: { type: String },
    urlTag: { type: String },
    comments:[{
        type: ObjectId,
        ref: "unibites-comments"
    }]
    
});

cafeSchema.methods.avgRating = function (average){
    return Comment.aggregate([
    {
        $group: {
            _id: '$cafe',
            ratingAvg: {$avg: '$rating'}
        }
    }
]);
   
};

//average star rating for cafes
Comment.aggregate([
    {
        $group: {
            _id: '$cafe',
            ratingAvg: {$avg: '$rating'}
        }
    }
], function (err, results){
    if(err){
        console.log(err);
    }else{
        console.log(results);
    }
});
module.exports = mongoose.model('unibites-cafes', cafeSchema);