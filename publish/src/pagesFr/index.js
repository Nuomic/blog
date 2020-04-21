"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = [{
  path: '/',
  controller: function controller() {
    return Promise.resolve('./home/Controller').then(function (s) {
      return _interopRequireWildcard(require(s));
    });
  }
}, {
  path: '/home',
  controller: function controller() {
    return Promise.resolve('./home/Controller').then(function (s) {
      return _interopRequireWildcard(require(s));
    });
  }
}, {
  path: '/about',
  controller: function controller() {
    return Promise.resolve('./about/Controller').then(function (s) {
      return _interopRequireWildcard(require(s));
    });
  }
}, {
  path: '/article',
  controller: function controller() {
    return Promise.resolve('./article/Controller').then(function (s) {
      return _interopRequireWildcard(require(s));
    });
  }
}, {
  path: '/article/:type/:id',
  controller: function controller() {
    return Promise.resolve('./article/Controller').then(function (s) {
      return _interopRequireWildcard(require(s));
    });
  }
}, {
  path: '/portfolio',
  controller: function controller() {
    return Promise.resolve('./portfolio/Controller').then(function (s) {
      return _interopRequireWildcard(require(s));
    });
  }
}, {
  path: '/friend',
  controller: function controller() {
    return Promise.resolve('./friend/Controller').then(function (s) {
      return _interopRequireWildcard(require(s));
    });
  }
}, {
  path: '/msgboard',
  controller: function controller() {
    return Promise.resolve('./msgboard/Controller').then(function (s) {
      return _interopRequireWildcard(require(s));
    });
  }
}, {
  path: '/articledetail/:articleId',
  controller: function controller() {
    return Promise.resolve('./articledetail/Controller').then(function (s) {
      return _interopRequireWildcard(require(s));
    });
  }
}];
exports["default"] = _default;