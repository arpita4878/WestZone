import ProductFeedback from "../models/productFeedback.model.js";

// ➤ Add new feedback
export const createFeedback = async (req, res) => {
  try {
    const feedback = new ProductFeedback(req.body);
    await feedback.save();
    res.status(201).json({ success: true, data: feedback });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// ➤ Get all feedbacks
export const getAllFeedbacks = async (req, res) => {
  try {
    const feedbacks = await ProductFeedback.find().sort({ createdAt: -1 });
    res.json({ success: true, data: feedbacks });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ➤ Get single feedback by ID
export const getFeedbackById = async (req, res) => {
  try {
    const feedback = await ProductFeedback.findById(req.params.id);
    if (!feedback) return res.status(404).json({ success: false, message: "Feedback not found" });
    res.json({ success: true, data: feedback });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ➤ Update feedback (status/reviewedBy etc.)
export const updateFeedback = async (req, res) => {
  try {
    const feedback = await ProductFeedback.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, data: feedback });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// ➤ Delete feedback
export const deleteFeedback = async (req, res) => {
  try {
    await ProductFeedback.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Feedback deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
