import mongoose from 'mongoose';
//定义描述文档结构
const settingSchema = mongoose.Schema({
  about: {
    userDesc: { type: String, required: true },
    blogDesc: { type: String, required: true },
    weChat: { type: String, required: true },
    alipay: { type: String, required: true }
  }
});
//定义Model
export default mongoose.model('setting', settingSchema);
