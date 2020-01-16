"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _component = require("react-imvc/component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Header = _antd.Layout.Header,
    Sider = _antd.Layout.Sider,
    Content = _antd.Layout.Content,
    Footer = _antd.Layout.Footer;

var _default = function _default(_ref) {
  var collapsed = _ref.collapsed,
      handleToggle = _ref.handleToggle,
      breadcrumbList = _ref.breadcrumbList;
  return _react["default"].createElement(Header, {
    className: "basic-header"
  }, _react["default"].createElement(_antd.Icon, {
    className: "basic-trigger",
    type: collapsed ? 'menu-unfold' : 'menu-fold',
    onClick: handleToggle
  }), _react["default"].createElement("div", {
    className: "basic-breadcrumb",
    style: {
      display: 'inline-block'
    }
  }, breadcrumbList && _react["default"].createElement(_antd.Breadcrumb, {
    separator: ">",
    className: "basic-layout-breadcrumb-bg"
  }, breadcrumbList.map(function (item, index) {
    return _react["default"].createElement(_antd.Breadcrumb.Item, {
      key: index
    }, _react["default"].createElement(_component.Link, {
      to: item.href
    }, item.name));
  })) || null), _react["default"].createElement("div", {
    className: "fr",
    style: {
      paddingRight: 24
    }
  }, _react["default"].createElement(_antd.Button, null, "\u9000\u51FA\u767B\u5F55")));
};

exports["default"] = _default;