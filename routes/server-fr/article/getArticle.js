import { resTemp } from '../../config';
import { ArticleModel } from '../../db';

export default (req, res) => {
  const { articleId } = req.params;
  if (!!articleId) {
  } else {
    ArticleModel.find((err, article) => {
      if (article) {
        console.log('article', article);
        const articleList = article.map(item => {
          let id = item._id;
          delete item._doc._id;
          return { id, ...item._doc };
        });
        res.json({
          //服务端解析成JSON后响应
          ...resTemp,
          articleList
        });
      }
    });
  }
};
