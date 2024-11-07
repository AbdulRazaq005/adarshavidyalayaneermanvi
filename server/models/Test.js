import mongoose from "mongoose";

var testSchema = new mongoose.Schema({
  testName: { type: String, sparse: true },
  date: String,
  subject: String,
  maxMarks: Number,
  marks: Array,
});

const Test = mongoose.model("test", testSchema);
export default Test;
