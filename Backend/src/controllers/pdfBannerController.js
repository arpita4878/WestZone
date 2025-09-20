import PDFBanner from "../models/pdfBanner.model.js";

export const createPDFBanner = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "PDF file is required" });
    }

    const banner = new PDFBanner({
      name: req.body.name,
      pdfUrl: `/uploads/pdfs/${req.file.filename}`, // or cloud URL
    });

    await banner.save();
    res.status(201).json({ success: true, data: banner });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get all PDF Banners
export const getAllPDFBanners = async (req, res) => {
  try {
    const banners = await PDFBanner.find().sort({ createdAt: -1 });
    res.json({ success: true, data: banners });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get single PDF Banner by ID
export const getPDFBannerById = async (req, res) => {
  try {
    const banner = await PDFBanner.findById(req.params.id);
    if (!banner) return res.status(404).json({ success: false, message: "Banner not found" });
    res.json({ success: true, data: banner });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update PDF Banner
export const updatePDFBanner = async (req, res) => {
  try {
    const banner = await PDFBanner.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, data: banner });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete PDF Banner
export const deletePDFBanner = async (req, res) => {
  try {
    await PDFBanner.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Banner deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};