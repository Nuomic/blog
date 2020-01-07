export default [
  {
    path: '/',
    controller: () => import('./home/Controller')
  },
  {
    path: '/home',
    controller: () => import('./home/Controller')
  },
  {
    path: '/about',
    controller: () => import('./about/Controller')
  },
  {
    path: '/article',
    controller: () => import('./article/Controller')
  },
  {
    path: '/portfolio',
    controller: () => import('./portfolio/Controller')
  },
  {
    path: '/msgboard',
    controller: () => import('./msgboard/Controller')
  },
  {
    path: '/articledetail/:articledid',
    controller: () => import('./articledetail/Controller')
  }
];
