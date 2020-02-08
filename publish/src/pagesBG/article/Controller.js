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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

    _defineProperty(_assertThisInitialized(_this), "View", _View["default"]);

    _defineProperty(_assertThisInitialized(_this), "Model", Model);

    _defineProperty(_assertThisInitialized(_this), "SSR", false);

    _defineProperty(_assertThisInitialized(_this), "getArticle", function _callee(articleId) {
      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(_this.resHandler(function () {
                return _this.getApi(_api["default"].getArticleList, {
                  articleId: articleId
                });
              }, function (res) {
                _this.handleChangeState(res);
              }, function (err) {
                _antd.message.error('获取文章详情值失败');
              }));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleChangeModalStatus", function () {
      var _this$store$getState = _this.store.getState(),
          modalStatus = _this$store$getState.modalStatus;

      _this.handleChangeState({
        modalStatus: !modalStatus
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getFormData", function _callee2(type) {
      return regeneratorRuntime.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(_this.resHandler(function () {
                return _this.getApi(_api["default"].getFormData, {
                  type: type
                });
              }, function (res) {
                _this.handleChangeState(res);
              }, function (err) {
                _antd.message.error('获取表单值失败');
              }));

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSaveArticle", function _callee3(value) {
      var _this$store$getState2, article, modalStatus;

      return regeneratorRuntime.async(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _this$store$getState2 = _this.store.getState(), article = _this$store$getState2.article, modalStatus = _this$store$getState2.modalStatus;
              value = !!article && _objectSpread({}, article, {}, value) || value;
              _context3.next = 4;
              return regeneratorRuntime.awrap(_this.resHandler(function () {
                return _this.postApi(_api["default"].saveArticle, value);
              }, function (res) {
                _antd.message.success(value.status == '3' && '成功保存到草稿箱' || '保存成功');

                _this.handleChangeState(res);

                modalStatus && _this.handleChangeModalStatus();
              }, function (err) {
                _antd.message.error('保存失败');
              }));

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSaveTag", function _callee4(value) {
      return regeneratorRuntime.async(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return regeneratorRuntime.awrap(_this.resHandler(function () {
                return _this.postApi(_api["default"].saveTag, {
                  name: value
                });
              }, function (res) {
                _antd.message.success('新增标签成功');

                _this.getFormData('1,2');
              }, function (err) {
                _antd.message.error('新增标签失败');
              }));

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      });
    });

    return _this;
  }

  _createClass(_default, [{
    key: "componentWillCreate",
    value: function componentWillCreate() {
      var Editor, articleId;
      return regeneratorRuntime.async(function componentWillCreate$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (!this.context.isClient) {
                _context5.next = 5;
                break;
              }

              _context5.next = 3;
              return regeneratorRuntime.awrap(Promise.resolve().then(function () {
                return _interopRequireWildcard(require('for-editor'));
              }));

            case 3:
              Editor = _context5.sent;
              this.handleChangeState({
                Editor: Editor
              });

            case 5:
              articleId = this.location.params.articleId;

              if (!articleId) {
                _context5.next = 9;
                break;
              }

              _context5.next = 9;
              return regeneratorRuntime.awrap(this.getArticle(articleId));

            case 9:
            case "end":
              return _context5.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "componentDidFirstMount",
    value: function componentDidFirstMount() {
      return regeneratorRuntime.async(function componentDidFirstMount$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return regeneratorRuntime.awrap(this.getFormData('1,2'));

            case 2:
            case "end":
              return _context6.stop();
          }
        }
      }, null, this);
    }
  }]);

  return _default;
}(_BaseController["default"]);

exports["default"] = _default;