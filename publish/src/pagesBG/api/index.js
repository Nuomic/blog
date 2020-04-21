"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getArticleList$delet;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (_getArticleList$delet = {
  // 文章// 改变文章状态 // 删除文章
  getArticleList: '/article/list',
  deleteArticle: '/article/delete',
  saveArticle: '/article/save',
  changeArticleStatus: '/article/changeStatus',

  /* 栏目 */
  getCategory: '/category/list',
  deleteCategory: '/category/delete',
  saveCategory: '/category/save',
  // 上传文件
  uploadFile: '/resource/save',
  //评论
  getCommentList: '/comment/list',
  saveComment: '/comment/save',
  deleteComment: '/comment/delete',
  //用户
  userLogin: '/user/login',
  userLogout: '/user/logout',
  userCheck: '/user/check',
  userRegister: '/user/register',
  changeUserInfo: '/user/edit',
  // 其他设置
  getSetting: '/setting/get',
  getFormData: '/setting/getFormData',
  saveSetting: '/setting/save',
  //有情链接
  getFriend: '/friend/list',
  deleteFriend: '/friend/delete',
  saveFriend: '/friend/save',
  //标签
  saveTag: '/tag/save',
  //验证码
  getCaptcha: '/user/captcha',
  //站点 统计
  getOverview: '/overview'
}, _defineProperty(_getArticleList$delet, "uploadFile", '/resource/save'), _defineProperty(_getArticleList$delet, "getResource", '/resource/list'), _defineProperty(_getArticleList$delet, "deleteResource", '/resource/delete'), _defineProperty(_getArticleList$delet, "changeResourceStatus", '/resource/changeStatus'), _defineProperty(_getArticleList$delet, "download", '/resource/download'), _defineProperty(_getArticleList$delet, "getPortfolio", '/portfolio/list'), _defineProperty(_getArticleList$delet, "deletePortfolio", '/portfolio/delete'), _defineProperty(_getArticleList$delet, "savePortfolio", '/portfolio/save'), _getArticleList$delet);

exports["default"] = _default;