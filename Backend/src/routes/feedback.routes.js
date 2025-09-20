import express from "express";
// import {createSuggestion} from "../controllers/orderController.js";

import { submitFeedback } from "../controllers/orderController.js";

import { protect } from "../middleware/auth.js";


const router = express.Router();

// Add new feedback
// router.post("/add", createSuggestion);

// router.get("/", getFeedbacks);

router.post("/:id/feedback", protect, submitFeedback);
 
 

export default router;
