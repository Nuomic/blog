"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  // 文章
  getArticleList: '/article/list',
  // 删除文章
  deleteArticle: '/article/delete',
  saveArticle: '/article/save',
  // 改变文章状态
  changeArticleStatus: '/article/changeStatus',

  /* 获取栏目 */
  getCategory: '/category/list',

  /* 删除栏目 */
  deleteCategory: '/category/delete',
  saveCategory: '/category/save',
  uploadFile: '/resource/save',
  getCommentList: 'https://www.fastmock.site/mock/4e8085bf9009c950a4262c1fe5ebbd44/api/getCommentList',
  saveComment: 'https://www.fastmock.site/mock/4e8085bf9009c950a4262c1fe5ebbd44/api/saveComment',
  deleteComment: 'https://www.fastmock.site/mock/4e8085bf9009c950a4262c1fe5ebbd44/api/deleteComment',
  changeArticleCategory: ' https://www.fastmock.site/mock/4e8085bf9009c950a4262c1fe5ebbd44/api/changeArticleCategory',
  postlogin: '/login',
  getSetting: '/setting/get',
  getFormData: '/setting/getFormData',
  saveSetting: '/setting/save',
  //有情链接
  getFriend: '/friend/list',
  deleteFriend: '/friend/delete',
  saveFriend: '/friend/save',
  //标签
  saveTag: '/tag/save'
};
exports["default"] = _default;