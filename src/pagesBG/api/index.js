export default {
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
  getOverview: '/overview',

  //文件操作
  uploadFile: '/resource/save',
  getResource: '/resource/list',
  deleteResource: '/resource/delete',
  changeResourceStatus: '/resource/changeStatus',
  download: '/resource/download',
};
