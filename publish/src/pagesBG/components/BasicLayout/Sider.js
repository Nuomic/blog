"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _component = require("react-imvc/component");

var _config = require("../../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Sider = _antd.Layout.Sider;

var _default = function _default(_ref) {
  var currentPath = _ref.currentPath,
      collapsed = _ref.collapsed,
      handleToggle = _ref.handleToggle;
  return /*#__PURE__*/_react["default"].createElement(Sider, {
    className: "basic-sider overflow-hidden",
    trigger: null,
    collapsible: true,
    collapsed: collapsed,
    breakpoint: "lg"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "basic-logo"
  }), /*#__PURE__*/_react["default"].createElement(_antd.Menu, {
    theme: "dark",
    mode: "inline",
    defaultSelectedKeys: currentPath != '/admin' ? currentPath : 'home'
  }, _config.menuList && _config.menuList.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(_antd.Menu.Item, {
      key: item.key
    }, /*#__PURE__*/_react["default"].createElement(_component.Link, {
      to: "/admin/".concat(item.key)
    }, /*#__PURE__*/_react["default"].createElement(_antd.Icon, {
      type: item.icon
    }), /*#__PURE__*/_react["default"].createElement("span", null, item.name)));
  })));
};

exports["default"] = _default;