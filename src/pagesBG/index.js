export default [
  {
    path: '/login',
    controller: () => import('./login/Controller')
  },
  {
    path: '/admin',
    controller: () => import('./home/Controller')
  },
  {
    path: '/admin/home',
    controller: () => import('./home/Controller')
  },
  {
    path: '/md',
    controller: () => import('./article/Controller')
  },
  {
    path: '/category',
    controller: () => import('./category/Controller')
  },
  {
    path: '/login',
    controller: () => import('./login/Controller')
  }
];
