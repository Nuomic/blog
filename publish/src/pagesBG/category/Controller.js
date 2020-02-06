"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseController = _interopRequireDefault(require("../shared/BaseController"));

var _View = _interopRequireDefault(require("./View"));

var Model = _interopRequireWildcard(require("./Model"));

var _api = _interopRequireDefault(require("../api"));

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

    _defineProperty(_assertThisInitialized(_this), "getCategory", function _callee() {
      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(_this.resHandler(function () {
                return _this.getApi(_api["default"].getCategory);
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

    _defineProperty(_assertThisInitialized(_this), "handleDeleteCategory", function _callee2(categoryId) {
      return regeneratorRuntime.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(_this.resHandler(function () {
                return _this.postApi(_api["default"].deleteCategory, {
                  categoryId: categoryId
                });
              }, function () {
                var _this$store$getState = _this.store.getState(),
                    categoryList = _this$store$getState.categoryList;

                var newCategoryList = categoryList.filter(function (item) {
                  return item.id != categoryId;
                });

                _this.handleChangeState({
                  categoryList: newCategoryList
                });
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

    _defineProperty(_assertThisInitialized(_this), "handleSaveCategory", function _callee3(category, handelModalStatus) {
      return regeneratorRuntime.async(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              console.log('category', category);
              _context3.next = 3;
              return regeneratorRuntime.awrap(_this.resHandler(function () {
                return _this.postApi(_api["default"].saveCategory, category);
              }, function () {
                _this.getCategory();

                handelModalStatus();
              }, function (err) {
                console.log('err', err);
              }));

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleGetArticleList", function _callee4(categoryId, setArticleList) {
      return regeneratorRuntime.async(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return regeneratorRuntime.awrap(_this.resHandler(function () {
                return _this.postApi(_api["default"].getArticleList, {
                  categoryId: categoryId
                });
              }, function (res) {
                setArticleList(res.articleList);
              }, function (err) {
                console.log('err', err);
              }));

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleChangeArticleListFromCategory", function _callee5(articleIds, currentCategoryId, tocategoryId, articleList, setArticleList) {
      return regeneratorRuntime.async(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return regeneratorRuntime.awrap(_this.resHandler(function () {
                return _this.postApi(_api["default"].changeArticleCategory, {
                  articleIds: articleIds,
                  tocategoryId: tocategoryId
                });
              }, function () {
                var _this$store$getState2 = _this.store.getState(),
                    categoryList = _this$store$getState2.categoryList;

                var newCategoryList = categoryList.map(function (item) {
                  if (item.id === currentCategoryId) item.articleCount = item.articleCount - articleIds.length;else if (item.id === tocategoryId) item.articleCount = item.articleCount + articleIds.length;
                  return item;
                });

                _this.handleChangeState({
                  categoryList: newCategoryList
                });

                var newArticleList = articleList;
                articleIds.forEach(function (item) {
                  newArticleList = newArticleList.filter(function (i) {
                    return i.id != item;
                  });
                });
                setArticleList(newArticleList);
              }, function (err) {
                console.log('err', err);
              }));

            case 2:
              return _context5.abrupt("return");

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDelete", function _callee6(id, status) {
      return regeneratorRuntime.async(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return regeneratorRuntime.awrap(_this.resHandler(function () {
                return _this.postApi(_api["default"].deleteArticle, {
                  id: id,
                  status: status
                });
              }, function () {
                var _this$store$getState3 = _this.store.getState(),
                    articleList = _this$store$getState3.articleList;

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
              return _context6.stop();
          }
        }
      });
    });

    return _this;
  }

  _createClass(_default, [{
    key: "componentWillCreate",
    // async getInitialState(initialState) {
    //   const state = await super.getInitialState(initialState);
    //   console.log('state', state);
    //   return {
    //     ...state,
    //     currentPath: this.location.pathname
    //   };
    // }
    value: function componentWillCreate() {
      return regeneratorRuntime.async(function componentWillCreate$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return regeneratorRuntime.awrap(this.getCategory());

            case 2:
            case "end":
              return _context7.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "componentDidFirstMount",
    value: function componentDidFirstMount() {
      return regeneratorRuntime.async(function componentDidFirstMount$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
            case "end":
              return _context8.stop();
          }
        }
      });
    }
  }]);

  return _default;
}(_BaseController["default"]);

exports["default"] = _default;