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
  return _react["default"].createElement(_BasicLayout["default"], {
    breadcrumbList: bdList
  }, _react["default"].createElement(_antd.Row, {
    gutter: 12
  }, _react["default"].createElement(_antd.Col, null, _react["default"].createElement(_Total["default"], null)), _react["default"].createElement(_antd.Col, {
    xxl: 18,
    md: 24,
    lg: 16
  }, _react["default"].createElement(_PageView["default"], null)), _react["default"].createElement(_antd.Col, {
    xxl: 6,
    md: 24,
    lg: 8
  }, _react["default"].createElement(_ArticleCount["default"], null))));
};

exports["default"] = _default;