const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const usersRouter = require('./routes/users');
const characterRouter = require('./routes/characters')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/users', usersRouter);
app.use('/characters', characterRouter)


module.exports = app;
