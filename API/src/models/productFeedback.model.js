import mongoose from "mongoose";

const productFeedbackSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  phone: { type: String },
  review: { type: String },
  rating: { type: Number, min: 1, max: 5 },
  packingRating: { type: Number, min: 1, max: 5 },
  qualityRating: { type: Number, min: 1, max: 5 },
  productName: { type: String, required: true },
  price: { type: Number },
  barcode: { type: String },
  storeId: { type: mongoose.Schema.Types.ObjectId, ref: "Store" },
  reasonCode: { type: String }, // ex: Damaged, Late Delivery
  status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
  date: { type: Date, default: Date.now },
  reviewedBy: { type: String }, // Admin/Manager name
}, { timestamps: true });

export default mongoose.model("ProductFeedback", productFeedbackSchema);
