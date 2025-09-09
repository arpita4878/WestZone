import express from "express";
import {
  addServiceFeedback,
  getServiceFeedbacks,
  getServiceFeedbackById,
  updateServiceFeedback,
  deleteServiceFeedback
} from "../controllers/serviceFeedback.controller.js";

const router = express.Router();

router.post("/", addServiceFeedback);       // Add new feedback
router.get("/", getServiceFeedbacks);       // Get all feedbacks
router.get("/:id", getServiceFeedbackById); // Get single feedback
router.put("/:id", updateServiceFeedback);  // Update feedback
router.delete("/:id", deleteServiceFeedback); // Delete feedback

export default router;
