"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _component = require("react-imvc/component");

var _hook = require("react-imvc/hook");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import connect from 'react-imvc/hoc/connect';
var Header = _antd.Layout.Header; // export default withData(Loading)

var _default = function _default(_ref) {
  var collapsed = _ref.collapsed,
      handleToggle = _ref.handleToggle,
      breadcrumbList = _ref.breadcrumbList;

  var _useCtrl = (0, _hook.useCtrl)(),
      handleLogout = _useCtrl.handleLogout;

  var _useModelState = (0, _hook.useModelState)(),
      userInfo = _useModelState.userInfo;

  return /*#__PURE__*/_react["default"].createElement(Header, {
    className: "basic-header"
  }, /*#__PURE__*/_react["default"].createElement(_antd.Icon, {
    className: "basic-trigger",
    type: collapsed ? 'menu-unfold' : 'menu-fold',
    onClick: handleToggle
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "basic-breadcrumb",
    style: {
      display: 'inline-block'
    }
  }, breadcrumbList && /*#__PURE__*/_react["default"].createElement(_antd.Breadcrumb, {
    separator: ">",
    className: "basic-layout-breadcrumb-bg"
  }, breadcrumbList.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(_antd.Breadcrumb.Item, {
      key: index
    }, /*#__PURE__*/_react["default"].createElement(_component.Link, {
      to: item.href
    }, item.name));
  })) || null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "fr ",
    style: {
      paddingRight: 24,
      lineHeight: '66px'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      margin: '0 30px',
      position: 'relative',
      top: 10
    }
  }, /*#__PURE__*/_react["default"].createElement(_antd.Badge, {
    count: 100
  }, /*#__PURE__*/_react["default"].createElement(_antd.Icon, {
    type: "bell",
    style: {
      fontSize: 30
    }
  }))), /*#__PURE__*/_react["default"].createElement(_antd.Avatar, {
    src: userInfo.avatar
  }), /*#__PURE__*/_react["default"].createElement(_antd.Button, {
    type: "link"
  }, userInfo.nickname || userInfo.username), /*#__PURE__*/_react["default"].createElement(_antd.Button, {
    type: "link",
    onClick: handleLogout
  }, "\u9000\u51FA\u767B\u5F55")));
};

exports["default"] = _default;