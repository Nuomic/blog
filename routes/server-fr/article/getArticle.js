import { resTemp, dataTemp } from '../../config';
import { ArticleModel } from '../../db';

export default (req, res) => {
  const { articleId } = req.params;
  if (!!articleId) {
  } else {
    ArticleModel.find((err, article) => {
      if (article) {
        res.json({
          //服务端解析成JSON后响应
          ...resTemp,
          articleList: dataTemp(article)
        });
      }
    });
  }
};
