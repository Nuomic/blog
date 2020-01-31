import { Router } from 'express';
const router = Router();
export default router;
router.post('/', function(req, res) {
  console.dir(77777777777);
  res.json({
    //服务端解析成JSON后响应
    error: {
      a: 11111,
      b: 22222
    }
  });
});
