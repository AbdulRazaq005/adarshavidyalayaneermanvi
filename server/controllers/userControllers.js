import asyncHandler from "express-async-handler";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// POST "/api/login"
export const loginUser = asyncHandler(async (req, res) => {
  let data = await User.findOne({ id: req.body.id });
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

// POST "/api/logout"
export const logoutUser = asyncHandler(async (req, res) => {
  res.clearCookie("token");
  res.status(200).send("Logout Successful!!!");
});

// GET "/api/login-status"
export const getLoginStatus = asyncHandler(async (req, res) => {
  if (req.cookies.token) {
    jwt.verify(req.cookies.token, process.env.JWT_KEY, function (err, decoded) {
      if (err) {
        res.status(404).send({ loggedIn: false });
      } else {
        res.status(200).send({
          loggedIn: true,
          id: decoded.id,
          role: decoded.role,
          name: decoded.name,
          subject: decoded.subject,
          profileURL: decoded.profileURL,
        });
      }
    });
  } else res.status(404).send({ loggedIn: false });
});

// GET "/api/enter"
export const insertUser = asyncHandler(async (req, res) => {
  const userData = new User(req.body);
  await userData.save();
  res.status(200).send({ success: true });
});

// POST "/api/register"
export const registerInsertedUser = asyncHandler(async (req, res) => {
  bcrypt.hash(req.body.password, 5, async (_, hash) => {
    var data = { ...req.body, password: hash, profileURL: req.file.path };
    const user = await User.findOneAndUpdate({ id: req.body.id }, data);

    if (user) {
      res.status(200).send("Registration Successful");
    } else {
      res.status(400).send(`User not found with id : ${req.body.id}`);
    }
  });
});
