"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _BasicLayout = _interopRequireDefault(require("../components/BasicLayout"));

var _PageView = _interopRequireDefault(require("./components/PageView"));

var _antd = require("antd");

var _ArticleCount = _interopRequireDefault(require("./components/ArticleCount"));

var _Total = _interopRequireDefault(require("./components/Total"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var state = _ref.state;
  console.log('state', state);
  var bdList = [{
    name: '首页'
  }];
  return /*#__PURE__*/_react["default"].createElement(_BasicLayout["default"], {
    breadcrumbList: bdList
  }, /*#__PURE__*/_react["default"].createElement(_antd.Row, {
    gutter: 18
  }, /*#__PURE__*/_react["default"].createElement(_antd.Col, {
    xxl: 16,
    md: 24,
    lg: 16
  }, /*#__PURE__*/_react["default"].createElement(_Total["default"], null)), /*#__PURE__*/_react["default"].createElement(_antd.Col, {
    xxl: 8,
    md: 24,
    lg: 8
  }, /*#__PURE__*/_react["default"].createElement(_ArticleCount["default"], null)), /*#__PURE__*/_react["default"].createElement(_antd.Col, {
    span: 24
  }, /*#__PURE__*/_react["default"].createElement(_PageView["default"], null))));
};

exports["default"] = _default;