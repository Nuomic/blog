"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = [{
  path: '/login',
  controller: function controller() {
    return Promise.resolve('./login/Controller').then(function (s) {
      return _interopRequireWildcard(require(s));
    });
  },
  name: '登录'
}, {
  path: '/admin',
  controller: function controller() {
    return Promise.resolve('./home/Controller').then(function (s) {
      return _interopRequireWildcard(require(s));
    });
  },
  name: '首页'
}, {
  path: '/admin/home',
  controller: function controller() {
    return Promise.resolve('./home/Controller').then(function (s) {
      return _interopRequireWildcard(require(s));
    });
  },
  name: '首页'
}, {
  path: '/admin/md/add',
  controller: function controller() {
    return Promise.resolve('./article/Controller').then(function (s) {
      return _interopRequireWildcard(require(s));
    });
  },
  name: '富文本新增'
}, {
  path: "/admin/md/edit/:articleId",
  controller: function controller() {
    return Promise.resolve('./article/Controller').then(function (s) {
      return _interopRequireWildcard(require(s));
    });
  },
  name: '富文本编辑页'
}, {
  path: '/admin/category',
  controller: function controller() {
    return Promise.resolve('./category/Controller').then(function (s) {
      return _interopRequireWildcard(require(s));
    });
  },
  name: '分类管理'
}, {
  path: '/admin/articlemng',
  controller: function controller() {
    return Promise.resolve('./articlelist/Controller').then(function (s) {
      return _interopRequireWildcard(require(s));
    });
  },
  name: '文章管理'
}, {
  path: '/admin/msgmng',
  controller: function controller() {
    return Promise.resolve('./msgboard/Controller').then(function (s) {
      return _interopRequireWildcard(require(s));
    });
  },
  name: '留言管理'
}, {
  path: '/admin/resources',
  controller: function controller() {
    return Promise.resolve('./resources/Controller').then(function (s) {
      return _interopRequireWildcard(require(s));
    });
  },
  name: '资源管理'
}, {
  path: '/admin/friend',
  controller: function controller() {
    return Promise.resolve('./friend/Controller').then(function (s) {
      return _interopRequireWildcard(require(s));
    });
  },
  name: '友情链接'
}, {
  path: '/admin/user',
  controller: function controller() {
    return Promise.resolve('./user/Controller').then(function (s) {
      return _interopRequireWildcard(require(s));
    });
  },
  name: '个人中心'
}, {
  path: '/admin/portfolio',
  controller: function controller() {
    return Promise.resolve('./portfolio/Controller').then(function (s) {
      return _interopRequireWildcard(require(s));
    });
  },
  name: '作品管理'
}];
exports["default"] = _default;