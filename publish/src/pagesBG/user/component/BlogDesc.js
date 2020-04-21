"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _hook = require("react-imvc/hook");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Item = _antd.Form.Item;
var TextArea = _antd.Input.TextArea;

var _default = _antd.Form.create()(function (_ref) {
  var form = _ref.form;

  // const { state } = useModelState();
  var _useCtrl = (0, _hook.useCtrl)(),
      handelGetSetting = _useCtrl.handelGetSetting,
      handleSaveSetting = _useCtrl.handleSaveSetting;

  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  console.log('data', data);
  (0, _react.useEffect)(function () {
    handelGetSetting('about', setData);
  }, []);
  var getFieldDecorator = form.getFieldDecorator,
      validateFields = form.validateFields;

  var handleSubmit = function handleSubmit(e) {
    validateFields(function (err, values) {
      e.preventDefault();
      if (err) return;
      console.log('values', values);
      handleSaveSetting('about', _objectSpread({}, values, {
        id: data.id
      }));
    });
  };

  var formItemLayout = {
    labelCol: {
      xs: {
        span: 24
      },
      sm: {
        span: 4
      }
    },
    wrapperCol: {
      xs: {
        span: 24
      },
      sm: {
        span: 16
      }
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_antd.Form, formItemLayout, /*#__PURE__*/_react["default"].createElement(Item, {
    label: "\u4E2A\u4EBA\u7B80\u4ECB"
  }, getFieldDecorator('userDesc', {
    initialValue: data.userDesc,
    rules: [{
      required: true,
      message: '必填'
    }]
  })( /*#__PURE__*/_react["default"].createElement(TextArea, {
    rows: 10
  }))), /*#__PURE__*/_react["default"].createElement(Item, {
    label: "\u535A\u5BA2\u7B80\u4ECB"
  }, getFieldDecorator('blogDesc', {
    initialValue: data.blogDesc,
    rules: [{
      required: true,
      message: '必填'
    }]
  })( /*#__PURE__*/_react["default"].createElement(TextArea, {
    rows: 10
  }))), /*#__PURE__*/_react["default"].createElement(Item, {
    label: "\u652F\u4ED8\u5B9DUrl"
  }, getFieldDecorator('alipay', {
    initialValue: data.alipay,
    rules: [{
      required: true,
      message: '必填'
    }]
  })( /*#__PURE__*/_react["default"].createElement(_antd.Input, null))), /*#__PURE__*/_react["default"].createElement(Item, {
    label: "\u5FAE\u4FE1Url"
  }, getFieldDecorator('weChat', {
    initialValue: data.weChat,
    rules: [{
      required: true,
      message: '必填'
    }]
  })( /*#__PURE__*/_react["default"].createElement(_antd.Input, null))), /*#__PURE__*/_react["default"].createElement(Item, {
    colon: false,
    label: " "
  }, /*#__PURE__*/_react["default"].createElement(_antd.Button, {
    onClick: function onClick() {}
  }, "\u91CD\u7F6E"), /*#__PURE__*/_react["default"].createElement(_antd.Button, {
    onClick: handleSubmit,
    type: "primary",
    style: {
      marginLeft: 20
    }
  }, "\u63D0\u4EA4")));
});

exports["default"] = _default;