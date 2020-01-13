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
  }, "qq"), _react["default"].createElement(_Article["default"], null));
};

exports["default"] = _default;