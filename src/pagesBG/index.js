export default [
  {
    path: '/admin',
    controller: () => import('./home/Controller')
  },
  {
    path: '/admin/home',
    controller: () => import('./home/Controller')
  },
  {
    path: '/login',
    controller: () => import('./login/Controller')
  },
  {}
];
