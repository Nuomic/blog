"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _BasicLayout = _interopRequireDefault(require("../components/BasicLayout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default() {
  var bdList = [{
    name: '首页',
    href: '/'
  }, {
    name: '文章管理',
    href: '/articlemng'
  }];
  return _react["default"].createElement(_BasicLayout["default"], {
    breadcrumbList: bdList
  });
};

exports["default"] = _default;