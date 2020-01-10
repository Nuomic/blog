"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _config = require("../config");

var _antd = require("antd");

var _component = require("react-imvc/component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default() {
  return _react["default"].createElement("div", {
    className: "basic-footer",
    style: {
      backgroundColor: _config.themeColor.footerBgColor
    }
  }, _react["default"].createElement("div", null, _react["default"].createElement("div", {
    className: "brand"
  }, _react["default"].createElement("h4", null, "Delas")), _react["default"].createElement("div", {
    className: "social-section"
  }, _react["default"].createElement("h4", null, "CONNECT"), _react["default"].createElement(_component.Link, {
    to: "#"
  }, _react["default"].createElement(_antd.Icon, {
    type: "github",
    className: "connect-icon"
  })), _react["default"].createElement(_component.Link, {
    to: "#"
  }, _react["default"].createElement(_antd.Icon, {
    type: "qq",
    className: "connect-icon"
  })), _react["default"].createElement(_component.Link, {
    to: "#"
  }, _react["default"].createElement(_antd.Icon, {
    type: "wechat",
    className: "connect-icon"
  })), _react["default"].createElement(_component.Link, {
    to: "#"
  }, _react["default"].createElement(_antd.Icon, {
    type: "weibo",
    className: "connect-icon"
  })))), _react["default"].createElement("div", {
    className: "copyright-section"
  }, "2019ssssssssssssssssssssssssssss"));
};

exports["default"] = _default;