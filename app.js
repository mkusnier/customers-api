var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var customersRouter = require('./routes/customers');

var app = express();
var corsOptions = {
    origin: function(origin, callback) {
        callback(null, true);
    },
    optionsSuccessStatus: 200
  }
app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', customersRouter);

module.exports = app;
