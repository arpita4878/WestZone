import mongoose from "mongoose";

const serviceFeedbackSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    branch: { type: mongoose.Schema.Types.ObjectId, ref: "Branch", required: true },
    comment: { type: String },
    reasonOfFeedback: { type: String },
    serviceRating: { type: Number, min: 1, max: 5 },
    quantityRating: { type: Number, min: 1, max: 5 },
    deliveryRating: { type: Number, min: 1, max: 5 },
    date: { type: Date, default: Date.now },
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
    status: { type: String, enum: ["pending", "accepted", "dispatched", "delivered"], default: "pending" }
});

export default mongoose.model("ServiceFeedback", serviceFeedbackSchema);
