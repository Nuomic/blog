"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var cookie = require('cookie');
/**
 * 防止请求里的 cookie size 过大
 * 根据输入的最大值，将白名单以外的 cookie key 从大到小依次删除
 * 直到 headers.cookie 总体积小于目标值
 */


var defaultWhiteList = ['cticket', 'ticket_ctrip', 'offlineTicket', '_bfa', '_bfi', '_bfs', '_ga', 'GUID'];
var defaultOptions = {
  maxSize: 5 * 1024,
  whiteList: []
};

module.exports = function (options) {
  return function (req, res, next) {
    var _defaultOptions$optio = _objectSpread({}, defaultOptions, {}, options),
        maxSize = _defaultOptions$optio.maxSize,
        whiteList = _defaultOptions$optio.whiteList;

    var headers = req.headers;
    var currentCookie = headers.cookie || '';
    var currentSize = currentCookie.length;

    if (currentSize <= maxSize) {
      next();
      return;
    }

    var cookies = req.cookies ? _objectSpread({}, req.cookies) : cookie.parse(currentCookie);
    whiteList = [].concat(defaultWhiteList, _toConsumableArray(whiteList));
    var keys = Object.keys(cookies).filter(function (key) {
      return !whiteList.includes(key);
    });
    var sizes = keys.map(function (key) {
      return {
        key: key,
        size: key.length + cookies[key].length + 2
      };
    });
    var sortedKeys = sizes.sort(function (a, b) {
      return b.size - a.size;
    });

    while (sortedKeys.length) {
      var _sortedKeys$shift = sortedKeys.shift(),
          key = _sortedKeys$shift.key,
          size = _sortedKeys$shift.size;

      delete cookies[key];
      currentSize -= size;

      if (currentSize <= maxSize) {
        break;
      }
    }

    headers.cookie = Object.keys(cookies).map(function (key) {
      return cookies[key] ? "".concat(key, "=").concat(cookies[key], ";") : null;
    }).filter(Boolean).join('');
    next();
  };
};