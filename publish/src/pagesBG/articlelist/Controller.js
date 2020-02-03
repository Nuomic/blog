"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseController = _interopRequireDefault(require("../shared/BaseController"));

var _View = _interopRequireDefault(require("./View"));

var Model = _interopRequireWildcard(require("./Model"));

var _api = _interopRequireDefault(require("../api"));

var _antd = require("antd");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

    _defineProperty(_assertThisInitialized(_this), "View", _View["default"]);

    _defineProperty(_assertThisInitialized(_this), "Model", Model);

    _defineProperty(_assertThisInitialized(_this), "getArticleList", function _callee() {
      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(_this.resHandler(function () {
                return _this.postApi(_api["default"].getArticleList);
              }, function (res) {
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

    _defineProperty(_assertThisInitialized(_this), "handleChangeArticleStatus", function _callee2(articleId, status) {
      return regeneratorRuntime.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log('articleId', articleId);
              console.log('status', status); //参数为文章的id  改变之后的状态

              _context2.next = 4;
              return regeneratorRuntime.awrap(_this.resHandler(function () {
                return _this.postApi(_api["default"].changeArticleStatus);
              }, function () {
                var _this$store$getState = _this.store.getState(),
                    articleList = _this$store$getState.articleList;

                var newArticleList = articleList.map(function (item) {
                  if (item.id == articleId) item.status = status;
                  return item;
                });

                _this.handleChangeState({
                  articleList: newArticleList
                });

                _antd.message.success('成功');
              }, function (err) {
                console.log('err', err);
              }));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDelete", function _callee3(id, status) {
      return regeneratorRuntime.async(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return regeneratorRuntime.awrap(_this.resHandler(function () {
                return _this.postApi(_api["default"].deleteArticle, {
                  status: status
                });
              }, function () {
                var _this$store$getState2 = _this.store.getState(),
                    articleList = _this$store$getState2.articleList;

                var newArticleList = articleList.filter(function (item) {
                  if (item.status != 4 && item.status != 3 && item.id == id) {
                    item.status = 4;
                    return true;
                  } else return item.id != id;
                });

                _this.handleChangeState({
                  articleList: newArticleList
                });
              }, function (err) {
                console.log('err', err);
              }));

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      });
    });

    return _this;
  }

  _createClass(_default, [{
    key: "componentWillCreate",
    // async getInitialState(initialState) {
    //   await super.getInitialState();
    //   return {
    //     ...initialState,
    //     currentPath: this.location.pathname
    //   };
    // }
    value: function componentWillCreate() {
      return regeneratorRuntime.async(function componentWillCreate$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return regeneratorRuntime.awrap(this.getArticleList());

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "componentDidFirstMount",
    value: function componentDidFirstMount() {
      return regeneratorRuntime.async(function componentDidFirstMount$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
            case "end":
              return _context5.stop();
          }
        }
      });
    }
  }]);

  return _default;
}(_BaseController["default"]);

exports["default"] = _default;