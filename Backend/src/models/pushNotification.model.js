import mongoose from "mongoose";

const pushNotificationSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String },
  phone: { type: String },
  title: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now }
}, { timestamps: true });

export default mongoose.model("PushNotification", pushNotificationSchema);