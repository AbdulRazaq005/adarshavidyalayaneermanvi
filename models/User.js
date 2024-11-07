import mongoose from "mongoose";

var userSchema = new mongoose.Schema({
  name: { type: String },
  id: { type: Number, unique: true, required: true },
  dob: { type: Date },
  password: { type: String },
  email: { type: String },
  address: { type: String },
  phone: { type: String },
  profileURL: { type: String },
  role: { type: String, required: true },
  subject: { type: String },
});

const User = mongoose.model("user", userSchema);
export default User;
