import express from "express";
import {
  addServiceFeedback,
  getAllServiceFeedbacks,
  getServiceFeedbackById
} from "../controllers/serviceFeedback.controller.js";

const router = express.Router();

// Add new service feedback
router.post("/add", addServiceFeedback);

// Get all service feedbacks
router.get("/", getAllServiceFeedbacks);

// Get single service feedback by ID
router.get("/:id", getServiceFeedbackById);

export default router;
