import { resTemp } from '../../config';
import { CategoryModel } from '../../db';

export default (req, res) => {
  const returnStatus = {
    customerErrorMessage: '删除失败',
    errorCode: '1',
    isSuccess: false
  };
  const { categoryId } = req.body;
  if (!!categoryId) {
    CategoryModel.findByIdAndDelete(categoryId, err => {
      if (!err) res.json({ ...resTemp });
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
  } else {
    res.json({
      ...resTemp,
      returnStatus: {
        ...returnStatus,
        errorMessage: err
      }
    });
  }
};
