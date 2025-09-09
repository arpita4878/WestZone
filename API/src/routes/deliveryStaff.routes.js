import express from "express";
import {
  createDeliveryStaff,
  getAllDeliveryStaff,
  getDeliveryStaffById,
  updateDeliveryStaff,
  deleteDeliveryStaff
} from "../controllers/deliveryStaff.controller.js";

const router = express.Router();

router.post("/", createDeliveryStaff);          // Add staff
router.get("/", getAllDeliveryStaff);          // Get all staff
router.get("/:id", getDeliveryStaffById);      // Get staff by ID
router.put("/:id", updateDeliveryStaff);       // Update staff
router.delete("/:id", deleteDeliveryStaff);    // Delete staff

export default router;
