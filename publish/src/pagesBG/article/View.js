"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _component = require("react-imvc/component");

var _this = void 0;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = function _default(_ref) {
  var state = _ref.state;
  console.log('state', state);
  var Editor = state.Editor["default"];

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var handleChange = function handleChange(value) {
    setValue(value);
  };

  var EditForm = _antd.Form.create()(function (_ref2) {
    var form = _ref2.form;
    var getFieldDecorator = form.getFieldDecorator,
        getFieldsError = form.getFieldsError,
        getFieldError = form.getFieldError,
        isFieldTouched = form.isFieldTouched;

    var handleSubmit = function handleSubmit(type, e) {
      e.preventDefault();

      _this.props.form.validateFields(function (err, values) {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }; // Only show error after a field is touched.


    var usernameError = isFieldTouched('username') && getFieldError('username');
    var passwordError = isFieldTouched('password') && getFieldError('password');
    return _react["default"].createElement(_antd.Form, {
      style: {
        display: 'flex',
        justifyContent: 'space-between'
      }
    }, _react["default"].createElement(_antd.Form.Item, {
      style: {
        flex: 10
      }
    }, getFieldDecorator('title', {
      rules: [{
        required: true,
        message: 'Please input your username!'
      }]
    })(_react["default"].createElement(_antd.Input, {
      size: "large",
      placeholder: "\u8BF7\u8F93\u5165\u6807\u9898"
    }))), _react["default"].createElement(_antd.Form.Item, {
      style: {
        flex: 1
      }
    }, _react["default"].createElement(_antd.Button, {
      size: "large",
      className: "fr"
    }, "\u4FDD\u5B58\u8349\u7A3F")), _react["default"].createElement(_antd.Form.Item, {
      style: {
        flex: 1
      }
    }, _react["default"].createElement(_antd.Button, {
      size: "large",
      type: "primary",
      className: "fr"
    }, "\u53D1\u8868\u6587\u7AE0")));
  });

  return _react["default"].createElement("div", {
    style: {
      padding: 10,
      backgroundColor: '#f8f8f8'
    }
  }, _react["default"].createElement(_component.Style, {
    name: "antd"
  }), _react["default"].createElement(_component.Style, {
    name: "antdPro"
  }), _react["default"].createElement(_component.Style, {
    name: "customize"
  }), _react["default"].createElement(_component.Style, {
    name: "commonBG"
  }), _react["default"].createElement(EditForm, null), _react["default"].createElement(Editor, {
    value: value,
    onChange: function onChange(value) {
      return handleChange(value);
    },
    subfield: true,
    preview: true
  }));
};

exports["default"] = _default;