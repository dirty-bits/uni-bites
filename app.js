var express = require('express');
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
var privacyPolicy = require('./routes/privacy-policy');
var aboutUs = require('./routes/about-us');
var careers = require('./routes/careers');

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public','images','favicon.ico')));
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
app.use('/', register);
app.use('/cafe', cafe);
app.use('/privacy-policy', privacyPolicy);
app.use('/about-us', aboutUs);
app.use('/careers', careers);

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

// render the error page
 res.status(err.status || 500);
 res.render('error');
});

// TODO: Remove when we can load this from the database
app.locals.cafes = [
   {name: "An Bialann", urlTag: "an-bialann"},
   {name: "Smokeys", urlTag: "smokeys"},
   {name: "Sult", urlTag: "sult"},
   {name: "Friars", urlTag: "friars"},
   {name: "Zinc", urlTag: "zinc"},
   {name: "Cloud Cafe", urlTag: "cloud-cafe"},
   {name: "The Wall", urlTag: "the-wall"},
   {name: "Caife na Gaeilge", urlTag: "caife-na-gaeilge"}
];

module.exports = app;
