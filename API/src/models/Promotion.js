import mongoose from "mongoose";

const promotionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  priority: { type: Number, default: 0 },
  status: { type: String, enum: ["pending", "active", "inactive"], default: "pending" },
}, { timestamps: true });

export default mongoose.model("Promotion", promotionSchema);
