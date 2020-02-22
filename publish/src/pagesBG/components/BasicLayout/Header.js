"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _connect = _interopRequireDefault(require("react-imvc/hoc/connect"));

var _component = require("react-imvc/component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Header = _antd.Layout.Header;
var withData = (0, _connect["default"])(function (_ref) {
  var state = _ref.state,
      handlers = _ref.handlers;
  console.log('handlers', handlers);
  return {
    handleLogout: handlers.loadingText
  };
}); // export default withData(Loading)

var _default = withData(function (_ref2) {
  var collapsed = _ref2.collapsed,
      handleToggle = _ref2.handleToggle,
      breadcrumbList = _ref2.breadcrumbList,
      handleLogout = _ref2.handleLogout;
  // const { handleLogout } = useCtrl();
  console.log('handleLogout', handleLogout);
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
    className: "fr ",
    style: {
      paddingRight: 24,
      lineHeight: '66px'
    }
  }, _react["default"].createElement("span", {
    style: {
      margin: '0 30px',
      position: 'relative',
      top: 10
    }
  }, _react["default"].createElement(_antd.Badge, {
    count: 100
  }, _react["default"].createElement(_antd.Icon, {
    type: "bell",
    style: {
      fontSize: 30
    }
  }))), _react["default"].createElement(_antd.Avatar, null), _react["default"].createElement(_antd.Button, {
    type: "link",
    onClick: handleLogout
  }, "\u9000\u51FA\u767B\u5F55")));
});

exports["default"] = _default;