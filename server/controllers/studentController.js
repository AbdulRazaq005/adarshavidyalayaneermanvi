import asyncHandler from "express-async-handler";
import User from "../models/User.js";
import Gallery from "../models/Gallery.js";

// GET "/api/students"
export const getStudents = asyncHandler(async (_, res) => {
  var data = {};
  data.members = await User.find({});
  data.gallery = await Gallery.find({});
  res.status(200).send(data);
});
