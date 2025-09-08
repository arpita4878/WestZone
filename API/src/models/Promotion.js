import mongoose from "mongoose";

const promotionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },       // heading
    description: { type: String },                 // detail
    start: { type: Date, required: true },         // start date
    end: { type: Date, required: true },           // end date
    priority: { type: Number, default: 0 }         // higher number = higher priority
  },
  { timestamps: true }
);

const Promotion = mongoose.model("Promotion", promotionSchema);
export default Promotion;
