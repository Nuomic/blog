"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _config = require("./../config");

var _antd = require("antd");

var _config2 = require("../config");

var _connect = _interopRequireDefault(require("react-imvc/hoc/connect"));

var _component = require("react-imvc/component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Header = _antd.Layout.Header;
var withData = (0, _connect["default"])(function (_ref) {
  var state = _ref.state;
  return {
    currentPath: state.currentPath
  };
});

var _default = withData(function (_ref2) {
  var children = _ref2.children,
      currentPath = _ref2.currentPath;
  return _react["default"].createElement(_antd.Layout, {
    style: {
      backgroundColor: _config.themeColor.headBgColor
    }
  }, _react["default"].createElement(Header, {
    style: {
      backgroundColor: _config.themeColor.headBgColor
    },
    className: "basic-header"
  }, _react["default"].createElement("div", {
    className: "logo"
  }), _react["default"].createElement(_antd.Menu, {
    mode: "horizontal",
    defaultSelectedKeys: currentPath != '/' ? currentPath : 'home',
    style: {
      backgroundColor: _config.themeColor.headBgColor,
      color: '#fff'
    },
    className: "basic-header-menu"
  }, _config2.menuList && _config2.menuList.map(function (item) {
    return _react["default"].createElement(_antd.Menu.Item, {
      key: item.key
    }, _react["default"].createElement(_component.Link, {
      to: "/".concat(item.key)
    }, _react["default"].createElement("span", {
      style: {
        color: '#fff'
      }
    }, item.name)));
  }))), _react["default"].createElement("div", {
    style: {
      marginTop: 64
    }
  }, children));
});

exports["default"] = _default;