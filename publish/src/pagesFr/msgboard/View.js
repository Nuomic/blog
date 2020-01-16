"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _BasicLayout = _interopRequireDefault(require("../components/BasicLayout"));

var _Comments = _interopRequireDefault(require("../components/Comments"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(props) {
  console.log('props', props);
  var BreadcrumbList = [{
    name: '首页',
    href: '/home'
  }, {
    name: '留言板'
  }];
  return _react["default"].createElement(_BasicLayout["default"], {
    BreadcrumbList: BreadcrumbList
  }, _react["default"].createElement(_Comments["default"], null));
};

exports["default"] = _default;