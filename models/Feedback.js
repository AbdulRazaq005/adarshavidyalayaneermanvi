import mongoose from "mongoose";

var feedbackSchema = new mongoose.Schema({
  name: String,
  date: String,
  subject: String,
  id: Number,
  feedback: String,
});

const Feedback = mongoose.model("feedback", feedbackSchema);
export default Feedback;
