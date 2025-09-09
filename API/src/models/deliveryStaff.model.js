import mongoose from "mongoose";

const deliveryStaffSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  phone: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model("DeliveryStaff", deliveryStaffSchema);
