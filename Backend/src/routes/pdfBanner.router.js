import express from "express";
import {
  createPDFBanner,
  getAllPDFBanners,
  getPDFBannerById,
  updatePDFBanner,
  deletePDFBanner
} from "../controllers/pdfBannerController.js";

import { upload } from "../middleware/uploads.js";

const router = express.Router();

router.post("/", upload.single("pdf"), createPDFBanner);
router.get("/", getAllPDFBanners);          // Get all Banners
router.get("/:id", getPDFBannerById);       // Get Banner by ID
router.put("/:id", updatePDFBanner);       // Update Banner
router.delete("/:id", deletePDFBanner);    // Delete Banner

export default router;