"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = [{
  path: '/login',
  controller: function controller() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./login/Controller'));
    });
  },
  name: '登录'
}, {
  path: '/admin',
  controller: function controller() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./home/Controller'));
    });
  },
  name: '首页'
}, {
  path: '/admin/home',
  controller: function controller() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./home/Controller'));
    });
  },
  name: '首页'
}, {
  path: '/md/add',
  controller: function controller() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./article/Controller'));
    });
  },
  name: '富文本新增'
}, {
  path: "/md/edit/:articleId",
  controller: function controller() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./article/Controller'));
    });
  },
  name: '富文本编辑页'
}, {
  path: '/category',
  controller: function controller() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./category/Controller'));
    });
  },
  name: '分类管理'
}, {
  path: '/articlemng',
  controller: function controller() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./articlelist/Controller'));
    });
  },
  name: '文章管理'
}, {
  path: '/msgmng',
  controller: function controller() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./msgboard/Controller'));
    });
  },
  name: '留言管理'
}, {
  path: '/resources',
  controller: function controller() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./resources/Controller'));
    });
  },
  name: '资源管理'
}, {
  path: '/user',
  controller: function controller() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('./user/Controller'));
    });
  },
  name: '个人中心'
}];
exports["default"] = _default;