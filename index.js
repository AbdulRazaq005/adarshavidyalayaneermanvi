import { createRequire } from "module";
const require = createRequire(import.meta.url);
import express from "express";
import dotenv from "dotenv";
import multer from "multer";
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
import connectDB from "./server/config/mongodb.js";
import cookieParser from "cookie-parser";
import path from "path";
import { errorHandler, notFound } from "./server/config/errorMiddleware.js";
import {
  getLoginStatus,
  insertUser,
  loginUser,
  logoutUser,
  registerInsertedUser,
} from "./server/controllers/userControllers.js";
import { getStudents } from "./server/controllers/studentController.js";
import {
  createTest,
  deleteTest,
  getTests,
  updateTest,
} from "./server/controllers/testController.js";
import {
  createFeedback,
  getFeedbacks,
} from "./server/controllers/feedbackController.js";

const app = express();
const __dirname = path.resolve();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));
app.use(cookieParser());
dotenv.config();
connectDB();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "PROFILES",
  },
});
const upload = multer({ storage: storage });

// Auth Routes
app.post("/api/login", loginUser);
app.get("/api/login-status", getLoginStatus);
app.post("/api/enter", insertUser);
app.post("/api/register", upload.single("profile"), registerInsertedUser);
app.post("/api/logout", logoutUser);

// Student Routes
app.get("/api/students", getStudents);

// Test Routes
app.get("/api/tests", getTests);
app.post("/api/test", createTest);
app.delete("/api/test/:id", deleteTest);
app.put("/api/test/:id", updateTest);

// Feedback Routes
app.get("/api/feedbacks", getFeedbacks);
app.post("/api/feedbacks", createFeedback);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/build/index.html");
  });
  app.get("*", (req, res) => {
    res.redirect("/");
  });
}

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend Server is up on PORT ${PORT}...`));
