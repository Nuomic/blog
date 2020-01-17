"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsCookie = _interopRequireDefault(require("js-cookie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * 防止请求里的 cookie size 过大
 * 根据输入的最大值，将白名单以外的 cookie key 从大到小依次删除
 * 直到 document.cookie 总体积小于目标值
 */
var defaultWhiteList = ['_bfa', '_bfi', '_bfs', '_ga'];
var defaultOptions = {
  maxSize: 5 * 1024,
  whiteList: [],
  domain: '.ctrip.com'
};

function checkCookieSize(options) {
  var _defaultOptions$optio = _objectSpread({}, defaultOptions, {}, options),
      maxSize = _defaultOptions$optio.maxSize,
      whiteList = _defaultOptions$optio.whiteList,
      cookieOptions = _objectWithoutProperties(_defaultOptions$optio, ["maxSize", "whiteList"]);

  if (typeof window === 'undefined') return;
  if (document.cookie.length <= maxSize) return;
  whiteList = [].concat(defaultWhiteList, _toConsumableArray(whiteList));

  var cookie = _jsCookie["default"].get();

  var keys = Object.keys(cookie).filter(function (key) {
    return !whiteList.includes(key);
  });
  var sizes = keys.map(function (key) {
    return {
      key: key,
      size: cookie[key].length
    };
  });
  var sortedKeys = sizes.sort(function (a, b) {
    return b.size - a.size;
  }).map(function (item) {
    return item.key;
  });

  while (sortedKeys.length) {
    var key = sortedKeys.shift();

    _jsCookie["default"].remove(key, cookieOptions);

    if (document.cookie.length <= maxSize) {
      return;
    }
  }
}

var _default = checkCookieSize;
exports["default"] = _default;