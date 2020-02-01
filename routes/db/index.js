import mongoose from 'mongoose';
import userModel from './userModel';
// 1.1 连接数据库
mongoose.connect('mongodb://zwq:zwq997957@zwq666.top:27017/blogDB');
//1.2 获取连接对象
const conn = mongoose.connection;
// 1.3 绑定连接完成的监听
conn.on('connected', () => {
  console.log('数据库连接成功！');
});

export const UserModel = userModel;