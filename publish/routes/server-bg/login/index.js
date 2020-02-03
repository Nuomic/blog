"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _db = require("../../db");

var _config = require("../../config");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var router = (0, _express.Router)();
var filter = {
  password: 0,
  _v: 0
};
var _default = router;
exports["default"] = _default;
router.post('/', function (req, res) {
  var _req$body = req.body,
      username = _req$body.username,
      password = _req$body.password,
      userid = _req$body.userid;

  if (userid) {} else _db.UserModel.findOne({
    username: username,
    password: password
  }, filter, function (err, user) {
    if (user) {
      res.cookie('userid', user._id, {
        maxAge: 1000 * 60 * 60 * 24 * 30
      });
      res.json(_objectSpread({}, _config.resTemp, {
        userInfo: user
      }));
    } else {
      var returnStatus = _config.resTemp.returnStatus;
      returnStatus = _objectSpread({}, returnStatus, {
        isSuccess: false
      });
      res.send(_objectSpread({}, _config.resTemp, {}, returnStatus));
    }
  });
});