"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _connect = _interopRequireDefault(require("react-imvc/hoc/connect"));

var _component = require("react-imvc/component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Header = _antd.Layout.Header,
    Sider = _antd.Layout.Sider,
    Content = _antd.Layout.Content,
    Footer = _antd.Layout.Footer;
var withData = (0, _connect["default"])(function (_ref) {
  var state = _ref.state;
  return {
    state: state
  };
});

var _default = withData(function (_ref2) {
  var state = _ref2.state,
      children = _ref2.children,
      BreadcrumbList = _ref2.BreadcrumbList;
  //目录
  var menuList = [{
    key: 'home',
    name: '首页',
    icon: 'home'
  }, {
    key: '2',
    name: '文章管理',
    icon: 'video-camera'
  }, {
    key: '3',
    name: '栏目管理',
    icon: 'upload'
  }, {
    key: '4',
    name: '资源管理',
    icon: 'upload'
  }, {
    key: '5',
    name: '留言管理',
    icon: 'upload'
  }];

  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      collapsed = _useState2[0],
      setCollapsed = _useState2[1];

  var handleToggle = function handleToggle() {
    setCollapsed(!collapsed);
  };

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_component.Style, {
    name: "antd"
  }), _react["default"].createElement(_component.Style, {
    name: "antdPro"
  }), _react["default"].createElement(_component.Style, {
    name: "customize"
  }), _react["default"].createElement(_component.Style, {
    name: "common"
  }), _react["default"].createElement(_antd.Layout, null, _react["default"].createElement(Sider, {
    className: "basic-sider",
    trigger: null,
    collapsible: true,
    collapsed: collapsed,
    breakpoint: "lg",
    onCollapse: handleToggle
  }, _react["default"].createElement("div", {
    className: "basic-logo"
  }), _react["default"].createElement(_antd.Menu, {
    theme: "dark",
    mode: "inline",
    defaultSelectedKeys: ['1']
  }, menuList && menuList.map(function (item) {
    return _react["default"].createElement(_antd.Menu.Item, {
      key: item.key
    }, _react["default"].createElement(_antd.Icon, {
      type: item.icon
    }), _react["default"].createElement("span", null, item.name));
  }))), _react["default"].createElement(_antd.Layout, {
    style: {
      marginLeft: collapsed ? 80 : 200,
      transition: '0.2s'
    }
  }, _react["default"].createElement("div", {
    className: "overflow-hidden position-fixed"
  }, _react["default"].createElement(Header, {
    className: "basic-header"
  }, _react["default"].createElement(_antd.Icon, {
    className: "basic-trigger",
    type: collapsed ? 'menu-unfold' : 'menu-fold',
    onClick: handleToggle
  })), _react["default"].createElement("div", {
    className: "basic-breadcrumb"
  }, BreadcrumbList && _react["default"].createElement(_antd.Breadcrumb, {
    separator: ">",
    className: "basic-layout-breadcrumb-bg"
  }, BreadcrumbList.map(function (item) {
    return _react["default"].createElement(_antd.Breadcrumb.Item, null, _react["default"].createElement(Link, {
      to: item.href
    }, item.name));
  })))), _react["default"].createElement("div", {
    style: {
      marginTop: 66
    }
  }), _react["default"].createElement(Content, {
    className: "basic-content"
  }, children), _react["default"].createElement(Footer, {
    className: "align-center"
  }, "Ant Design \xA92018 Created by Ant UED"))));
});

exports["default"] = _default;