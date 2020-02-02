import { resTemp, dataTemp } from '../../config';
import { CategoryModel } from '../../db';
export default (req, res) => {
  const { categoryId } = req.query;
  if (!!categoryId) {
  } else {
    CategoryModel.find((err, category) => {
      if (category) {
        res.json({
          //服务端解析成JSON后响应
          ...resTemp,
          categoryList: dataTemp(category)
        });
      } else {
        res.json({
          ...resTemp,
          returnStatus: {
            customerErrorMessage: '保存失败',
            errorCode: '1',
            errorMessage: err,
            isSuccess: false
          }
        });
      }
    });
  }
};
