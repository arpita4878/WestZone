import ServiceFeedback from "../models/serviceFeedback.model.js";

// Add new service feedback
export const addServiceFeedback = async (req, res) => {
  try {
    const feedback = new ServiceFeedback(req.body);
    const savedFeedback = await feedback.save();

    // Populate branch aur order details
    const populatedFeedback = await savedFeedback.populate([
  { path: "branch", select: "name address" },
  { path: "orderId", select: "orderNumber totalAmount" }
]);


    res.status(201).json({ success: true, data: populatedFeedback });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all service feedbacks
export const getAllServiceFeedbacks = async (req, res) => {
  try {
    const feedbacks = await ServiceFeedback.find()
      .populate("branch", "name address")
      .populate("orderId", "orderNumber totalAmount");

    res.status(200).json({ success: true, data: feedbacks });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get single service feedback by ID
export const getServiceFeedbackById = async (req, res) => {
  try {
    const feedback = await ServiceFeedback.findById(req.params.id)
      .populate("branch", "name address")
      .populate("orderId", "orderNumber totalAmount");

    if (!feedback) {
      return res.status(404).json({ success: false, message: "Feedback not found" });
    }

    res.status(200).json({ success: true, data: feedback });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
