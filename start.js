// 设置环境变量为生产模式
process.env.NODE_ENV = 'production';
// 引入 react-imvc
import { start, build } from 'react-imvc';
// 引入配置
import config from './imvc.config';
// 将配置部分修改为生产模式
var productionConfig = {
  ...config,
  root: __dirname,
  logger: 'dev'
};
// 启动 react-imvc 应用
start({
  config: productionConfig
});

// 除了 start 方法以外，还有 build 方法，可以对 react-imvc 项目进行构建
build({
  config: productionConfig
});
