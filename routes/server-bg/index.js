import category from './category';
import login from './login';
import { restapi } from '../config';

//后端路由扁平化
export const serverBg = function(app, server) {
  app.use(`${restapi}/bg/login`, login);
  app.use(`${restapi}/bg/category`, category);
  server.on('error', error => {
    // 对 server 进行一些处理
    console.log('error', 11111111111111);
  });
};
