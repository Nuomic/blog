"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _BasicLayout = _interopRequireDefault(require("../components/BasicLayout"));

var _Article = _interopRequireDefault(require("../components/Article"));

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(props) {
  console.log('props', props);
  var BreadcrumbList = [{
    name: '首页',
    href: '/home'
  }, {
    name: '博文'
  }];
  return _react["default"].createElement(_BasicLayout["default"], {
    BreadcrumbList: BreadcrumbList
  }, _react["default"].createElement(_antd.Card, {
    bordered: false,
    size: "small",
    style: {
      marginBottom: 4,
      padding: 0,
      opacity: 0.8
    },
    className: "componentWillCreate"
  }, "\u6587\u7AE0\u9ED8\u8BA4\u6309\u65F6\u95F4\u6392\u5E8F \u53EF\u9009\u62E9\u5176\u4ED6\u7C7B\u578B\u6392\u5E8F -----\u5F85\u5F00\u53D1"), _react["default"].createElement(_Article["default"], null));
};

exports["default"] = _default;