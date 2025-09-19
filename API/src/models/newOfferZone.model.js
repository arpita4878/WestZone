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
    enum: ["Discount", "Coupon", "BOGO", "Flat", "ProductRow section"], 
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true 
  },
  status: {
    type: String,
    enum: ["active", "inactive", "ended"],
    default: "ended" 
  },
  priority: {
    type: Number,
    default: 0
  },
  //Optional fields for frontend / automatic use
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
  branches: [{ type: mongoose.Schema.Types.ObjectId, ref: "Branch" }],
}, { timestamps: true });

export default mongoose.model("NewOfferZone", newOfferZoneSchema);
