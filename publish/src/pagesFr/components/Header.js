"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _config = require("./../config");

var _antd = require("antd");

var _connect = _interopRequireDefault(require("react-imvc/hoc/connect"));

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

  var handleClick = function handleClick(e) {
    window.location.href = "/".concat(e.key);
  };

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
    onClick: handleClick,
    mode: "horizontal",
    defaultSelectedKeys: currentPath != '/' ? currentPath : 'homes',
    style: {
      backgroundColor: _config.themeColor.headBgColor
    },
    className: "basic-header-menu"
  }, _react["default"].createElement(_antd.Menu.Item, {
    key: "home"
  }, "\u9996\u9875"), _react["default"].createElement(_antd.Menu.Item, {
    key: "about"
  }, "\u5173\u4E8E"), _react["default"].createElement(_antd.Menu.Item, {
    key: "article"
  }, "\u535A\u6587"), _react["default"].createElement(_antd.Menu.Item, {
    key: "portfolio"
  }, "\u4F5C\u54C1\u96C6"), _react["default"].createElement(_antd.Menu.Item, {
    key: "msgboard"
  }, "\u7559\u8A00\u677F"))), _react["default"].createElement("div", {
    style: {
      marginTop: 64
    }
  }, children));
});

exports["default"] = _default;