export default [
  {
    path: '/login',
    controller: () => import('./login/Controller'),
    name: '登录',
  },
  {
    path: '/admin',
    controller: () => import('./home/Controller'),
    name: '首页',
  },
  {
    path: '/admin/home',
    controller: () => import('./home/Controller'),
    name: '首页',
  },
  {
    path: '/admin/md/add',
    controller: () => import('./article/Controller'),
    name: '富文本新增',
  },
  {
    path: `/admin/md/edit/:articleId`,
    controller: () => import('./article/Controller'),
    name: '富文本编辑页',
  },
  {
    path: '/admin/category',
    controller: () => import('./category/Controller'),
    name: '分类管理',
  },
  {
    path: '/admin/articlemng',
    controller: () => import('./articlelist/Controller'),
    name: '文章管理',
  },
  {
    path: '/admin/msgmng',
    controller: () => import('./msgboard/Controller'),
    name: '留言管理',
  },
  {
    path: '/admin/resources',
    controller: () => import('./resources/Controller'),
    name: '资源管理',
  },
  {
    path: '/admin/friend',
    controller: () => import('./friend/Controller'),
    name: '友情链接',
  },
  {
    path: '/admin/user',
    controller: () => import('./user/Controller'),
    name: '个人中心',
  },
  {
    path: '/admin/portfolio',
    controller: () => import('./portfolio/Controller'),
    name: '作品管理',
  },
];
