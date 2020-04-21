"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _config = require("../../config");

var _antd = require("antd");

var _hook = require("react-imvc/hook");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var TextArea = _antd.Input.TextArea;

var _default = _antd.Form.create()(function (_ref) {
  var parentId = _ref.parentId,
      articleId = _ref.articleId,
      form = _ref.form;

  var _useCtrl = (0, _hook.useCtrl)(),
      handleSaveCommit = _useCtrl.handleSaveCommit;

  var _useModelState = (0, _hook.useModelState)(),
      hitokoto = _useModelState.hitokoto;

  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      userInfo = _useState2[0],
      setUserInfo = _useState2[1];

  console.log(parentId, articleId);
  var initRandomNum = [Math.floor(Math.random() * 20), Math.floor(Math.random() * 20)];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      randomNum = _useState4[0],
      setRandomNum = _useState4[1];

  (0, _react.useEffect)(function () {
    setRandomNum(initRandomNum);
    setUserInfo({
      nickname: window.localStorage.getItem('nickname'),
      email: window.localStorage.getItem('email')
    });
  }, []); //刷新验证

  var handleRefreshRandomNum = function handleRefreshRandomNum() {
    resetFields();
    setRandomNum([Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]);
  };

  var getFieldDecorator = form.getFieldDecorator,
      resetFields = form.resetFields,
      validateFields = form.validateFields; // 保存评论

  var handleSubmit = function handleSubmit(e) {
    validateFields( /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(err, fieldsValue) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
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
                window.localStorage.setItem('nickname', fieldsValue.nickname);
                window.localStorage.setItem('email', fieldsValue.email);
                console.log('fieldsValue', fieldsValue);
                _context.next = 8;
                return handleSaveCommit(_objectSpread({
                  parentId: parentId,
                  articleId: articleId
                }, fieldsValue));

              case 8:
                handleRefreshRandomNum();

              case 9:
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
  }; //验证码校验


  var handleverCodeCheck = function handleverCodeCheck(rule, value, callback) {
    if (value != randomNum[0] + randomNum[1]) {
      callback('验证码错误');
    }

    callback();
  };

  return /*#__PURE__*/_react["default"].createElement(_antd.Row, null, /*#__PURE__*/_react["default"].createElement(_antd.Col, {
    span: 1
  }, /*#__PURE__*/_react["default"].createElement(_antd.Avatar, {
    style: {
      backgroundColor: 'rgb(230, 230, 230)'
    },
    shape: "square",
    icon: "user",
    size: 40,
    className: "fr"
  })), /*#__PURE__*/_react["default"].createElement(_antd.Col, {
    span: 23
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      marginLeft: 10
    }
  }, "\u7545\u6240\u6B32\u8A00\u5427"), /*#__PURE__*/_react["default"].createElement(_antd.Card, {
    size: "small",
    className: "comment-form",
    style: _objectSpread({}, _config.comFormTheme, {
      marginLeft: 10
    })
  }, /*#__PURE__*/_react["default"].createElement(_antd.Form, null, /*#__PURE__*/_react["default"].createElement(_antd.Row, {
    gutter: 8
  }, /*#__PURE__*/_react["default"].createElement(_antd.Col, {
    span: 9
  }, /*#__PURE__*/_react["default"].createElement(_antd.Form.Item, null, getFieldDecorator('nickname', {
    validateTrigger: 'onBlur',
    rules: [{
      required: true,
      message: '请输入昵称'
    }],
    initialValue: userInfo.nickname
  })( /*#__PURE__*/_react["default"].createElement(_antd.Input, {
    placeholder: "\u6635\u79F0"
  })))), /*#__PURE__*/_react["default"].createElement(_antd.Col, {
    span: 10
  }, /*#__PURE__*/_react["default"].createElement(_antd.Form.Item, null, getFieldDecorator('email', {
    validateTrigger: 'onBlur',
    rules: [{
      required: true,
      pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
      message: '邮箱格式不正确!'
    }],
    initialValue: userInfo.email
  })( /*#__PURE__*/_react["default"].createElement(_antd.Input, {
    placeholder: "\u90AE\u7BB1"
  })))), /*#__PURE__*/_react["default"].createElement(_antd.Col, {
    span: 5
  }, /*#__PURE__*/_react["default"].createElement(_antd.Form.Item, null, getFieldDecorator('verCode', {
    validateTrigger: 'onBlur',
    rules: [{
      validator: handleverCodeCheck
    }]
  })( /*#__PURE__*/_react["default"].createElement(_antd.Input, {
    onFocus: function onFocus() {
      return resetFields('verCode');
    },
    suffix: /*#__PURE__*/_react["default"].createElement(_antd.Icon, {
      type: "sync",
      spin: randomNum[2],
      onClick: handleRefreshRandomNum
    }),
    placeholder: randomNum && "".concat(randomNum[0], " + ").concat(randomNum[1], " = ?") || undefined
  })))), /*#__PURE__*/_react["default"].createElement(_antd.Col, {
    span: 19
  }, /*#__PURE__*/_react["default"].createElement(_antd.Form.Item, null, getFieldDecorator('content', {
    rules: [{
      required: true,
      message: '说点啥吧'
    }]
  })( /*#__PURE__*/_react["default"].createElement(TextArea, {
    autoSize: {
      minRows: 2,
      maxRows: 3
    },
    placeholder: hitokoto.hitokoto && "\u4E00\u8A00\uFF1A".concat(hitokoto.hitokoto)
  })))), /*#__PURE__*/_react["default"].createElement(_antd.Col, {
    span: 5
  }, /*#__PURE__*/_react["default"].createElement(_antd.Form.Item, {
    className: "margin-0"
  }, /*#__PURE__*/_react["default"].createElement(_antd.Button, {
    ghost: true,
    type: "primary",
    style: {
      width: '100%',
      height: 52
    },
    onClick: handleSubmit
  }, "\u63D0\u4EA4\u8BC4\u8BBA"))))))));
});

exports["default"] = _default;