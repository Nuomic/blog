"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactSticky = require("react-sticky");

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(props) {
  var renderTabBar = function renderTabBar(props, DefaultTabBar) {
    return /*#__PURE__*/_react["default"].createElement(_reactSticky.Sticky, {
      topOffset: -80
    }, function (_ref) {
      var style = _ref.style;
      return /*#__PURE__*/_react["default"].createElement(DefaultTabBar, _extends({}, props, {
        style: _objectSpread({}, style, {
          background: '#fff',
          top: 68,
          zIndex: 1
        })
      }));
    });
  };

  return /*#__PURE__*/_react["default"].createElement(_reactSticky.StickyContainer, null, /*#__PURE__*/_react["default"].createElement(_antd.Tabs, _extends({}, props, {
    renderTabBar: renderTabBar
  }), props.children));
};

exports["default"] = _default;