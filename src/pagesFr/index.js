export default [
  {
    path: '/',
    controller: () => import('./home/Controller'),
  },
  {
    path: '/home',
    controller: () => import('./home/Controller'),
  },
  {
    path: '/about',
    controller: () => import('./about/Controller'),
  },
  {
    path: '/article',
    controller: () => import('./article/Controller'),
  },
  {
    path: '/article/:type/:id',
    controller: () => import('./article/Controller'),
  },
  {
    path: '/portfolio',
    controller: () => import('./portfolio/Controller'),
  },
  {
    path: '/friend',
    controller: () => import('./friend/Controller'),
  },
  {
    path: '/msgboard',
    controller: () => import('./msgboard/Controller'),
  },
  {
    path: '/articledetail/:articleId',
    controller: () => import('./articledetail/Controller'),
  },
];
