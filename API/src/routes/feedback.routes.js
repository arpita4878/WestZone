import express from "express";
import { addFeedback, getFeedbacks } from "../controllers/feedback.controller.js";

const router = express.Router();

// Add new feedback
router.post("/add", addFeedback);

// Get all feedbacks
router.get("/all", getFeedbacks);

export default router;
