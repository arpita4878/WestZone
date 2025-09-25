import mongoose from "mongoose";
 
const orderSchema = new mongoose.Schema(
  {
    branch: { type: mongoose.Schema.Types.ObjectId, ref: "Branch", required: true },
 
    items: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
        productName: { type: String, required: true },
        productCode: { type: String, required: true },
        qty: { type: Number, required: true },
        price: { type: Number, required: true }
      }
    ],
 
    // 💰 Order amounts
         subTotal: { type: Number, required: true },   // before discount
         discount: { type: Number, default: 0 },       // total discount applied
         total: { type: Number, required: true },      // after discount + delivery fee

         appliedPromotions: [
      {
         promoId: { type: mongoose.Schema.Types.ObjectId, ref: "Promotion" },
         title: String,
         discountValue: Number
     }
    ],

 
    status: {
      type: String,
      enum: [
        "pending",
        "paid",
        "packed",
        "out_for_delivery",
        "delivered",
        "cancelled",
        "online",
        "returned",
        "refund_initiated",
        "refunded",
        "refund_failed",
        "refund_pending",
        "assigned",
        "under_process",
        "gone_for_delivery",
        "pending_confirm",
        "new"
      ],
      default: "new"
    },
 
    customer: {
      name: String,
      phone: Number,
      address: String,
      customerId: { type: Number, ref: "Users", required: true },
      location: {
        type: { type: String, enum: ["Point"], default: "Point" },
        coordinates: { type: [Number], default: [0, 0] } // [lng, lat]
      }
    },
 
    delivery: {
      zoneId: { type: mongoose.Schema.Types.ObjectId, ref: "DeliveryZone" },
      fee: { type: Number, default: 0 },
      etaMinutes: { type: Number },
      route: {
        distanceMeters: Number,
        durationSeconds: Number,
        polyline: String
      }
    },
 
    payment: {
      method: { type: String, enum: ["cod", "online"], default: "cod" },
      paid: { type: Boolean, default: false }
    },

   customerMissingProducts: [
  {
    _id: false,
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
    quantity: { type: Number, default: 1 },
    note: { type: String, default: "" },
    reportedAt: { type: Date, default: Date.now }
  }
],

  cancelledBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    cancelledAt: { type: Date },
    cancelReason: { type: String },
 
    delivery_boy: {
      id: { type: Number },
      name: { type: String },
      email: { type: String }
    },
 
    assignedAt: { type: Date },
    deliveredAt: { type: Date },
 
    feedback: {
      reason: { type: String },
      serviceRating: { type: Number, min: 1, max: 5 },  
      qualityRating: { type: Number, min: 1, max: 5 },  
      packagingRating: { type: Number, min: 1, max: 5 },
      deliveryRating: { type: Number, min: 1, max: 5 },  
      totalRating: { type: Number, min: 1, max: 5 },
      productSuggestion: { type: String },
      comment: { type: String },
      submittedAt: { type: Date, default: Date.now }
    }

  },
  { timestamps: true }
);
 
const Order = mongoose.model("Order", orderSchema);
export default Order;
 