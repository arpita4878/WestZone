import mongoose from "mongoose";

const promotionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subTitle: { type: String },
  description: { type: String },
  subDescription: { type: String },

  promotionType: { 
    type: String, 
    enum: ["product", "subcategory", "giftItem", "banner", "samePrice"], 
    required: true 
  },

  discountValue: { type: Number },

  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  subCategories: [{ type: String }],
  branches: [{ type: String }],

  giftItem: { type: String },
  samePrice: { type: Number },
  banner: { type: String },

  startDate: { type: Date },
  endDate: { type: Date },
  status: { type: String, enum: ["active", "inactive"], default: "active" }
}, { timestamps: true });

export default mongoose.model("Promotion", promotionSchema);
