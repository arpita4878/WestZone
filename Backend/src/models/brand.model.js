import mongoose from "mongoose";

const brandSchema = new mongoose.Schema({
  _id: Number,
  brandName: { type: String, required: true, unique: true, trim: true },
  isInList: { type: Boolean, default: true,required:true },
  image: { type: String, default: null },
  priority:{type:Number , default:5}
}, { timestamps: true });

export default mongoose.model("Brand", brandSchema);
