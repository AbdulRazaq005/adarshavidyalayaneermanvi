import Navbar from "./Components/Navbar";
import Catagories from "./Components/Catagories";
import Main from "./Components/Main";
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";
import React, { useState, useEffect } from "react";

function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  const [students, setStudents] = useState([]);
  const [AllUsers, setAllUsers] = useState([]);
  const [gallery, setGallery] = useState([{ src: "" }]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [user, setUser] = useState({
    name: "Guest User",
    id: "profile",
    role: "Visitor",
    subject: "",
    profileURL: "./images/profile.jpeg",
  });
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    // console.log("auth:", auth);
    if (!auth) {
      axios
        .get("/api/login-status")
        .then((response) => {
          setUser({
            name: response.data.name,
            id: response.data.id,
            role: response.data.role,
            subject: response.data.subject,
            profileURL: response.data.profileURL,
          });
          console.log("userGot:", user, response.data);
          setLoginStatus(true);
          //   console.log("UseEffect:Logged In!!!");
        })
        .catch((err) => {
          //   console.log("auth:", auth);
        });

      axios
        .get("api/students")
        .then((response) => {
          setAllUsers(response.data.members);
          var tempStudents;
          tempStudents = response.data.members.filter(
            (u) => u.role === "student"
          );
          setStudents(tempStudents);
          //   console.log("students:", response.data);
          setGallery(response.data.gallery);
          console.log("gallery:", response.data.gallery);
        })
        .catch((err) => {
          //   console.log("auth:", auth);
        });

      axios
        .get("api/feedbacks")
        .then((response) => {
          setFeedbacks(response.data);
          //   console.log("feedbacks:", response.data);
        })
        .catch((err) => {
          //   console.log("auth:", auth);
        });
    }
    setAuth(true);
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar
          setLoginStatus={setLoginStatus}
          loginStatus={loginStatus}
          setUser={setUser}
        />
        <div className="flex-row" id="app-container">
          <Catagories />
          <Main
            loginStatus={loginStatus}
            user={user}
            fun={setLoginStatus}
            setUser={setUser}
            students={students}
            AllUsers={AllUsers}
            feedbacks={feedbacks}
            gallery={gallery}
          />
        </div>
      </Router>
    </div>
  );
}

export default App;
