"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _zh_CN = _interopRequireDefault(require("antd/lib/locale-provider/zh_CN"));

var _antd = require("antd");

var _connect = _interopRequireDefault(require("react-imvc/hoc/connect"));

var _component = require("react-imvc/component");

var _jsCookie = _interopRequireDefault(require("js-cookie"));

var _Header = _interopRequireDefault(require("./Header"));

var _Sider = _interopRequireDefault(require("./Sider"));

var _Footer = _interopRequireDefault(require("./Footer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Content = _antd.Layout.Content;
var withData = (0, _connect["default"])(function (_ref) {
  var state = _ref.state;
  return {
    currentPath: state.location.pathname,
    initCollapsed: state.initCollapsed
  };
});

var _default = withData(function (_ref2) {
  var children = _ref2.children,
      breadcrumbList = _ref2.breadcrumbList,
      currentPath = _ref2.currentPath,
      initCollapsed = _ref2.initCollapsed;

  var _useState = (0, _react.useState)(initCollapsed),
      _useState2 = _slicedToArray(_useState, 2),
      collapsed = _useState2[0],
      setCollapsed = _useState2[1];

  var handleToggle = function handleToggle() {
    _jsCookie["default"].get('collapsed') == 'false' && _jsCookie["default"].set('collapsed', true) || _jsCookie["default"].set('collapsed', false);
    setCollapsed(_jsCookie["default"].get('collapsed') == 'false' ? false : true);
  };

  var handleChangeCollapsed = function handleChangeCollapsed(collapsed) {
    // console.log('collapsed', collapsed);
    _jsCookie["default"].set('collapsed', collapsed);

    setCollapsed(_jsCookie["default"].get('collapsed') == 'false' ? false : true);
  };

  return /*#__PURE__*/_react["default"].createElement(_antd.ConfigProvider, {
    locale: _zh_CN["default"]
  }, /*#__PURE__*/_react["default"].createElement(_component.Style, {
    name: "antd"
  }), /*#__PURE__*/_react["default"].createElement(_component.Style, {
    name: "antdPro"
  }), /*#__PURE__*/_react["default"].createElement(_component.Style, {
    name: "customize"
  }), /*#__PURE__*/_react["default"].createElement(_component.Style, {
    name: "commonBG"
  }), /*#__PURE__*/_react["default"].createElement(_antd.Layout, {
    style: {
      minWidth: 600
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "position-fixed",
    style: {
      paddingLeft: collapsed ? 80 : 200,
      transition: '0.2s'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    collapsed: collapsed,
    handleToggle: handleToggle,
    breadcrumbList: breadcrumbList
  })), /*#__PURE__*/_react["default"].createElement(_antd.Layout, {
    style: {
      marginLeft: collapsed ? 80 : 200,
      transition: '0.2s'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Sider["default"], {
    currentPath: currentPath,
    collapsed: collapsed,
    handleToggle: handleChangeCollapsed
  }), /*#__PURE__*/_react["default"].createElement(Content, {
    className: "basic-content"
  }, children)), /*#__PURE__*/_react["default"].createElement(_Footer["default"], null)));
});

exports["default"] = _default;