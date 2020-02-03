"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserAgentByContext = getUserAgentByContext;
exports.getCookieOriginByContext = getCookieOriginByContext;
exports.getStorageItem = getStorageItem;
exports.setStorageItem = setStorageItem;
exports.removeStorageItem = removeStorageItem;
exports.formatDate = formatDate;
exports.getCurrentDate = getCurrentDate;
exports.getNextMonthDate = getNextMonthDate;
exports.getUrl = getUrl;
exports.redirect = redirect;

var _querystring = _interopRequireDefault(require("querystring"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getUserAgentByContext(context) {
  if (context.isServer) {
    return context.req.headers['user-agent'];
  } else if (context.isClient) {
    return navigator.userAgent;
  }
}

function getCookieOriginByContext(context) {
  if (context.isServer) {
    return "http://".concat(context.req.headers.host);
  } else if (context.isClient) {
    return "".concat(window.location.protocol, "//").concat(window.location.host);
  }
}

function getStorageItem(key) {
  return window.localStorage.getItem(key);
}

function setStorageItem(key, value) {
  var finalValue = {
    tag: '',
    value: value,
    timeout: getNextMonthDate(),
    savedate: getCurrentDate()
  };
  window.localStorage.setItem(key, JSON.stringify(finalValue));
}

function removeStorageItem(key) {
  window.localStorage.removeItem(key);
}

var pad = function pad(num) {
  return ('0' + num).slice(-2);
};

function formatDate(date) {
  var year = date.getFullYear();
  var month = pad(date.getMonth() + 1);
  var day = pad(date.getDate());
  var hours = pad(date.getHours());
  var minutes = pad(date.getMinutes());
  var seconds = pad(date.getSeconds());
  return "".concat(year, "/").concat(month, "/").concat(day, " ").concat(hours, ":").concat(minutes, ":").concat(seconds);
}

function getCurrentDate() {
  return formatDate(new Date());
}

function getNextMonthDate() {
  return formatDate(new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000));
}

function getUrl(context) {
  if (context.isServer) {
    var req = context.req;
    var host = req.hostname || req.host;
    var protocol = Number(req.headers['x-ctrip-isssl']) === 1 ? 'https:' : 'http:';
    var url = "".concat(protocol, "//").concat(host + req.originalUrl, "?").concat(_querystring["default"].stringify(req.query));
    return url;
  } else {
    return window.location.href;
  }
}

function redirect(context, targetUrl) {
  if (context.isServer) {
    context.res.redirect(targetUrl);
  } else {
    window.location.href = targetUrl;
  }
}