"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _connect = _interopRequireDefault(require("react-imvc/hoc/connect"));

var _config = require("../../config");

var _antd = require("antd");

var _jsCookie = _interopRequireDefault(require("js-cookie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var TextArea = _antd.Input.TextArea;
var withData = (0, _connect["default"])(function (_ref) {
  var state = _ref.state,
      handlers = _ref.handlers;
  return {
    hitokoto: state.hitokoto,
    saveCommit: handlers.handleSaveCommit
  };
});

var _default = withData(_antd.Form.create()(function (_ref2) {
  var parentId = _ref2.parentId,
      articleId = _ref2.articleId,
      form = _ref2.form,
      hitokoto = _ref2.hitokoto,
      saveCommit = _ref2.saveCommit;
  console.log(parentId, articleId);
  var initRandomNum = [Math.floor(Math.random() * 20), Math.floor(Math.random() * 20)];

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      randomNum = _useState2[0],
      setRandomNum = _useState2[1];

  (0, _react.useEffect)(function () {
    setRandomNum(initRandomNum);
  }, []); //刷新验证

  var handleRefreshRandomNum = function handleRefreshRandomNum() {
    resetFields();
    console.log('1111', 1);
    setRandomNum([Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]);
  };

  console.log(randomNum);
  console.log(randomNum[0] + randomNum[1]);
  var getFieldDecorator = form.getFieldDecorator,
      resetFields = form.resetFields,
      validateFields = form.validateFields; // 保存评论

  var handleSubmit = function handleSubmit(e) {
    validateFields(function _callee(err, fieldsValue) {
      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();

              if (!err) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return");

            case 3:
              _jsCookie["default"].set('nickname', fieldsValue.nickname, {
                expires: 30
              });

              _jsCookie["default"].set('email', fieldsValue.email, {
                expires: 30
              });

              _context.next = 7;
              return regeneratorRuntime.awrap(saveCommit(_objectSpread({
                parentId: parentId,
                articleId: articleId
              }, fieldsValue)));

            case 7:
              handleRefreshRandomNum();

            case 8:
            case "end":
              return _context.stop();
          }
        }
      });
    });
  }; //验证码校验


  var handleverCodeCheck = function handleverCodeCheck(rule, value, callback) {
    if (value && value != randomNum[0] + randomNum[1]) {
      callback('验证码错误');
    }

    callback();
  };

  return _react["default"].createElement(_antd.Row, null, _react["default"].createElement(_antd.Col, {
    span: 2
  }, _react["default"].createElement(_antd.Avatar, {
    style: {
      backgroundColor: 'rgb(230, 230, 230)'
    },
    shape: "square",
    icon: "user",
    size: 60,
    className: "fr"
  })), _react["default"].createElement(_antd.Col, {
    span: 22
  }, _react["default"].createElement("span", {
    style: {
      marginLeft: 10
    }
  }, "\u7545\u6240\u6B32\u8A00\u5427"), _react["default"].createElement(_antd.Card, {
    size: "small",
    className: "comment-form",
    style: _objectSpread({}, _config.comFormTheme, {
      marginLeft: 10
    })
  }, _react["default"].createElement(_antd.Form, null, _react["default"].createElement(_antd.Form.Item, null, _react["default"].createElement(_antd.Row, {
    gutter: 8
  }, _react["default"].createElement(_antd.Col, {
    span: 10
  }, _react["default"].createElement(_antd.Form.Item, null, getFieldDecorator('nickname', {
    validateTrigger: 'onBlur',
    rules: [{
      required: true,
      message: '请输入昵称'
    }],
    initialValue: _jsCookie["default"].get('nickname')
  })(_react["default"].createElement(_antd.Input, {
    placeholder: "\u6635\u79F0"
  })))), _react["default"].createElement(_antd.Col, {
    span: 10
  }, _react["default"].createElement(_antd.Form.Item, null, getFieldDecorator('email', {
    validateTrigger: 'onBlur',
    rules: [{
      required: true,
      pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
      message: '邮箱格式不正确!'
    }],
    initialValue: _jsCookie["default"].get('email')
  })(_react["default"].createElement(_antd.Input, {
    placeholder: "\u90AE\u7BB1"
  })))), _react["default"].createElement(_antd.Col, {
    span: 4
  }, _react["default"].createElement(_antd.Form.Item, null, getFieldDecorator('verCode', {
    validateTrigger: 'onBlur',
    rules: [{
      validator: handleverCodeCheck
    }]
  })(_react["default"].createElement(_antd.Input, {
    onFocus: function onFocus() {
      return resetFields('verCode');
    },
    suffix: _react["default"].createElement(_antd.Icon, {
      type: "sync",
      spin: randomNum[2],
      onClick: handleRefreshRandomNum
    }),
    placeholder: randomNum && "".concat(randomNum[0], " + ").concat(randomNum[1], " = ?") || undefined
  })))), _react["default"].createElement(_antd.Col, {
    span: 20
  }, _react["default"].createElement(_antd.Form.Item, null, getFieldDecorator('content')(_react["default"].createElement(TextArea, {
    autoSize: {
      minRows: 2,
      maxRows: 3
    },
    placeholder: hitokoto.hitokoto && "\u4E00\u8A00\uFF1A".concat(hitokoto.hitokoto)
  })))), _react["default"].createElement(_antd.Col, {
    span: 4
  }, _react["default"].createElement(_antd.Form.Item, {
    className: "margin-0"
  }, _react["default"].createElement(_antd.Button, {
    ghost: true,
    type: "primary",
    style: {
      width: '100%',
      height: 52
    },
    onClick: handleSubmit
  }, "\u63D0\u4EA4\u8BC4\u8BBA")))))))));
}));

exports["default"] = _default;