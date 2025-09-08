import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    suggestion: { type: String, required: true },
    state: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

export default mongoose.model("Feedback", feedbackSchema);
