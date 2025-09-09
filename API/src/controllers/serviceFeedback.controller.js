import ServiceFeedback from "../models/serviceFeedback.model.js";

// Add feedback
export const addServiceFeedback = async (req, res) => {
  try {
    const feedback = new ServiceFeedback(req.body);
    await feedback.save();
    res.status(201).json({ success: true, message: "Feedback submitted successfully", data: feedback });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all feedbacks
export const getServiceFeedbacks = async (req, res) => {
  try {
    const feedbacks = await ServiceFeedback.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: feedbacks });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get feedback by ID
export const getServiceFeedbackById = async (req, res) => {
  try {
    const feedback = await ServiceFeedback.findById(req.params.id);
    if (!feedback) return res.status(404).json({ success: false, message: "Feedback not found" });
    res.status(200).json({ success: true, data: feedback });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update feedback status or details
export const updateServiceFeedback = async (req, res) => {
  try {
    const updatedFeedback = await ServiceFeedback.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({ success: true, message: "Feedback updated", data: updatedFeedback });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete feedback
export const deleteServiceFeedback = async (req, res) => {
  try {
    await ServiceFeedback.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "Feedback deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
