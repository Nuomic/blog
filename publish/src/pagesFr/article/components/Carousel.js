"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default() {
  return _react["default"].createElement(_antd.Carousel, {
    autoplay: true
  }, _react["default"].createElement("div", null, _react["default"].createElement("h3", null, "1")), _react["default"].createElement("div", null, _react["default"].createElement("h3", null, "2")), _react["default"].createElement("div", null, _react["default"].createElement("h3", null, "3")), _react["default"].createElement("div", null, _react["default"].createElement("h3", null, "4")));
};

exports["default"] = _default;