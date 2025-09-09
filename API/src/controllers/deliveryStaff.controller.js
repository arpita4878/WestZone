import DeliveryStaff from "../models/deliveryStaff.model.js";

// Add new delivery staff
export const createDeliveryStaff = async (req, res) => {
  try {
    const staff = new DeliveryStaff(req.body);
    await staff.save();
    res.status(201).json({ success: true, data: staff });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get all delivery staff
export const getAllDeliveryStaff = async (req, res) => {
  try {
    const staffList = await DeliveryStaff.find().sort({ createdAt: -1 });
    res.json({ success: true, data: staffList });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get single delivery staff by ID
export const getDeliveryStaffById = async (req, res) => {
  try {
    const staff = await DeliveryStaff.findById(req.params.id);
    if (!staff) return res.status(404).json({ success: false, message: "Staff not found" });
    res.json({ success: true, data: staff });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update delivery staff
export const updateDeliveryStaff = async (req, res) => {
  try {
    const staff = await DeliveryStaff.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, data: staff });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete delivery staff
export const deleteDeliveryStaff = async (req, res) => {
  try {
    await DeliveryStaff.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Staff deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
