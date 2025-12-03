var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser=require('body-parser');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var pool = require('./utils/db');
var app = express();
var newuser = require('./signup');
var authenticateController=require('./controllers/authenticate-controller');
var kotRouter = require('./controllers/kot-controller');
var backupRouter = require('./controllers/backup-controller');
var mobileApi = require('./controllers/mobileApi.controller');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/dist')));
app.get(['/','/kot','/signup','/login','/backup'], function(req, res) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key,token,Origin,X-Origin');
  res.sendFile('index.html', { root: __dirname + '/public/dist' });
});

app.options('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma, Expires");
  res.sendStatus(200);
});

app.use('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.post('/signup',newuser.addUser);
app.post('/login',authenticateController.authenticate);
app.use(kotRouter);
app.use('/api',mobileApi);
app.use(function(req, res, next) {
  next(createError(404));
});

app.post('/name',function(res,next){
  res.json({
    message: "Hi I am working fine"
  })
})
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// var server = app.listen(8080, function() {
//   console.log('Ready on port %d', server.address().port);
// });
console.log('Ready on port 3008');

// catch 404 and forward to error handler


module.exports = app;
