"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _controller = _interopRequireDefault(require("react-imvc/controller"));

var sharedActions = _interopRequireWildcard(require("./sharedActions"));

var _antd = require("antd");

var _api = _interopRequireDefault(require("../api"));

var _querystring = _interopRequireDefault(require("querystring"));

var _jsCookie = _interopRequireDefault(require("js-cookie"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default =
/*#__PURE__*/
function (_Controller) {
  _inherits(_default, _Controller);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "SSR", _this.location.query.ssr != 0);

    _defineProperty(_assertThisInitialized(_this), "preload", {
      antd: '/css/antd.min.css',
      antdPro: '/css/ant-design-pro.css',
      customize: '/css/customize.css',
      commonBG: '/css/commonBG.css'
    });

    return _this;
  }

  _createClass(_default, [{
    key: "getInitialState",

    /**
     * 动态获取初始化状态
     */
    value: function getInitialState(initialState) {
      var context, location, userInfo;
      return regeneratorRuntime.async(function getInitialState$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              context = this.context, location = this.location;
              _context.next = 3;
              return regeneratorRuntime.awrap(this.getUserInfo());

            case 3:
              userInfo = _context.sent;
              if (!_jsCookie["default"].get('collapsed')) _jsCookie["default"].set('collapsed', false);
              return _context.abrupt("return", _objectSpread({}, initialState, {
                currentPath: location.pathname,
                initCollapsed: _jsCookie["default"].get('collapsed') == 'false' ? false : true
              }, userInfo));

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "getUserInfo",
    value: function getUserInfo() {
      var _this2 = this;

      var context, userInfo, TOKEN;
      return regeneratorRuntime.async(function getUserInfo$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              context = this.context; // 获取登录用户信息，将用户信息缓存在 context 里，所有页面都可以共享访问

              userInfo = null;
              TOKEN = this.cookie('TOKEN');
              if (!TOKEN) delete context.userInfo;
              _context2.prev = 4;

              if (!context.hasOwnProperty('userInfo')) {
                _context2.next = 9;
                break;
              }

              userInfo = context.userInfo;
              _context2.next = 11;
              break;

            case 9:
              _context2.next = 11;
              return regeneratorRuntime.awrap(this.resHandler(function () {
                return _this2.getApi(_api["default"].userCheck);
              }, function (userInfo) {
                console.log('userInfo', userInfo);
                context.userInfo = userInfo;
              }, function () {
                context.userInfo = null;

                _antd.message.error('登录过期');
              }));

            case 11:
              _context2.next = 16;
              break;

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](4);
              console.log('_', _context2.t0);

            case 16:
              return _context2.abrupt("return", userInfo);

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, [[4, 13]]);
    }
  }, {
    key: "handleLogout",
    value: function handleLogout() {
      var _this3 = this;

      return regeneratorRuntime.async(function handleLogout$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return regeneratorRuntime.awrap(this.resHandler(function () {
                return _this3.postApi(_api["default"].userLogout);
              }, function (res) {
                console.log('object', res);
              }, function (err) {
                _antd.message.error(err.customerErrorMessage);
              }));

            case 3:
              _context3.next = 8;
              break;

            case 5:
              _context3.prev = 5;
              _context3.t0 = _context3["catch"](0);
              console.log('_', _context3.t0);

            case 8:
              this.context.handleLogout = this.handleLogout;

            case 9:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this, [[0, 5]]);
    }
    /**
     * 动态获取最终的 actions 集合
     */

  }, {
    key: "getFinalActions",
    value: function getFinalActions(actions) {
      return _objectSpread({}, sharedActions, {}, actions);
    }
    /** 对fetch接口封装一次 方便调用*/

  }, {
    key: "postApi",
    value: function postApi(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      options = _objectSpread({
        method: 'POST',
        credentials: 'include'
      }, options, {
        body: JSON.stringify(data)
      });
      return this.fetch(url, options);
    }
  }, {
    key: "formDataApi",
    value: function formDataApi(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var formData = new FormData();

      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          var element = data[key];
          formData.append(key, element);
        }
      }

      var options = _objectSpread({
        method: 'POST',
        credentials: 'include'
      }, option, {
        body: data
      });

      return fetch(url, options);
    }
  }, {
    key: "getApi",
    value: function getApi(url, params) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      options = _objectSpread({
        method: 'GET',
        credentials: 'include'
      }, options);
      return this.fetch(url + (params ? "?".concat(_querystring["default"].stringify(params)) : ''), options);
    }
  }, {
    key: "handleChangeState",
    value: function handleChangeState(date) {
      var updateMergeState = this.store.actions.updateMergeState;
      updateMergeState(date);
    }
    /**
     * 请求结构处理
     * @method resHandler
     * @param {Function} func : api接口配置
     * @param {Function} success : 成功回调
     * @param {Function} fail : 失败回调
     * @param {Number} options.limit : 请求失败重试开关，调用方可根据实际场景设置失败后重试次数，默认1不重试
     * @param {String} options.name : 自定义埋点名称
     */

  }, {
    key: "resHandler",
    value: function resHandler(func, success, fail) {
      var options,
          _options$limit,
          limit,
          _options$name,
          name,
          res,
          ResponseStatus,
          returnStatus,
          data,
          _args4 = arguments;

      return regeneratorRuntime.async(function resHandler$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              options = _args4.length > 3 && _args4[3] !== undefined ? _args4[3] : {};
              _options$limit = options.limit, limit = _options$limit === void 0 ? 1 : _options$limit, _options$name = options.name, name = _options$name === void 0 ? '' : _options$name;

              if (!(limit < 1)) {
                _context4.next = 5;
                break;
              }

              // this.recordLog({...options,errcode:3001},{ctripUid});
              _antd.message.error("\u7F51\u7EDC\u51FA\u9519\uFF0C\u8BF7\u518D\u8BD5\u8BD5\u5427\u3002");

              return _context4.abrupt("return");

            case 5:
              _context4.prev = 5;
              _context4.next = 8;
              return regeneratorRuntime.awrap(func());

            case 8:
              res = _context4.sent;
              ResponseStatus = res.ResponseStatus, returnStatus = res.returnStatus, data = _objectWithoutProperties(res, ["ResponseStatus", "returnStatus"]);

              if (!(ResponseStatus.Ack == 'Success')) {
                _context4.next = 18;
                break;
              }

              if (!(returnStatus.isSuccess === true)) {
                _context4.next = 15;
                break;
              }

              return _context4.abrupt("return", success(data));

            case 15:
              return _context4.abrupt("return", fail(res.returnStatus));

            case 16:
              _context4.next = 22;
              break;

            case 18:
              if (!(res.ResponseStatus.ErrorCode == '401')) {
                _context4.next = 21;
                break;
              }

              this.redirect('/login');
              return _context4.abrupt("return");

            case 21:
              // if (res.ResponseStatus.Errors[0].ErrorCode == '401') {
              //   redirect(this.context, '/v2/authorized/403');
              //   return;
              // }
              _antd.message.error("\u7F51\u7EDC\u51FA\u9519\uFF0C\u8BF7\u518D\u8BD5\u8BD5\u5427\u3002");

            case 22:
              _context4.next = 28;
              break;

            case 24:
              _context4.prev = 24;
              _context4.t0 = _context4["catch"](5);
              console.log(name, '***************请求异常****************', _context4.t0.toString()); // this.recordLog(options,{ctripUid});

              this.resHandler(func, success, fail, {
                limit: limit - 1
              });

            case 28:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this, [[5, 24]]);
    }
  }]);

  return _default;
}(_controller["default"]);

exports["default"] = _default;