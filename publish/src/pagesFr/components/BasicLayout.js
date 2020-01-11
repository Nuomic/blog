"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _component = require("react-imvc/component");

var _antd = require("antd");

var _config = require("../config");

var _StarBG = _interopRequireDefault(require("./StarBG"));

var _Header = _interopRequireDefault(require("./Header"));

var _Footer = _interopRequireDefault(require("./Footer"));

var _Sider = _interopRequireDefault(require("./Sider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var children = _ref.children,
      BreadcrumbList = _ref.BreadcrumbList;
  return _react["default"].createElement(_StarBG["default"], null, _react["default"].createElement(_Header["default"], null), _react["default"].createElement("div", {
    style: {
      width: '70%',
      minWidth: 1180,
      margin: 'auto'
    }
  }, BreadcrumbList && _react["default"].createElement(_antd.Breadcrumb, {
    separator: ">",
    className: "basic-layout-breadcrumb-bg"
  }, BreadcrumbList.map(function (item) {
    return _react["default"].createElement(_antd.Breadcrumb.Item, null, _react["default"].createElement(_component.Link, {
      to: item.href
    }, item.name));
  })), _react["default"].createElement(_antd.Row, {
    style: {
      overflow: 'hidden'
    }
  }, _react["default"].createElement(_antd.Col, {
    span: 17
  }, _react["default"].createElement("div", {
    className: "basic-layout-article-bg",
    style: {
      backgroundColor: _config.themeColor.articleBgColor
    }
  }, children)), _react["default"].createElement(_antd.Col, {
    span: 7
  }, _react["default"].createElement("div", {
    className: "basic-layout-sider-bg",
    style: {
      background: _config.themeColor.siderBgColor
    }
  }, _react["default"].createElement(_Sider["default"], null))))), _react["default"].createElement(_Footer["default"], null));
};

exports["default"] = _default;