import mongoose from "mongoose";

const connectDB = async () => {
  try {
    var conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    // console.log(`MognoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;

var userSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  id: {
    type: Number,
    unique: true,
    required: true,
  },
  dob: {
    type: Date,
    // required: true,
  },
  password: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    // required: true,
  },
  address: {
    type: String,
    // required: true,
  },
  phone: {
    type: String,
    // required: true,
  },
  profileURL: {
    type: String,
    // required: true,
  },
  role: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
  },
});
const User = mongoose.model("user", userSchema);
export { User };

var testSchema = new mongoose.Schema({
  testName: { type: String, sparse: true },
  date: String,
  subject: String,
  maxMarks: Number,
  marks: Array,
});
const Test = mongoose.model("test", testSchema);
export { Test };

var feedbackSchema = new mongoose.Schema({
  name: String,
  date: String,
  subject: String,
  id: Number,
  feedback: String,
});
const Feedback = mongoose.model("feedback", feedbackSchema);
export { Feedback };

var gallerySchema = new mongoose.Schema({
  src: String,
});
const Gallery = mongoose.model("gallery", gallerySchema);
export { Gallery };

// const mainmenu = new Gallery({ src: "testing" });
// mainmenu.save((err, data) => {
//   if (err) {
//     console.log("Error inserting Menu...");
//   } else {
//     console.log("Menu inserted : ", data);
//   }
// });
