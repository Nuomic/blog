"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _BasicLayout = _interopRequireDefault(require("../components/BasicLayout"));

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TabPane = _antd.Tabs.TabPane;

var _default = function _default() {
  var bdList = [{
    name: '首页',
    href: '/admin'
  }, {
    name: '分类管理'
  }];
  return _react["default"].createElement(_BasicLayout["default"], {
    breadcrumbList: bdList
  });
};

exports["default"] = _default;