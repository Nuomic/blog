"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _component = require("react-imvc/component");

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Item = _antd.Form.Item;

var _default = _antd.Form.create()(function (_ref) {
  var state = _ref.state,
      form = _ref.form,
      handlers = _ref.handlers;
  var getFieldDecorator = form.getFieldDecorator,
      resetFields = form.resetFields,
      validateFields = form.validateFields;
  var handleLogin = handlers.handleLogin;

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    validateFields(function _callee(err, values) {
      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (err) {
                _context.next = 4;
                break;
              }

              console.log('Received values of form: ', values);
              _context.next = 4;
              return regeneratorRuntime.awrap(handleLogin(values));

            case 4:
            case "end":
              return _context.stop();
          }
        }
      });
    });
  };

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_component.Style, {
    name: "antd"
  }), _react["default"].createElement(_component.Style, {
    name: "antdPro"
  }), _react["default"].createElement(_component.Style, {
    name: "customize"
  }), _react["default"].createElement(_component.Style, {
    name: "commonBG"
  }), _react["default"].createElement(_component.Style, {
    name: "login"
  }), _react["default"].createElement("div", {
    className: "login-bgimage"
  }, _react["default"].createElement(_antd.Card, {
    className: "login-box"
  }, _react["default"].createElement(_antd.Form, {
    onSubmit: handleSubmit,
    className: "login-form"
  }, _react["default"].createElement(Item, null, getFieldDecorator('username', {
    rules: [{
      required: true,
      message: 'Please input your username!'
    }]
  })(_react["default"].createElement(_antd.Input, {
    prefix: _react["default"].createElement(_antd.Icon, {
      type: "user",
      style: {
        color: 'rgba(0,0,0,.25)'
      }
    }),
    placeholder: "Username"
  }))), _react["default"].createElement(Item, null, getFieldDecorator('password', {
    rules: [{
      required: true,
      message: 'Please input your Password!'
    }]
  })(_react["default"].createElement(_antd.Input, {
    prefix: _react["default"].createElement(_antd.Icon, {
      type: "lock",
      style: {
        color: 'rgba(0,0,0,.25)'
      }
    }),
    type: "password",
    placeholder: "Password"
  }))), _react["default"].createElement(Item, null, getFieldDecorator('yanzheng', {
    rules: [{
      required: true,
      message: 'Please input your Password!'
    }]
  })(_react["default"].createElement(_antd.Input, {
    prefix: _react["default"].createElement(_antd.Icon, {
      type: "lock",
      style: {
        color: 'rgba(0,0,0,.25)'
      }
    }),
    type: "password",
    placeholder: "Password"
  }))), _react["default"].createElement(Item, null, _react["default"].createElement(_antd.Button, {
    type: "primary",
    htmlType: "submit",
    className: "login-form-button"
  }, "\u767B\u5F55"))))));
});

exports["default"] = _default;