import express from "express";
import {  createSuggestion } from "../controllers/feedback.controller.js";

const router = express.Router();

// Add new feedback
router.post("/add", createSuggestion);


export default router;
