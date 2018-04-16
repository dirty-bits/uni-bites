const express = require('express');

const router = express.Router();
const Comment = require('../models/comment');

/*GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', { title: 'uni-bites' });
});

/*GET login page.
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'uni-bites' });
});
*/

/*GET feed page. */
router.get('/feed', (req, res, next) => {
    res.render('feed', { title: 'uni-bites' });
});

module.exports = router;

/**
* Add comments to database
*/
router.post('/addComment', (req, res, next) => {
//Extract the request body which contains the comments
    comment = new Comment(req.body);
    comment.save((err, savedComment) => {
        if(err) {
            throw err;
        }

        res.json({
            id: saveComment._id
        });
    });
});

/**
*Return all comments from database
*/
router.get('/getComments', (req, res, next) => {
    Comment.find({ user_name: 'uni-bites' }, (err, comments) => {
        if(err) {
            res.send(err);
        }

        res.json(comments);
    });
});

/**
  Updates a comment already in the database
 */
router.put('/updateComment/:id', (req, res, next) => {

    var id = req.params.id;
    Comment.update({_id:id}, req.body, (err) => {
        if (err)
            res.send(err);

        res.json({status : "Successfully updated the document"});
    });
});

/**
 * Deletes a comment from the database
 */
router.delete('/removeComment/:id', (req, res, next) => {

    var id = req.params.id;
    Comment.remove({_id:id}, (err) => {
        if (err)
            res.send(err);

        res.json({status : "Successfully removed the document"});
    });
});


module.exports = router;