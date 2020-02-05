export default [
  {
    path: '/login',
    controller: () => import('./login/Controller'),
    name: '登录'
  },
  {
    path: '/admin',
    controller: () => import('./home/Controller'),
    name: '首页'
  },
  {
    path: '/admin/home',
    controller: () => import('./home/Controller'),
    name: '首页'
  },
  {
    path: '/md/add',
    controller: () => import('./article/Controller'),
    name: '富文本新增'
  },
  {
    path: `/md/edit/:articleId`,
    controller: () => import('./article/Controller'),
    name: '富文本编辑页'
  },
  {
    path: '/category',
    controller: () => import('./category/Controller'),
    name: '分类管理'
  },
  {
    path: '/articlemng',
    controller: () => import('./articlelist/Controller'),
    name: '文章管理'
  },
  {
    path: '/msgmng',
    controller: () => import('./msgboard/Controller'),
    name: '留言管理'
  },
  {
    path: '/resources',
    controller: () => import('./resources/Controller'),
    name: '资源管理'
  },
  {
    path: '/friend',
    controller: () => import('./friend/Controller'),
    name: '友情链接'
  },
  {
    path: '/user',
    controller: () => import('./user/Controller'),
    name: '个人中心'
  }
];
