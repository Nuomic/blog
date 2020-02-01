import { Router } from 'express';
import { BlogdescModel } from '../../db';
import { resTemp } from '../../config';
const router = Router();
// const filter = { password: 0, _v: 0 };
export default router;
router.get('/', (req, res) => {
  BlogdescModel.findOne({}, (err, blogdesc) => {
    if (blogdesc) {
      res.json({
        ...resTemp,
        blogdesc
      });
    } else {
    }
  });
});
