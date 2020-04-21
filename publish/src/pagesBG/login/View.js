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

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Item = _antd.Form.Item;

var _default = _antd.Form.create()(function (_ref) {
  var state = _ref.state,
      form = _ref.form,
      ctrl = _ref.ctrl;
  var getFieldDecorator = form.getFieldDecorator,
      resetFields = form.resetFields,
      validateFields = form.validateFields;
  var captcha = state.captcha;
  console.log('captcha', captcha);
  var handleLogin = ctrl.handleLogin;

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    validateFields( /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(err, values) {
        var username, password;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                username = values.username, password = values.password;

                if (err) {
                  _context.next = 4;
                  break;
                }

                _context.next = 4;
                return handleLogin({
                  username: username,
                  password: (0, _blueimpMd["default"])(password)
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }());
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_component.Style, {
    name: "antd"
  }), /*#__PURE__*/_react["default"].createElement(_component.Style, {
    name: "antdPro"
  }), /*#__PURE__*/_react["default"].createElement(_component.Style, {
    name: "customize"
  }), /*#__PURE__*/_react["default"].createElement(_component.Style, {
    name: "commonBG"
  }), /*#__PURE__*/_react["default"].createElement(_component.Style, {
    name: "login"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "login-bgimage"
  }, /*#__PURE__*/_react["default"].createElement(_antd.Card, {
    className: "login-box"
  }, /*#__PURE__*/_react["default"].createElement(_antd.Form, {
    onSubmit: handleSubmit,
    className: "login-form"
  }, /*#__PURE__*/_react["default"].createElement(Item, null, getFieldDecorator('username', {
    rules: [{
      required: true,
      message: '请输入用户名!'
    }]
  })( /*#__PURE__*/_react["default"].createElement(_antd.Input, {
    prefix: /*#__PURE__*/_react["default"].createElement(_antd.Icon, {
      type: "user",
      style: {
        color: 'rgba(0,0,0,.25)'
      }
    }),
    placeholder: "\u8BF7\u8F93\u5165\u7528\u6237\u540D"
  }))), /*#__PURE__*/_react["default"].createElement(Item, null, getFieldDecorator('password', {
    rules: [{
      required: true,
      message: '请输入密码!'
    }]
  })( /*#__PURE__*/_react["default"].createElement(_antd.Input.Password, {
    prefix: /*#__PURE__*/_react["default"].createElement(_antd.Icon, {
      type: "lock",
      style: {
        color: 'rgba(0,0,0,.25)'
      }
    }) // type="password"
    ,
    placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801"
  }))), /*#__PURE__*/_react["default"].createElement(Item, null, getFieldDecorator('yanzheng', {
    validateTrigger: 'onBlur',
    rules: [{
      validator: function validator(rule, val, callback) {
        var code = captcha.join('').toLowerCase();
        console.log('code', code);
        if ((val && val.toLowerCase()) != code) callback('验证码错误');
        callback();
      }
    }]
  })( /*#__PURE__*/_react["default"].createElement(_antd.Input, {
    onClick: function onClick() {
      return resetFields(['yanzheng']);
    },
    placeholder: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",
    style: {
      display: 'inline-block',
      width: 'calc(100% - 155px)'
    }
  })), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      "float": 'right',
      marginTop: 5
    },
    onClick: function onClick() {
      return resetFields(['yanzheng']);
    }
  }, /*#__PURE__*/_react["default"].createElement(_Captcha["default"], null))), /*#__PURE__*/_react["default"].createElement(Item, null, /*#__PURE__*/_react["default"].createElement(_antd.Button, {
    type: "primary",
    htmlType: "submit",
    className: "login-form-button"
  }, "\u767B\u5F55"))))));
});

exports["default"] = _default;