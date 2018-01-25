var express = require('express');
var router = express.Router();
var Comment = require('../models/comment');

router.post('/addComment', function(req, res, next) {

    comment = new Comment(req.body);
    comment.save(function(err, savedComment){

        if(err) {
			console.log("/addComment comment.save Error: \n\t%s", JSON.stringify(err));
//			throw err;
			res.send(err);
		}

        res.json({
            'id': savedComment._id
        });
    });

});

router.get('/getComments', function(req, res, next) {

    Comment.find(function(err, items) {

        if(err) {
            console.log("error: %s", JSON.stringify(err));
            res.send(err);
        }

        // console.log(items);
        res.json(items);
    }).sort('-date_created');
});

router.get('/getComment', function(req, res, next) {

    Comment.find(function(err, items) {

        if(err) {
            console.log("error: %s", JSON.stringify(err));
            // throw err;
            res.send(err);
        }

        console.log(items);
        res.json(items);
    }).sort('-date_created');
});

/**
Updates a comment already in the database
*/
router.put('/updateComment/:id', function(req, res, next){

    var id = req.params.id;
    Comment.update({_id:id}, req.body, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully updated the document"});
    });
});

/**
* Deletes a comment from the database
*/
router.delete('/removeComment/:id', function(req, res, next){

    var id = req.params.id;
    Comment.remove({_id:id}, function (err) {
        if (err)
            res.send(err);

        res.json({status : "Successfully removed the document"});
    });
});

module.exports = router; 