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
  return /*#__PURE__*/_react["default"].createElement(Footer, {
    className: "align-center"
  }, "\u535A\u5BA2\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF \xA92019-", new Date().getFullYear(), " \u5F20\u4F1F\u5F3A");
};

exports["default"] = _default;