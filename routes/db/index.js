import mongoose from 'mongoose';
import userModel from './userModel';
import articleModel from './articleModel';
import categoryModel from './categoryModel';
import friendModel from './friendModel';
import commentModel from './commentModel';
import tagModel from './tagModel';
import settingModel from './settingModel';
import { dbUrl } from '../config';
// 1.1 连接数据库
mongoose.connect(dbUrl);
//1.2 获取连接对象
const conn = mongoose.connection;
// 1.3 绑定连接完成的监听
conn.on('connected', () => {
  console.log('数据库连接成功！');
});

export const UserModel = userModel;
export const ArticleModel = articleModel;
export const CategoryModel = categoryModel;
export const FriendModel = friendModel;
export const CommentModel = commentModel;
export const TagModel = tagModel;
export const SettingModel = settingModel;
