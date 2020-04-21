"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _config = require("../config");

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "basic-footer",
    style: {
      backgroundColor: _config.themeColor.footerBgColor
    }
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "brand"
  }, /*#__PURE__*/_react["default"].createElement("h4", null, "Delas")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "social-section"
  }, /*#__PURE__*/_react["default"].createElement("h4", null, "CONNECT"), _config.footerDate.connectWay && _config.footerDate.connectWay.map(function (item) {
    return item.href ? /*#__PURE__*/_react["default"].createElement("a", {
      href: item.href,
      target: "blank",
      key: item.type
    }, /*#__PURE__*/_react["default"].createElement(_antd.Icon, {
      type: item.type,
      className: "connect-icon"
    })) : item.qrCode ? /*#__PURE__*/_react["default"].createElement(_antd.Tooltip, {
      arrowPointAtCenter: true,
      key: item.type,
      title: /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          width: 200,
          height: 220
        }
      }, /*#__PURE__*/_react["default"].createElement("img", {
        width: "200px",
        alt: item.alt,
        src: item.qrCode
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "align-center"
      }, item.alt))
    }, /*#__PURE__*/_react["default"].createElement(_antd.Icon, {
      type: item.type,
      className: "connect-icon"
    })) : null;
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "copyright-section"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "\xA9 ", _config.footerDate.startYear, " - ", new Date().getFullYear(), '  ', _config.footerDate.siteName), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      margin: '0 5px'
    }
  }, "|"), /*#__PURE__*/_react["default"].createElement("a", {
    href: "http://www.beian.miit.gov.cn",
    target: "blank"
  }, _config.footerDate.record)));
};

exports["default"] = _default;