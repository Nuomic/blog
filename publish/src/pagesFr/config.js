"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.footerDate = exports.menuList = exports.comFormTheme = exports.themeColor = void 0;
var themeColor = {
  headBgColor: 'rgba(55,55,55,.5)',
  footerBgColor: 'rgba(70,70,70,.7)',
  starBgColor: '#222',
  articleBgColor: 'rgba(255,255,255,.07)',
  siderBgColor: 'rgba(255,255,255,.07)'
}; //评论表单主题配置

exports.themeColor = themeColor;
var comFormTheme = {
  backgroundColor: 'rgba(255,255,255,.5)'
}; //目录配置

exports.comFormTheme = comFormTheme;
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
  key: 'friend',
  name: '邻居'
}, {
  key: 'msgboard',
  name: '留言板'
}];
exports.menuList = menuList;
var footerDate = {
  record: '赣ICP备 19004224 号',
  //备案号
  startYear: '2019',
  //上线年份
  siteName: '站点名称 暂时未定',
  //站点名称
  //联系方式 type为联系方式  href为网页地址  qrCode为二维码地址
  connectWay: [{
    type: 'github',
    href: 'https://github.com/zhangweiqiang666'
  }, {
    type: 'qq',
    qrCode: '/static/images/qq_qrcode.png',
    alt: 'QQ 972618478'
  }, {
    type: 'wechat',
    qrCode: '/static/images/mm_qrcode.png',
    alt: 'weChat zwq972618478'
  }, {
    type: 'weibo',
    href: ' '
  }]
};
exports.footerDate = footerDate;