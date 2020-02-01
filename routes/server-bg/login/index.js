import { Router } from 'express';
import { UserModel } from '../../db';
import { resTemp } from '../../config';
const router = Router();
const filter = { password: 0, _v: 0 };
export default router;
console.log('UserModel', UserModel);
router.post('/', function(req, res) {
  const { username, password, userid } = req.body;
  if (userid) {
  } else
    UserModel.findOne({ username, password }, filter, (err, user) => {
      if (user) {
        res.cookie('userid', user._id, { maxAge: 1000 * 60 * 60 * 24 * 30 });
        res.json({
          //服务端解析成JSON后响应
          ...resTemp,
          userInfo: user
        });
      } else {
        let { returnStatus } = resTemp;
        returnStatus = {
          ...returnStatus,
          isSuccess: false
        };
        res.send({ ...resTemp, ...returnStatus });
      }
    });
});
