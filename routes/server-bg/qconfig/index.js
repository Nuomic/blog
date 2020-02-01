/**
 * 用 cat 记录 node server 的运行状况
 */
// 引入 express router
import { Router } from 'express';
// 创建 router
const router = Router();
export default router;
router.post('/', function(req, res) {
  console.dir(66666);
  res.json({
    //服务端解析成JSON后响应
    error: {
      a: 1,
      b: 2
    }
  });
});
