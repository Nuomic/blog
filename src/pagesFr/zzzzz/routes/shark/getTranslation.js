import { Router } from "express";
import shark from "@ctrip/shark-sdk";

const router = Router();
export default router;

const initShark = shark.init({appID:'100020553'});

const prepareShark = (req, res, next) => {
  initShark.then(() => next());
};

router.use(prepareShark, async (req, res, next) => {
  let { locale = 'zh-CN', group = 'trip', pageName = '' } = req.body;
  let lang = {};
  try {
    const i18n = shark.dump(locale);
    if (Array.isArray(pageName)) {
      pageName.forEach(item => {
        Object.assign(lang, filterResultByPageName(i18n, item));
      });
    } else {
      lang = filterResultByPageName(i18n, pageName);
    }
    res.json(lang);
  } catch (error) {
    console.log('error',error);
    next(error);
  }
});

const getRealKeyName = (key,pageName) => {
  return key.replace(/^key\./, '').replace(`${pageName}.`, '')
};

const filterResultByPageName = (i18n = {}, pageName = '') => {
  let obj = {};
  Object.keys(i18n)
    .filter(key => key.startsWith(`key.${pageName}.`) || key.startsWith('key.common.'))
    .map(mapItem => {
      let name = getRealKeyName(mapItem,pageName);
      let tempObj = {};
      tempObj[name] = i18n[mapItem];
      Object.assign(obj, tempObj);
    });
  return obj;
};
