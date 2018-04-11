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
router.post('/addComment', (reg, res, next) => {
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

module.exports = router;