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
    path: '/article',
    controller: () => import('./login/Controller')
  },
  {
    path: '/login',
    controller: () => import('./login/Controller')
  },
  {
    path: '/login',
    controller: () => import('./login/Controller')
  }
];
