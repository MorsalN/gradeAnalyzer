var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');


var port = 4000;

var routes = require('./routes/index.js');
//  var user = require('./routes/user'); //requires user module from user.js
// var messages = require('./routes/messages');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); // apparently you don't need this but the logic is that it will go into the view folder and get the .ejs folder 
app.set('public', path.join(__dirname, 'public'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({secret: "Your secret key"}));
app.use(express.static(path.join(__dirname, '/public')));
app.use('/', routes);
// # app.use('/user',user);
// # app.use('/messages',messages);



app.listen(port, function() {
  console.log('Listening in on port' + port);
});

module.exports = app;
