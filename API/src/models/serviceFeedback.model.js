import mongoose from "mongoose";

const serviceFeedbackSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  branch: { type: String, required: true },
  comment: { type: String, required: true },
  reasonOfFeedback: { type: String, required: true }, // reason field
  serviceRating: { type: Number, min: 1, max: 5, required: true },
  quantityRating: { type: Number, min: 1, max: 5, required: true },
  deliveryRating: { type: Number, min: 1, max: 5, required: true },
  date: { type: Date, default: Date.now },
  orderId: { type: String, required: true },
//   viewFile: { type: String }, // file ka path/url store hoga (image, pdf, etc.)
  status: { type: String, enum: ["Pending", "In Progress", "Resolved"], default: "Pending" }
}, { timestamps: true });

export default mongoose.model("ServiceFeedback", serviceFeedbackSchema);
