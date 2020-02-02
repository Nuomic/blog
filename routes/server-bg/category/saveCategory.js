import { resTemp, dataTemp } from '../../config';
import { CategoryModel } from '../../db';

export default (req, res) => {
  const returnStatus = {
    customerErrorMessage: '保存失败',
    errorCode: '1',
    isSuccess: false
  };
  const { id, updatedAt, createdAt, ...value } = req.body;
  if (!id) {
    CategoryModel.create(
      {
        ...value,
        avatar:
          value.avatar ||
          'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
        articleCount: 0
      },
      (err, category) => {
        category = { id: category._id, ...category._doc };
        delete category._id;
        if (!err) res.json({ ...resTemp, ...category });
        else {
          res.json({
            ...resTemp,
            returnStatus: {
              ...returnStatus,
              errorMessage: err
            }
          });
        }
      }
    );
  } else {
    CategoryModel.findByIdAndUpdate(id, value, err => {
      if (!err) res.json(resTemp);
      else {
        res.json({
          ...resTemp,
          returnStatus: {
            ...returnStatus,
            errorMessage: err
          }
        });
      }
    });
  }
};
