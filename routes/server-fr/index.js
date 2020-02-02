import { restapi } from '../config';
import article from './article';
import setting from './setting';
//后端路由扁平化
export const serverFr = function(app, server) {
  app.use(`${restapi}/fr/article`, article);
  app.use(`${restapi}/fr/comment`, () => {});
  app.use(`${restapi}/fr/about`, () => {});
  app.use(`${restapi}/fr/setting`, setting);
  server.on('error', error => {
    // 对 server 进行一些处理
    console.log('error', error);
  });
};
