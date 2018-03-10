var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Templates - Default' });
});

router.get('/variables', function(req, res, next) {
    res.render('development-variables', 
                {
                    title: 'Variables',
                    layout: 'development-layout'
                });
});

router.get('/partials', function(req, res, next) {
    res.render('development-partials', 
                {
                    title: 'Partials',
                    layout: 'development-layout'
                });
});

router.get('/bootstrap', function(req, res, next) {
    res.render('development-bootstrap', 
                {
                    title: 'Bootstrap',
                    layout: 'development-layout'
                });
});

router.get('/sections', function(req, res, next) {
    res.render('development-sections', 
                {
                    title: 'Bootstrap',
                    layout: 'development-layout'
                });
});

router.get('/test', function(req, res, next) {

    console.log("[me] res.locals %s", JSON.stringify(res.locals));

var cafe = Mongoose.load(req.url.cafeid);

    res.render('development-test', 
                {   
                    title: 'Templates - No header',
                    layout: 'development-layout',

                    selectedCafe: cafe, 
                    numbers:[
                        {"name": "One", "urlTag":"1"},
                        {"name": "Two", "urlTag":"2"},
                        {"name": "Three", "urlTag":"3"},
                        {"name": "Four", "urlTag":"4"},
                        {"name": "Five", "urlTag":"5"},
                        {"name": "Six", "urlTag":"6"},
                        {"name": "Seven", "urlTag":"7"},
                        {"name": "Eight", "urlTag":"8"},
                        {"name": "Nine", "urlTag":"9"},
                        {"name": "Ten", "urlTag":"10"}
                    ]
            });
});


module.exports = router; 