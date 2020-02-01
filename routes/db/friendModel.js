import mongoose from 'mongoose';
//定义描述文档结构
const friendSchema = mongoose.Schema({
  category_id: { type: String, required: true },
  tag_id: { type: String },
  date: { type: Date, required: true },
  view_count: { type: Number },
  like_count: { type: Number },
  comment_count: { type: Number },
  title: { type: String, required: true },
  content: { type: String, required: true }
});
//定义Model
export default mongoose.model('friend', friendSchema);
