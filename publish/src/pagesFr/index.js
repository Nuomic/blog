"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = [{
  path: '/',
  controller: function controller() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./home/Controller'));
    });
  }
}, {
  path: '/home',
  controller: function controller() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./home/Controller'));
    });
  }
}, {
  path: '/about',
  controller: function controller() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./about/Controller'));
    });
  }
}, {
  path: '/article',
  controller: function controller() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./article/Controller'));
    });
  }
}, {
  path: '/portfolio',
  controller: function controller() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./portfolio/Controller'));
    });
  }
}, {
  path: '/msgboard',
  controller: function controller() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./msgboard/Controller'));
    });
  }
}, {
  path: '/articledetail/:articledid',
  controller: function controller() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./articledetail/Controller'));
    });
  }
}];
exports["default"] = _default;