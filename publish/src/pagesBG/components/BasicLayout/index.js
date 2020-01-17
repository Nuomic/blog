"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _zh_CN = _interopRequireDefault(require("antd/lib/locale-provider/zh_CN"));

var _antd = require("antd");

var _connect = _interopRequireDefault(require("react-imvc/hoc/connect"));

var _component = require("react-imvc/component");

var _Header = _interopRequireDefault(require("./Header"));

var _Sider = _interopRequireDefault(require("./Sider"));

var _Footer = _interopRequireDefault(require("./Footer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Content = _antd.Layout.Content;
var withData = (0, _connect["default"])(function (_ref) {
  var state = _ref.state;
  return {
    state: state,
    currentPath: state.location.pathname
  };
});

var _default = withData(function (_ref2) {
  var state = _ref2.state,
      children = _ref2.children,
      breadcrumbList = _ref2.breadcrumbList,
      currentPath = _ref2.currentPath;

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      collapsed = _useState2[0],
      setCollapsed = _useState2[1];

  console.log('state', state);
  console.log('collapsed', collapsed);

  var handleToggle = function handleToggle() {
    setCollapsed(!collapsed);
  };

  var handleChangeCollapsed = function handleChangeCollapsed(collapsed) {
    console.log('collapsed', collapsed);
    setCollapsed(collapsed);
  };

  return _react["default"].createElement(_antd.ConfigProvider, {
    locale: _zh_CN["default"]
  }, _react["default"].createElement(_component.Style, {
    name: "antd"
  }), _react["default"].createElement(_component.Style, {
    name: "antdPro"
  }), _react["default"].createElement(_component.Style, {
    name: "customize"
  }), _react["default"].createElement(_component.Style, {
    name: "commonBG"
  }), _react["default"].createElement(_antd.Layout, null, _react["default"].createElement("div", {
    className: "position-fixed",
    style: {
      paddingLeft: collapsed ? 80 : 200,
      transition: '0.2s'
    }
  }, _react["default"].createElement(_Header["default"], {
    collapsed: collapsed,
    handleToggle: handleToggle,
    breadcrumbList: breadcrumbList
  })), _react["default"].createElement(_antd.Layout, {
    style: {
      marginLeft: collapsed ? 80 : 200,
      transition: '0.2s'
    }
  }, _react["default"].createElement(_Sider["default"], {
    currentPath: currentPath,
    collapsed: collapsed,
    handleToggle: handleChangeCollapsed
  }), _react["default"].createElement(Content, {
    className: "basic-content"
  }, children)), _react["default"].createElement(_Footer["default"], null)));
});

exports["default"] = _default;