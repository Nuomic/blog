"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _BasicLayout = _interopRequireDefault(require("../components/BasicLayout"));

var _antd = require("antd");

var _Comment = _interopRequireDefault(require("../components/Comment"));

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
  }, _react["default"].createElement(_antd.Card, {
    title: _react["default"].createElement("div", {
      style: {
        textAlign: 'center'
      }
    }, _react["default"].createElement("p", null, "\u8BE6\u60C5\u9875"), _react["default"].createElement("p", null, "Dean \u535A\u6587,\u5DE5\u4F5C\u7B14\u8BB0 \u4E8C\u7EF4\u7801\u9605\u8BFB 2019-11-21 14:08"))
  }, "\u7231\u795E\u7684\u7BAD\u71AC\u65F6\u95F4\u6309\u65F6\u8985\u54E6\u554A\u63A5\u662F\u8985\u5065\u8EAB\u623F\u4E2A\u6848\u4EF6\u8985\u623F\u95F4\u7231\u54E6\u623F\u95F4\u7231\u54E6\u53D1\u89C9\u6015\u6B7B\u54E6\u623F\u95F4\u7231\u641C\u975E\u5EFA\u5B89\u53D1\u7968\u798F\u5EFA\u5965\u98DE\u4EA4\u4ED8\u4EF6\u5965\u6CD5"), _react["default"].createElement(_antd.Card, {
    size: "small"
  }, "\u4E0A\u4E00\u7BC7 \u4E0B\u4E00\u7BC7"), _react["default"].createElement(_Comment["default"], null));
};

exports["default"] = _default;