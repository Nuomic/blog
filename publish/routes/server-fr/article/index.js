"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _getArticle = _interopRequireDefault(require("./getArticle"));

var _saveArticle = _interopRequireDefault(require("./saveArticle"));

var _deleteArticle = _interopRequireDefault(require("./deleteArticle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)(); // const filter = { password: 0, _v: 0 };

var _default = router;
exports["default"] = _default;
router.get('/list', function (req, res) {
  return (0, _getArticle["default"])(req, res);
});
router.post('/save', function (req, res) {
  return (0, _saveArticle["default"])(req, res);
});
router.post('/delete', function (req, res) {
  return (0, _deleteArticle["default"])(req, res);
});