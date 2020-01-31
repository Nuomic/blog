import qconfig from './qconfig';
import login from './login';

//后端路由扁平化
const restapi = '/server';
export default function(app, server) {
  app.use(`${restapi}/bg/login`, login);
  app.use(`${restapi}/bg/qconfig`, qconfig);
  server.on('error', error => {
    // 对 server 进行一些处理
    console.log('error', error);
  });
}
