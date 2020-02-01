import mongoose from 'mongoose';
//定义描述文档结构
const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  registrantion_time: { type: Date, required: true },
  nickname: { type: String, required: true },
  phone_number: { type: String, required: true }
});
//定义Model
export default mongoose.model('user', userSchema);
