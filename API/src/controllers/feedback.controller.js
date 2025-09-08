import Feedback from "../models/feedback.model.js";

// Add new feedback
export const addFeedback = async (req, res) => {
    try {
        const { name, surname, email, phone, suggestion, state } = req.body;

        const feedback = new Feedback({
            name,
            surname,
            email,
            phone,
            suggestion,
            state
        });

        const savedFeedback = await feedback.save();
        res.status(201).json({ message: "Feedback submitted successfully", data: savedFeedback });
    } catch (error) {
        res.status(500).json({ message: "Error submitting feedback", error });
    }
};

// Get all feedbacks (optional)
export const getFeedbacks = async (req, res) => {
    try {
        const feedbacks = await Feedback.find().sort({ date: -1 });
        res.status(200).json({ data: feedbacks });
    } catch (error) {
        res.status(500).json({ message: "Error fetching feedbacks", error });
    }
};
