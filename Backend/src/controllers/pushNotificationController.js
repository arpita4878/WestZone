import PushNotification from "../models/pushNotification.model.js";

// Add new push notification
export const createNotification = async (req, res) => {
  try {
    const notification = new PushNotification(req.body);
    await notification.save();
    res.status(201).json({ success: true, data: notification });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get all notifications
export const getAllNotifications = async (req, res) => {
  try {
    const notifications = await PushNotification.find().sort({ createdAt: -1 });
    res.json({ success: true, data: notifications });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get single notification by ID
export const getNotificationById = async (req, res) => {
  try {
    const notification = await PushNotification.findById(req.params.id);
    if (!notification) return res.status(404).json({ success: false, message: "Notification not found" });
    res.json({ success: true, data: notification });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update notification
export const updateNotification = async (req, res) => {
  try {
    const notification = await PushNotification.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, data: notification });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete notification
export const deleteNotification = async (req, res) => {
  try {
    await PushNotification.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Notification deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};