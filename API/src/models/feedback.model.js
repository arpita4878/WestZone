import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  // Registered user reference
  user: { type: Number, ref: "User", required: true },


  // Snapshot of user info
  userInfo: {
    name: String,
    surname: String,
    email: String,
    phone: String,
    registeredDate: Date // user registration date
  },

  // Link to order (optional)
  order: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },

  // Link to specific item in order (optional)
  orderItemId: { type: mongoose.Schema.Types.ObjectId },

  // Product reference (required)
  suggestion: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },

  // Feedback status
  status: { 
    type: String, 
    enum: ["pending", "accepted", "dispatched", "delivered", "cancelled"], 
    default: "pending" 
  }
});

// Export the model
export default mongoose.model("Feedback", feedbackSchema);
