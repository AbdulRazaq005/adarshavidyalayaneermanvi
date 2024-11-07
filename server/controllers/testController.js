import asyncHandler from "express-async-handler";
import Test from "../models/Test.js";

// GET "/api/tests"
export const getTests = asyncHandler(async (_, res) => {
  let data = await Test.find({});
  res.status(200).send(data);
});

// POST "/api/test"
export const createTest = asyncHandler(async (req, res) => {
  const test = new Test(req.body);
  await test.save();
  res.status(200).send("Test Inserted");
});

// PUT "/api/test/:id"
export const updateTest = asyncHandler(async (req, res) => {
  let test = await Test.findByIdAndUpdate(req.params.id, req.body);
  if (test) {
    res.status(200).send(`Test Updated:${req.params.id}`);
  } else {
    res.status(400).send("Test Not Found");
  }
});

// DELETE "/api/test/:id"
export const deleteTest = asyncHandler(async (req, res) => {
  const result = await Test.deleteOne({ _id: req.params.id });
  let isDeleted = result.deletedCount == 1;
  if (isDeleted) {
    res.status(200).send(`Test Deleted:${req.params.id}`);
  } else {
    res.status(400).send("Test Not Found");
  }
});
