var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var lepidopteraRouter = require('./routes/lepidoptera');
var birdsRouter = require('./routes/birds');
var sightingsRouter = require('./routes/sightings');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/birds', birdsRouter);
app.use('/lepidoptera', lepidopteraRouter);
app.use('/sightings', sightingsRouter);


// error handler
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Oops! Something is broken.')
})

app.listen(3000, () => {
  console.log("Server running on port 3000");
 });

module.exports = app;
