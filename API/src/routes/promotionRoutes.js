import express from "express";
import {
  createPromotion,
  getAllPromotions,
  getPromotionById,
  updatePromotion,
  deletePromotion
} from "../controllers/promotionController.js";

const router = express.Router();

router.post("/", createPromotion);            // Create promotion
router.get("/", getAllPromotions);           // Get all promotions
router.get("/:id", getPromotionById);        // Get promotion by ID
router.put("/:id", updatePromotion);         // Update promotion
router.delete("/:id", deletePromotion);      // Delete promotion

export default router;
