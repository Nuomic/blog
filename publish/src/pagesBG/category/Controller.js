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

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    var _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "View", _View["default"]);

    _defineProperty(_assertThisInitialized(_this), "Model", Model);

    _defineProperty(_assertThisInitialized(_this), "getCategory", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.resHandler(function () {
                return _this.getApi(_api["default"].getCategory);
              }, function (res) {
                _this.handleChangeState(res);
              }, function (err) {
                console.log('err', err);
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _defineProperty(_assertThisInitialized(_this), "handleDeleteCategory", /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref2) {
        var id, articleCount;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = _ref2.id, articleCount = _ref2.articleCount;
                console.log(id, articleCount);
                _context2.next = 4;
                return _this.resHandler(function () {
                  return _this.postApi(_api["default"].deleteCategory, {
                    categoryId: id,
                    articleCount: articleCount
                  });
                }, function () {
                  var _this$store$getState = _this.store.getState(),
                      categoryList = _this$store$getState.categoryList;

                  var newCategoryList = categoryList.filter(function (item) {
                    return item.id != id;
                  });

                  _this.handleChangeState({
                    categoryList: newCategoryList
                  });

                  _antd.message.success('删除成功！');
                }, function (err) {
                  _antd.message.error(err.customerErrorMessage);
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "handleSaveCategory", /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(category, handelModalStatus) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log('category', category);
                _context3.next = 3;
                return _this.resHandler(function () {
                  return _this.postApi(_api["default"].saveCategory, category);
                }, function () {
                  _this.getCategory();

                  handelModalStatus();
                }, function (err) {
                  console.log('err', err);
                });

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x2, _x3) {
        return _ref4.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "handleGetArticleList", /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(categoryId, setArticleList) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _this.resHandler(function () {
                  return _this.getApi(_api["default"].getArticleList, {
                    categoryId: categoryId
                  });
                }, function (res) {
                  setArticleList(res.articleList);
                }, function (err) {
                  console.log('err', err);
                });

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x4, _x5) {
        return _ref5.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "handleChangeArticleListFromCategory", /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(articleIds, toCategoryId, callback) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                articleIds = articleIds.join(',');
                console.log('articleIds', articleIds);
                _context5.next = 4;
                return _this.resHandler(function () {
                  return _this.postApi(_api["default"].changeArticleStatus, {
                    articleIds: articleIds,
                    toCategoryId: toCategoryId
                  });
                }, function () {
                  _antd.message.success('成功');

                  callback();

                  _this.getCategory();
                }, function (err) {
                  _antd.message.error(err.customerErrorMessage);
                });

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x6, _x7, _x8) {
        return _ref6.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "handleDelete", /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(id, status) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _this.resHandler(function () {
                  return _this.postApi(_api["default"].deleteArticle, {
                    id: id,
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
                });

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x9, _x10) {
        return _ref7.apply(this, arguments);
      };
    }());

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
    value: function () {
      var _componentWillCreate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.getCategory();

              case 2:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function componentWillCreate() {
        return _componentWillCreate.apply(this, arguments);
      }

      return componentWillCreate;
    }()
  }, {
    key: "componentDidFirstMount",
    value: function () {
      var _componentDidFirstMount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function componentDidFirstMount() {
        return _componentDidFirstMount.apply(this, arguments);
      }

      return componentDidFirstMount;
    }()
  }]);

  return _default;
}(_BaseController["default"]);

exports["default"] = _default;