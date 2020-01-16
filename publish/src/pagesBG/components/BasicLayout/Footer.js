"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Footer = _antd.Layout.Footer;

var _default = function _default() {
  return _react["default"].createElement(Footer, {
    className: "align-center"
  }, "Ant Design \xA92018 Created by Ant UED");
};

exports["default"] = _default;