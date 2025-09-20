import mongoose from "mongoose";

const pdfBannerSchema = new mongoose.Schema({
  name: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model("PDFBanner", pdfBannerSchema);