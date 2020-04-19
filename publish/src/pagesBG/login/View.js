"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _component = require("react-imvc/component");

var _antd = require("antd");

var _blueimpMd = _interopRequireDefault(require("blueimp-md5"));

var _Captcha = _interopRequireDefault(require("./Captcha"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Item = _antd.Form.Item;

var _default = _antd.Form.create()(function (_ref) {
  var state = _ref.state,
      form = _ref.form,
      handlers = _ref.handlers;
  var getFieldDecorator = form.getFieldDecorator,
      resetFields = form.resetFields,
      validateFields = form.validateFields;
  var captcha = state.captcha;
  console.log('captcha', captcha);
  var handleLogin = handlers.handleLogin;

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    validateFields(function _callee(err, values) {
      var username, password;
      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              username = values.username, password = values.password;

              if (err) {
                _context.next = 4;
                break;
              }

              _context.next = 4;
              return regeneratorRuntime.awrap(handleLogin({
                username: username,
                password: (0, _blueimpMd["default"])(password)
              }));

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
      message: '请输入用户名!'
    }]
  })(_react["default"].createElement(_antd.Input, {
    prefix: _react["default"].createElement(_antd.Icon, {
      type: "user",
      style: {
        color: 'rgba(0,0,0,.25)'
      }
    }),
    placeholder: "\u8BF7\u8F93\u5165\u7528\u6237\u540D"
  }))), _react["default"].createElement(Item, null, getFieldDecorator('password', {
    rules: [{
      required: true,
      message: '请输入密码!'
    }]
  })(_react["default"].createElement(_antd.Input.Password, {
    prefix: _react["default"].createElement(_antd.Icon, {
      type: "lock",
      style: {
        color: 'rgba(0,0,0,.25)'
      }
    }) // type="password"
    ,
    placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801"
  }))), _react["default"].createElement(Item, null, getFieldDecorator('yanzheng', {
    validateTrigger: 'onBlur',
    rules: [{
      validator: function validator(rule, val, callback) {
        var code = captcha.join('').toLowerCase();
        console.log('code', code);
        if ((val && val.toLowerCase()) != code) callback('验证码错误');
        callback();
      }
    }]
  })(_react["default"].createElement(_antd.Input, {
    onClick: function onClick() {
      return resetFields(['yanzheng']);
    },
    placeholder: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",
    style: {
      display: 'inline-block',
      width: 'calc(100% - 155px)'
    }
  })), _react["default"].createElement("div", {
    style: {
      "float": 'right',
      marginTop: 5
    },
    onClick: function onClick() {
      return resetFields(['yanzheng']);
    }
  }, _react["default"].createElement(_Captcha["default"], null))), _react["default"].createElement(Item, null, _react["default"].createElement(_antd.Button, {
    type: "primary",
    htmlType: "submit",
    className: "login-form-button"
  }, "\u767B\u5F55"))))));
});

exports["default"] = _default;