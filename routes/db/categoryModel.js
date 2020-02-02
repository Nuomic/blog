import mongoose from 'mongoose';
//定义描述文档结构
const categorySchema = mongoose.Schema(
  {
    id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    summary: String,
    avatar: String,
    articleCount: Number
  },
  { timestamps: true }
);
//定义Model
export default mongoose.model('category', categorySchema);
