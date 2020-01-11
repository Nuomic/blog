"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseController = _interopRequireDefault(require("../../shared/BaseController"));

var sharedActions = _interopRequireWildcard(require("./sharedActions"));

var _antd = require("antd");

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

    _defineProperty(_assertThisInitialized(_this), "preload", {
      antd: '/pagesBG/css/antd.min.css',
      antdPro: '/pagesBG/css/ant-design-pro.css',
      customize: '/pagesBG/css/customize.css',
      common: '/pagesBG/css/common.css'
    });

    _defineProperty(_assertThisInitialized(_this), "SSR", _this.location.query.ssr != 0);

    return _this;
  }

  _createClass(_default, [{
    key: "getFinalActions",

    /**
     * 动态获取初始化状态
     */
    // async getInitialState(initialState) {
    //   let state = await super.getInitialState(initialState);
    //   let { context, location } = this;
    //   let url = context.basename + '/'
    //   let options = {
    //     method: 'POST',
    //     credentials: 'include',
    //     raw: true,
    //     headers: {
    //       'Content-Type': 'application/json',
    //       // cookieorigin: getCookieOriginByContext(context)
    //     },
    //     body: JSON.stringify({ pageName: this.modulePagename })
    //   }
    //   if (context.isServer) {
    //     options.headers.cookie = context.req.headers.cookie
    //   }
    //   try {
    //     let response = await fetch(url, options)
    //     let result = await response.json()
    //     let { ResponseStatus } = result
    //     if (ResponseStatus.Ack !== "Success" && ResponseStatus.Errors[0].ErrorCode == '401') {
    //       redirect(this.context, '/v2/authorized/403') //11111111111111111111
    //       return
    //     }
    //   } catch (error) {
    //     console.error('getUserInfo', error)
    //   }
    //   return {
    //     ...sharedInitialState,
    //     ...state
    //   };
    // }

    /**
     * 动态获取最终的 actions 集合
     */
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
        method: 'POST'
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
        method: 'POST'
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
        method: 'GET'
      }, options);
      return this.fetch(url + (params ? "?".concat(querystring.stringify(params)) : ''), options);
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
          _args = arguments;

      return regeneratorRuntime.async(function resHandler$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              options = _args.length > 3 && _args[3] !== undefined ? _args[3] : {};
              _options$limit = options.limit, limit = _options$limit === void 0 ? 1 : _options$limit, _options$name = options.name, name = _options$name === void 0 ? '' : _options$name;

              if (!(limit < 1)) {
                _context.next = 5;
                break;
              }

              // this.recordLog({...options,errcode:3001},{ctripUid});
              _antd.message.error("\u7F51\u7EDC\u51FA\u9519\uFF0C\u8BF7\u518D\u8BD5\u8BD5\u5427\u3002");

              return _context.abrupt("return");

            case 5:
              _context.prev = 5;
              _context.next = 8;
              return regeneratorRuntime.awrap(func());

            case 8:
              res = _context.sent;
              ResponseStatus = res.ResponseStatus, returnStatus = res.returnStatus, data = _objectWithoutProperties(res, ["ResponseStatus", "returnStatus"]);

              if (!(ResponseStatus.Ack == 'Success')) {
                _context.next = 18;
                break;
              }

              if (!(returnStatus.isSuccess === true)) {
                _context.next = 15;
                break;
              }

              return _context.abrupt("return", success(data));

            case 15:
              return _context.abrupt("return", fail(res.returnStatus));

            case 16:
              _context.next = 25;
              break;

            case 18:
              if (!(res.ResponseStatus.Errors[0].ErrorCode == 'MobileRequestFilterException')) {
                _context.next = 21;
                break;
              }

              this.login();
              return _context.abrupt("return");

            case 21:
              if (!(res.ResponseStatus.Errors[0].ErrorCode == '401')) {
                _context.next = 24;
                break;
              }

              redirect(this.context, '/v2/authorized/403');
              return _context.abrupt("return");

            case 24:
              _antd.message.error("\u7F51\u7EDC\u51FA\u9519\uFF0C\u8BF7\u518D\u8BD5\u8BD5\u5427\u3002");

            case 25:
              _context.next = 31;
              break;

            case 27:
              _context.prev = 27;
              _context.t0 = _context["catch"](5);
              console.log(name, '***************请求异常****************', _context.t0.toString()); // this.recordLog(options,{ctripUid});

              this.resHandler(func, success, fail, {
                limit: limit - 1
              });

            case 31:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[5, 27]]);
    } // getKeyTranlate(key, options = {}) {
    //   const language = this.store.getState().language || {};
    //   return language[key] ? language[key].replace(/\$\{\s*(\w+)\s*(([\+\-])\s*(\d+)\s*)?\}/g, (text) => options[text.substring(2, text.length - 1)]) : '';
    // }
    // logout() {
    //   let logoutTips = '确定退出系统？';
    //   try {
    //     logoutTips = this.store.getState().language.logoutTips || '确定退出系统？';
    //   } catch (error) {
    //   }
    //   Modal.confirm({ content: logoutTips, onOk: () => super.logout() });
    // }

  }]);

  return _default;
}(_BaseController["default"]);

exports["default"] = _default;