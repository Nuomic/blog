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
  return /*#__PURE__*/_react["default"].createElement(_StarBG["default"], null, /*#__PURE__*/_react["default"].createElement(_Header["default"], null), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '70%',
      minWidth: 1180,
      margin: 'auto'
    }
  }, BreadcrumbList && /*#__PURE__*/_react["default"].createElement(_antd.Breadcrumb, {
    separator: ">",
    className: "basic-layout-breadcrumb-bg"
  }, BreadcrumbList.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(_antd.Breadcrumb.Item, {
      key: index
    }, /*#__PURE__*/_react["default"].createElement(_component.Link, {
      to: item.href
    }, item.name));
  })), /*#__PURE__*/_react["default"].createElement(_antd.Row, {
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/_react["default"].createElement(_antd.Col, {
    span: 17
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "basic-layout-article-bg",
    style: {
      backgroundColor: _config.themeColor.articleBgColor
    }
  }, children)), /*#__PURE__*/_react["default"].createElement(_antd.Col, {
    span: 7
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "basic-layout-sider-bg",
    style: {
      background: _config.themeColor.siderBgColor
    }
  }, /*#__PURE__*/_react["default"].createElement(_Sider["default"], {
    style: {
      width: '100%'
    }
  }))))), /*#__PURE__*/_react["default"].createElement(_Footer["default"], null), /*#__PURE__*/_react["default"].createElement(_antd.BackTop, {
    style: {
      articleBgColor: '#fff'
    }
  }));
};

exports["default"] = _default;