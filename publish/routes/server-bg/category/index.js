"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _getCategory = _interopRequireDefault(require("./getCategory"));

var _saveCategory = _interopRequireDefault(require("./saveCategory"));

var _deleteCategory = _interopRequireDefault(require("./deleteCategory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)(); // const filter = { password: 0, _v: 0 };

var _default = router;
exports["default"] = _default;
router.get('/list', function (req, res) {
  return (0, _getCategory["default"])(req, res);
});
router.post('/save', function (req, res) {
  return (0, _saveCategory["default"])(req, res);
});
router.post('/delete', function (req, res) {
  return (0, _deleteCategory["default"])(req, res);
});