"use strict";

var express = require('express');

var app = express();

var cookie = require('cookie');

var cookieSize = require('./size');

app.use(cookieSize({
  maxSize: 300
}));
app.use(function (req, res, next) {
  res.send("\n    <pre>".concat(JSON.stringify(cookie.parse(req.headers.cookie), null, 2), "</pre>\n  "));
});
app.listen(3000, function () {
  return console.log('server start at 3000');
});