"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.menuList = exports.themeColor = void 0;
var themeColor = {
  headBgColor: 'rgba(55,55,55,.5)',
  footerBgColor: 'rgba(70,70,70,.7)',
  starBgColor: '#222',
  articleBgColor: 'rgba(255,255,255,.07)',
  siderBgColor: 'rgba(255,255,255,.07)'
}; //目录配置

exports.themeColor = themeColor;
var menuList = [{
  key: 'home',
  name: '首页'
}, {
  key: 'about',
  name: '关于'
}, {
  key: 'article',
  name: '博文'
}, {
  key: 'portfolio',
  name: '作品集'
}, {
  key: 'msgboard',
  name: '留言板'
}];
exports.menuList = menuList;