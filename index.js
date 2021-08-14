import express from "express";
import dotenv from "dotenv";
import multer from "multer";
import connectDB, { User, Test, Feedback } from "./config/mongodb.js";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import path from "path";

const app = express();
const __dirname = path.resolve();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());
dotenv.config();
connectDB();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    return cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
});

// var h = 1;
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});
// var c = 1;
app.get("/api/loginstatus", (req, res) => {
  //   console.log("auth:", c++);
  if (req.cookies.token) {
    // console.log("got:", req.cookies.token);
    jwt.verify(req.cookies.token, process.env.JWT_KEY, function (err, decoded) {
      if (err) {
        // console.log(err);
        res.status(404).send({ logedIn: false });
      } else {
        // console.log(decoded);
        res.status(200).send({
          logedIn: true,
          id: decoded.id,
          role: decoded.role,
          name: decoded.name,
          subject: decoded.subject,
        });
      }
    });
  } else res.status(404).send({ logedIn: false });
});

app.get("/api/students", (req, res) => {
  User.find({}, (err, data) => {
    // console.log(data);
    res.status(200).send(data);
  });
});

//......Entry Profile......
app.post("/api/enter", (req, res) => {
  const userdata = new User(req.body);
  userdata.save((err, data) => {
    if (err) {
      //   console.log(err);
      res.status(400).send(400);
    } else {
      //   console.log("Inserting Successful.......", req.body);
      res.status(200).send();
    }
  });
});

//......Update Profile (Register)......
app.post("/api/register", upload.single("profile"), async (req, res) => {
  User.replaceOne({ id: req.body.id }, req.body, (err, data) => {
    if (data.nModified === 0) {
      res.status(400).send(`User not found with id : ${req.body.id}`);
    } else {
      res.status(200).send("Registration Successful");
    }
  });
});

app.post("/api/login", (req, res) => {
  User.findOne({ id: req.body.id }, (err, data) => {
    if (err || !data) {
      res.status(404).send("User Id not Found!");
    } else if (data.password != req.body.password) {
      res.status(404).send("Password Incorrect!");
    } else {
      var token = jwt.sign(
        {
          id: data.id,
          name: data.name,
          role: data.role,
          subject: data.subject,
        },
        process.env.JWT_KEY,
        { expiresIn: "15d" }
      );
      //   console.log(token);
      res.cookie("token", `${token}`, { httpOnly: true });
      res.status(200).send({
        id: data.id,
        name: data.name,
        role: data.role,
        subject: data.subject,
      });
    }
  });
});

app.get("/api/logout", (req, res) => {
  res.clearCookie("token");
  res.status(200).send("Logout Successful!!!");
});

// var t = 1;
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
  const feedbackdata = new Feedback(req.body);
  feedbackdata.save((err, data) => {
    if (err) {
      //   console.log(err);
      res.status(400).send("Feedback not Sent! Please try again Later.");
    } else {
      //   console.log("Inserting Successful.......", req.body);
      res.status(200).send("Feedback Sent Successfully");
    }
  });
});

// var f = 1;
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
  //   console.log("Production");
  app.get("*", (req, res) => {
    res.redirect("/");
  });
}

const PORT = process.env.PORT || 5000;
app.listen(
  PORT
  // console.log(`Backend Server is up on PORT ${PORT}...`)
);
