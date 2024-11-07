import { createRequire } from "module";
const require = createRequire(import.meta.url);
import express from "express";
import dotenv from "dotenv";
import multer from "multer";
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
import connectDB from "./config/mongodb.js";
import User from "./models/User.js";
import Test from "./models/Test.js";
import Feedback from "./models/Feedback.js";
import Gallery from "./models/Gallery.js";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import path from "path";
import bcrypt from "bcrypt";

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

app.get("/api/loginstatus", (req, res) => {
  if (req.cookies.token) {
    jwt.verify(req.cookies.token, process.env.JWT_KEY, function (err, decoded) {
      if (err) {
        res.status(404).send({ logedIn: false });
      } else {
        res.status(200).send({
          logedIn: true,
          id: decoded.id,
          role: decoded.role,
          name: decoded.name,
          subject: decoded.subject,
          profileURL: decoded.profileURL,
        });
      }
    });
  } else res.status(404).send({ logedIn: false });
});

app.get("/api/students", (req, res) => {
  var data = {};
  User.find({}, (err, data1) => {
    data.members = data1;
    // res.status(200).send(data);
    Gallery.find({}, (err, data2) => {
      data.gallery = data2;
      res.status(200).send(data);
    });
  });
});

//......Entry Profile......
app.post("/api/enter", (req, res) => {
  const userData = new User(req.body);
  userData.save((err, data) => {
    if (err) {
      //   console.log(err);
      res.status(400).send();
    } else {
      //   console.log("Inserting Successful.......", req.body);
      res.status(200).send();
    }
  });
});

//......Update Profile (Register)......
app.post("/api/register", upload.single("profile"), async (req, res) => {
  bcrypt.hash(req.body.password, 5, (err, hash) => {
    var Body = req.body;
    Body.password = hash;
    Body.profileURL = req.file.path;
    // console.log("path req : ", req.file.path);
    return User.findOneAndUpdate({ id: req.body.id }, Body, (err, data) => {
      if (data) {
        if (data.nModified === 0) {
          res.status(400).send(`User not found with id : ${req.body.id}`);
        } else {
          res.status(200).send("Registration Successful");
        }
      } else {
        res.status(400).send(`User not found with id : ${req.body.id}`);
      }
    });
  });
});

app.post("/api/login", (req, res) => {
  User.findOne({ id: req.body.id }, (err, data) => {
    // console.log("data:", data);
    // console.log("body:", req.body);
    if (data) {
      bcrypt.compare(req.body.password, data.password, function (err, result) {
        if (err || !data) {
          res.status(404).send("User Id not Found!");
        } else if (result !== true) {
          res.status(404).send("Password Incorrect!");
        } else {
          var token = jwt.sign(
            {
              id: data.id,
              name: data.name,
              role: data.role,
              subject: data.subject,
              profileURL: data.profileURL,
            },
            process.env.JWT_KEY,
            { expiresIn: "15d" }
          );
          //   console.log(token);
          res.status(200).cookie("token", `${token}`, { httpOnly: true }).send({
            id: data.id,
            name: data.name,
            role: data.role,
            subject: data.subject,
            profileURL: data.profileURL,
          });
        }
      });
    } else {
      res.status(401).send("Invalid User");
    }
  });
});

app.get("/api/logout", (req, res) => {
  res.clearCookie("token");
  res.status(200).send("Logout Successful!!!");
});

app.get("/api/tests", (req, res) => {
  Test.find({}, function (err, tests) {
    if (err) {
      //   console.log(err);
      res.status(400).send("Tests Not Found");
    } else {
      //   console.log("t", t++);
      res.status(200).send(tests);
    }
  });
});

app.post("/api/test", (req, res) => {
  const test = new Test(req.body);
  test.save((err, data) => {
    if (err) {
      //   console.log(err);
      res.status(400).send("Test Not Inserted");
    } else {
      //   console.log("Test Inserted");
      res.status(200).send("Test Inserted");
    }
  });
});

app.delete("/api/test/:id", (req, res) => {
  Test.findByIdAndRemove(req.params.id, function (err, test) {
    // console.log(req.params.id);
    test.remove(function (err) {
      if (err) {
        // console.log(err);
        res.status(400).send("Test Not Deleted");
      } else {
        res.status(200).send(`Test Deleted:${req.params.id}`);
      }
    });
  });
});

app.put("/api/test/:id", (req, res) => {
  Test.findByIdAndUpdate(req.params.id, req.body, function (err, test) {
    // console.log("Update Id:", req.params.id);
    test.save(function (err) {
      if (err) {
        // console.log(err);
        res.status(400).send("Test Not Deleted");
      } else {
        res.status(200).send(`Test Deleted:${req.params.id}`);
      }
    });
  });
});

app.post("/api/feedback", (req, res) => {
  const feedbackData = new Feedback(req.body);
  feedbackData.save((err, data) => {
    if (err) {
      //   console.log(err);
      res.status(400).send("Feedback not Sent! Please try again Later.");
    } else {
      //   console.log("Inserting Successful.......", req.body);
      res.status(200).send("Feedback Sent Successfully");
    }
  });
});

app.get("/api/feedbacks", (req, res) => {
  Feedback.find({}, function (err, feedbacks) {
    if (err) {
      //   console.log(err);
      res.status(400).send("Feedbacks Not Found");
    } else {
      //   console.log("f", f++);
      res.status(200).send(feedbacks);
    }
  });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/build/index.html");
  });
  app.get("*", (req, res) => {
    res.redirect("/");
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend Server is up on PORT ${PORT}...`));
