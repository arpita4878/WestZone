import mongoose from "mongoose";

const newOfferZoneSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  typeOfOffer: {
    type: String,
    enum: ["Discount", "Coupon", "BOGO", "Flat"],
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  priority: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

export default mongoose.model("NewOfferZone", newOfferZoneSchema);
