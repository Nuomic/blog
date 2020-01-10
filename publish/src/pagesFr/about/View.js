"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _BasicLayout = _interopRequireDefault(require("../components/BasicLayout"));

var _antd = require("antd");

var _component = require("react-imvc/component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(props) {
  console.log('props', props);
  var BreadcrumbList = [{
    name: 'home',
    href: '/home'
  }, {
    name: 'blog'
  }];
  return _react["default"].createElement(_BasicLayout["default"], {
    BreadcrumbList: BreadcrumbList
  }, _react["default"].createElement(_component.Style, {
    name: "about"
  }), _react["default"].createElement(_antd.Card, {
    style: {
      height: '100vh'
    },
    title: '关于我'
  }));
};

exports["default"] = _default;