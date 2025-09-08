import express from "express";
import { createPromotion, getPromotions } from "../controllers/promotionController.js";

const router = express.Router();

router.post("/", createPromotion);
router.get("/", getPromotions);

export default router;
