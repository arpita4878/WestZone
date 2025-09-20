import express from "express";
import {
  createNotification,
  getAllNotifications,
  getNotificationById,
  updateNotification,
  deleteNotification
} from "../controllers/pushNotificationController";

const router = express.Router();

router.post("/", createNotification);          // Add notification
router.get("/", getAllNotifications);          // Get all notifications
router.get("/:id", getNotificationById);       // Get notification by ID
router.put("/:id", updateNotification);       // Update notification
router.delete("/:id", deleteNotification);    // Delete notification

export default router;
