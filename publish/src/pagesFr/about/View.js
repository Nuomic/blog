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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = function _default(_ref) {
  var state = _ref.state;
  var blogdesc = state.blogdesc;
  console.log('blogdesc', blogdesc);
  var BreadcrumbList = [{
    name: '首页',
    href: '/home'
  }, {
    name: '关于我'
  }];
  var cardSetting = {
    size: 'small',
    bordered: false
  };
  return _react["default"].createElement(_BasicLayout["default"], {
    BreadcrumbList: BreadcrumbList
  }, _react["default"].createElement(_component.Style, {
    name: "about"
  }), _react["default"].createElement(_antd.Card, _extends({
    title: '个人介绍'
  }, cardSetting), _react["default"].createElement("p", {
    style: {
      lineHeight: 2,
      whiteSpace: 'pre-wrap'
    }
  }, blogdesc.userDesc)), _react["default"].createElement(_antd.Card, _extends({
    title: '博客介绍'
  }, cardSetting), _react["default"].createElement("p", {
    style: {
      lineHeight: 2,
      whiteSpace: 'pre-wrap'
    }
  }, blogdesc.blogDesc)), _react["default"].createElement(_antd.Card, _extends({
    title: '友情赞助'
  }, cardSetting), _react["default"].createElement("div", {
    style: {
      width: 200,
      margin: '0 20px',
      display: 'inline-block',
      textAlign: 'center'
    }
  }, _react["default"].createElement("img", {
    src: blogdesc.weChat,
    alt: "",
    width: "100%"
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 20
    }
  }, "\u5FAE\u4FE1")), _react["default"].createElement("div", {
    style: {
      width: 200,
      margin: '0 20px',
      display: 'inline-block',
      textAlign: 'center'
    }
  }, _react["default"].createElement("img", {
    src: blogdesc.alipay,
    alt: "",
    width: "100%"
  }), _react["default"].createElement("span", {
    style: {
      fontSize: 20
    }
  }, "\u652F\u4ED8\u5B9D"))));
};

exports["default"] = _default;