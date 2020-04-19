"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseController = _interopRequireDefault(require("../shared/BaseController"));

var _View = _interopRequireDefault(require("./View"));

var _Model = _interopRequireDefault(require("./Model"));

var _api = _interopRequireDefault(require("../api"));

var _antd = require("antd");

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

var Home =
/*#__PURE__*/
function (_Controller) {
  _inherits(Home, _Controller);

  function Home() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Home)).call.apply(_getPrototypeOf2, [this].concat(_args)));

    _defineProperty(_assertThisInitialized(_this), "View", _View["default"]);

    _defineProperty(_assertThisInitialized(_this), "Model", _Model["default"]);

    _defineProperty(_assertThisInitialized(_this), "handleGetResource", function _callee() {
      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(_this.resHandler(function () {
                return _this.getApi(_api["default"].getResource);
              }, function (res) {
                _this.handleChangeState(res);

                console.log('res', res);
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

    _defineProperty(_assertThisInitialized(_this), "handleDeleteResource", function _callee2(resourceId) {
      return regeneratorRuntime.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(_this.resHandler(function () {
                return _this.postApi(_api["default"].deleteResource, {
                  resourceId: resourceId
                });
              }, function (res) {
                _this.handleGetResource(); // this.handleChangeState(res);


                _antd.message.success('删除成功');

                console.log('res');
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

    _defineProperty(_assertThisInitialized(_this), "handleChangeResourceStatus", function _callee3(args) {
      return regeneratorRuntime.async(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return regeneratorRuntime.awrap(_this.resHandler(function () {
                return _this.postApi(_api["default"].changeResourceStatus, args);
              }, function (res) {
                _this.handleGetResource();

                _antd.message.success('操作成功！');

                console.log('res');
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

    _defineProperty(_assertThisInitialized(_this), "handleDownload", function _callee4(resourceId) {
      return regeneratorRuntime.async(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return regeneratorRuntime.awrap(_this.resHandler(function () {
                return _this.getApi(_api["default"].download, {
                  resourceId: resourceId
                });
              }, function (res) {
                // this.handleGetResource();
                _antd.message.success('操作成功！');

                console.log('res');
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

    return _this;
  }

  _createClass(Home, [{
    key: "componentWillCreate",
    value: function componentWillCreate() {
      return regeneratorRuntime.async(function componentWillCreate$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return regeneratorRuntime.awrap(this.handleGetResource());

            case 2:
            case "end":
              return _context5.stop();
          }
        }
      }, null, this);
    }
  }]);

  return Home;
}(_BaseController["default"]);

exports["default"] = Home;