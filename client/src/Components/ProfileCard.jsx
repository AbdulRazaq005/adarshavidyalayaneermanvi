import React from "react";
import { NavLink } from "react-router-dom";

export default function ProfileCard({ user }) {
  var url = `./images/${user.id}.jpeg`;

  function titleCase(str) {
    return str
      .toLowerCase()
      .split(" ")
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  }

  return (
    <div id="profile">
      <div className="card-profile pt-2 pb-2">
        <img src={user.profileURL} alt="profile" className="card-image " />
        <h5 className="card-title card-btns pb-0">{titleCase(user.name)}</h5>
        <p className="card-text btn-sm card-btns py-0">
          {titleCase(user.role)}
        </p>
      </div>
      <div className="card-navs">
        <NavLink className="btn-dark" to="./profile">
          <div className="btn card-btns btn-dark">Profile</div>
        </NavLink>
        <NavLink className="btn-dark" to="./students">
          <div className="btn card-btns btn-dark">Students</div>
        </NavLink>
        <NavLink className="btn-dark" to="./feedback">
          <div className="btn card-btns btn-dark">Feedback</div>
        </NavLink>
      </div>
    </div>
  );
}
