import Feedback from "../models/feedback.model.js";
import User from "../models/user.model.js";

// Create feedback / suggestion
export const createSuggestion = async (req, res) => {
  try {
    const { user, suggestion, order, orderItemId } = req.body;

    if (!user || !suggestion) {
      return res.status(400).json({ message: "User and suggestion are required" });
    }

    const userDoc = await User.findById(user);
    if (!userDoc) return res.status(404).json({ message: "User not found" });

    const feedback = new Feedback({
      user: userDoc._id,
      userInfo: {
        name: userDoc.name,
        surname: userDoc.surname,
        email: userDoc.email,
        phone: userDoc.phone,
        registeredDate: userDoc.date
      },
      order: order || null,
      orderItemId: orderItemId || null,
      suggestion
    });

    await feedback.save();
    res.status(201).json({ success: true, data: feedback });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};
