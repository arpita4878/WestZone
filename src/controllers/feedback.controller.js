import Feedback from "../models/feedback.model.js";
import User from "../models/user.model.js"; 




export const createSuggestion = async (req, res) => {
  try {
    const { email, suggestion } = req.body;

    if (!email || !suggestion) {
      return res.status(400).json({ message: "Email and suggestion are required" });
    }

   
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found with this email" });
    }

    const feedback = new Feedback({
      name: user.name,
      surname: user.surname,
      email: user.email,
      phone: user.phone,
      suggestion
     
    });

    await feedback.save();

    res.status(201).json({ success: true, data: feedback });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};






// // Add new feedback
// export const addFeedback = async (req, res) => {
//     try {
//         const { name, surname, email, phone, suggestion, state } = req.body;

//         const feedback = new Feedback({
//             name,
//             surname,
//             email,
//             phone,
//             suggestion,
//             state
//         });

//         const savedFeedback = await feedback.save();
//         res.status(201).json({ message: "Feedback submitted successfully", data: savedFeedback });
//     } catch (error) {
//         res.status(500).json({ message: "Error submitting feedback", error });
//     }
// };

// Get all feedbacks (optional)
export const getFeedbacks = async (req, res) => {
    try {
        const feedbacks = await Feedback.find().sort({ date: -1 });
        res.status(200).json({ data: feedbacks });
    } catch (error) {
        res.status(500).json({ message: "Error fetching feedbacks", error });
    }
};
