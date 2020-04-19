"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseController = _interopRequireDefault(require("../shared/BaseController"));

var _View = _interopRequireDefault(require("./View"));

var _api = _interopRequireDefault(require("../api"));

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Home =
/*#__PURE__*/
function (_Controller) {
  _inherits(Home, _Controller);

  function Home() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Home)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "View", _View["default"]);

    _defineProperty(_assertThisInitialized(_this), "pageName", 'articledetail');

    _defineProperty(_assertThisInitialized(_this), "preload", _objectSpread({}, _this.preload, {
      markdown: '/css/markdown-preview.css',
      codeStyle: '/css/markdown-code.css'
    }));

    _defineProperty(_assertThisInitialized(_this), "handleGetArticleDetail", function _callee(articleId) {
      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(_this.resHandler(function () {
                return _this.getApi(_api["default"].getArticleDetail, {
                  articleId: articleId
                });
              }, function (res) {
                console.log('res', res);

                _this.handleChangeState(res);
              }, function (err) {
                console.log('err', err);
              }));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleGetCommentList", function _callee2() {
      return regeneratorRuntime.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(_this.resHandler(function () {
                return _this.getApi(_api["default"].getCommentList, {
                  articleId: _this.location.params.articleId
                });
              }, function (res) {
                console.log('res', res);

                _this.handleChangeState(res);
              }, function (err) {
                console.log('err', err);
              }));

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSaveCommit", function _callee3(value) {
      return regeneratorRuntime.async(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              console.log('value', value);
              _context3.next = 3;
              return regeneratorRuntime.awrap(_this.resHandler(function () {
                return _this.post(_api["default"].saveComment, value);
              }, function (res) {
                console.log('res', res);

                _this.handleChangeState(res);

                _this.handleGetCommentList();
              }, function (err) {
                _antd.message.error('保存失败');
              }));

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleChangeLikeCount", function _callee4(value, callback) {
      return regeneratorRuntime.async(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return regeneratorRuntime.awrap(_this.resHandler(function () {
                return _this.postApi(_api["default"].saveArticle, value);
              }, function (res) {
                console.log('res', res);
                callback();
              }, function (res) {
                console.log('res', res);
              }));

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleCommentLikeCount", function _callee5(value, callback) {
      return regeneratorRuntime.async(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return regeneratorRuntime.awrap(_this.resHandler(function () {
                return _this.postApi(_api["default"].saveComment, value);
              }, function (res) {
                console.log('res', res);
                callback();
              }, function (res) {
                console.log('res', res);
              }));

            case 2:
            case "end":
              return _context5.stop();
          }
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getHitokoto", function _callee6() {
      var res;
      return regeneratorRuntime.async(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return regeneratorRuntime.awrap(_this.getApi(_api["default"].getHitokoto));

            case 2:
              res = _context6.sent;

              _this.handleChangeState({
                hitokoto: res
              });

            case 4:
            case "end":
              return _context6.stop();
          }
        }
      });
    });

    return _this;
  }

  _createClass(Home, [{
    key: "getInitialState",
    value: function getInitialState(initialState) {
      return regeneratorRuntime.async(function getInitialState$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              return _context7.abrupt("return", _objectSpread({}, initialState, {
                currentPath: this.location.pathname
              }));

            case 1:
            case "end":
              return _context7.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "componentWillCreate",
    value: function componentWillCreate() {
      var articleId;
      return regeneratorRuntime.async(function componentWillCreate$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return regeneratorRuntime.awrap(_get(_getPrototypeOf(Home.prototype), "componentWillCreate", this).call(this));

            case 2:
              articleId = this.location.params.articleId;
              console.log('this.localhost', this.location);
              _context8.next = 6;
              return regeneratorRuntime.awrap(this.handleGetArticleDetail(articleId));

            case 6:
              _context8.next = 8;
              return regeneratorRuntime.awrap(this.handleGetCommentList());

            case 8:
              _context8.next = 10;
              return regeneratorRuntime.awrap(this.getHitokoto());

            case 10:
            case "end":
              return _context8.stop();
          }
        }
      }, null, this);
    }
  }]);

  return Home;
}(_BaseController["default"]);

exports["default"] = Home;