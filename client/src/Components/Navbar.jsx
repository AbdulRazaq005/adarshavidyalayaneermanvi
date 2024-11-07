/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import axios from "axios";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar({ setLoginStatus, loginStatus, setUser }) {
  function logout() {
    axios
      .post("/api/logout")
      .then((res) => {
        setUser({
          name: "Guest User",
          id: "profile",
          role: "Visitor",
          profileURL: "./images/profile.jpeg",
        });
        setLoginStatus(false);
      })
      .catch((err) => {
        alert("Logout Unsuccessful!");
      });
  }

  return (
    <nav id="nav" className="navbar navbar-expand-sm navbar-dark bg-dark">
      <NavLink className="navbar-brand ms-3 flex-row align-items-center" to="/">
        <img
          src="./images/Logo.png"
          className="ms-3"
          style={{ height: "4rem", backgroundColor: "azure" }}
        />
        <div className="flex-col ms-3">
          <h3 className="my-0">Adarsh Vidyalaya</h3>
          <span id="neermanvi">Neermanvi</span>
        </div>
      </NavLink>
      <button
        className="navbar-toggler navbar-toggler-right me-3"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navmenu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navmenu">
        <ul className="navbar-nav mr-auto mt-2 mt-md-0 ms-auto me-4 content-center">
          <li className="nav-item ms-1">
            {!loginStatus ? (
              <NavLink
                className="nav-link btn btn-sm btn-light text-dark px-2 pt-2 pb-0"
                to="/login"
              >
                <h6>Login</h6>
              </NavLink>
            ) : (
              <a
                className="nav-link btn btn-sm btn-light text-dark px-2 pt-2 pb-0"
                onClick={logout}
                style={{ cursor: "pointer" }}
              >
                <h6>Logout</h6>
              </a>
            )}
          </li>
          <li className="nav-item ms-1">
            <NavLink className="nav-link" to="/register">
              Register
            </NavLink>
          </li>
          <li className="nav-item ms-1">
            <NavLink className="nav-link" to="/gallery">
              Gallery
            </NavLink>
          </li>
          <li className="nav-item ms-1">
            <NavLink className="nav-link" to="/students">
              Students
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
