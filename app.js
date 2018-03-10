var express = require('express');
// TODO: use express-hbs instead for the templating and sections... 

var express_handlebars = require('express-handlebars'); 

var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var login = require('./routes/login');
var feed = require('./routes/feed');
var register = require('./routes/register');
var commentsAPI = require('./routes/comments');
var cafe = require('./routes/cafe');

var development = require('./routes/development');

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.set('layouts', path.join(__dirname, 'views/layouts'));
//app.set('partials', path.join(__dirname, 'views/partials'));

app.set('view engine', 'hbs');

console.log("* [me] layoutsDir: %s ",  __dirname + '/views');

var hbs = express_handlebars.create({
//        layoutsDir: __dirname + '/views',             // changing this to /views/layouts causes problems here, must be set elsewhere
        partialsDir: [__dirname + '/views/partials'],   // TODO: this does not seem to work here?  

        extname:"hbs",
        layouts: "layouts", // use express-hbs
        defaultLayout:"layout",

        // TODO: I think template data should be passed in from here
        //       This is where helper functions should be provided at 
        //       the top level
        helpers: {
            // Load data from cache, if no cache then load from 
            // mongodb and populate cache

            // for now just return temporary data

            foo: function () { return 'FOO!'; },
            bar: function () { return 'BAR!'; }
        }
    }
);

app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');


// initalisation of hbs object above should remove the need to do this
// related to issue with /views/layout issue
var removethis = require('hbs');
removethis.registerPartials(__dirname + '/views/partials');

// is there a register partials and watch for development... 
// removethis.re


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/', commentsAPI);
app.use('/users', users);
app.use('/login', login);
app.use('/feed', feed);
app.use('/register', register);
app.use('/cafe', cafe);

// /development route to ease 
app.use('/development', development);

// add global variables for layouts
app.use(function (req, res, next) {
    res.locals.cafestest = [
        {"name": "An Bialann", "urlTag":"an-bialann"},
        {"name": "smokeys", "urlTag":"smokeys"},
        {"name": "Sult", "urlTag":"sult"},
        {"name": "Friars", "urlTag":"friars"},
        {"name": "Zinc", "urlTag":"zinc"},
        {"name": "Cloud Cafe", "urlTag":"cloud-cafe"},
        {"name": "The Wall", "urlTag":"the-wall"},
        {"name": "Caife na Gaeilge", "urlTag":"caife-na-gaeilge"}
    ];
    
    console.log('[me] Added res.locals.cafestest');
    console.log(JSON.stringify(res.locals.cafestest));

    next();
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// add templating 
function exposeTemplates(req, res, next) {
    // Uses the `ExpressHandlebars` instance to get the get the **precompiled**
    // templates which will be shared with the client-side of the app.
    hbs.getTemplates('shared/templates/', {
        cache      : app.enabled('view cache'),
        precompiled: true
    }).then(function (templates) {
        // RegExp to remove the ".handlebars" extension from the template names.
        var extRegex = new RegExp(hbs.extname + '$');

        // Creates an array of templates which are exposed via
        // `res.locals.templates`.
        templates = Object.keys(templates).map(function (name) {
            return {
                name    : name.replace(extRegex, ''),
                template: templates[name]
            };
        });

        // Exposes the templates during view rendering.
        if (templates.length) {
            res.locals.templates = templates;
        }

        setImmediate(next);
    })
    .catch(next);
}

module.exports = app;
