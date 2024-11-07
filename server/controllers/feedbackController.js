import asyncHandler from "express-async-handler";
import Feedback from "../models/Feedback.js";

// GET "/api/feedbacks"
export const getFeedbacks = asyncHandler(async (_, res) => {
  let data = await Feedback.find({});
  res.status(200).send(data);
});

// POST "/api/feedbacks"
export const createFeedback = asyncHandler(async (req, res) => {
  const feedback = new Feedback(req.body);
  await feedback.save();
  res.status(200).send("Feedback Created");
});
