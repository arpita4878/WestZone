import mongoose from "mongoose";

const promotionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: String,

    promotionType: {
      type: String,
      enum: ["percentage", "fixedAmount", "buyOneGetOne", "specialCoupon"],
      required: true,
    },
    discountValue: {
      type: Number,
      required: true,
    },
    couponCode: {
      type: String,
      trim: true,
    },

    // ✅ Branch handling (all or specific)
    applyOn: {
      type: String,
      enum: ["allBranches", "specificBranches", "products", "categories"],
      required: true,
    },
    branches: [{ type: mongoose.Schema.Types.ObjectId, ref: "Branch" }],
    // zones: [{ type: mongoose.Schema.Types.ObjectId, ref: "Zone" }],

    // ✅ Products specific
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],

    // ✅ Categories + Subcategories specific
    categories: [
      {
        categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "category" }
        // subCategoryId: { type: mongoose.Schema.Types.ObjectId }, 
        // ⚠️ subCategoryId yaha direct ObjectId store hoga,
        // jo `category.subCategories._id` hoga
      },
    ],

    startDate: Date,
    endDate: Date,
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  { timestamps: true }
);

const Promotion = mongoose.model("Promotion", promotionSchema);
export default Promotion;
