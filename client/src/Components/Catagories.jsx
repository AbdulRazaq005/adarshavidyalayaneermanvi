import React from "react";
import { GiBookmarklet } from "react-icons/gi";
import { ImHome } from "react-icons/im";
import { ImStatsBars } from "react-icons/im";
import { FaCalendarCheck } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Catagories() {
  return (
    <div id="catagories">
      <NavLink className="btn catagory-item" to="/">
        <div className="content-center flex-col">
          <ImHome size={40} className="myReact-icons" />
          <samp>HomePage</samp>
        </div>
      </NavLink>
      <NavLink className="btn catagory-item" to="/courses">
        <div className="content-center flex-col">
          <GiBookmarklet size={40} className="myReact-icons" />
          <samp>Courses</samp>
        </div>
      </NavLink>
      <NavLink className="btn catagory-item" to="/results">
        <div className="content-center flex-col">
          <ImStatsBars size={40} className="myReact-icons" />
          <samp>Results</samp>
        </div>
      </NavLink>
      <NavLink className="btn catagory-item" to="/feedback">
        <div className="content-center flex-col">
          <FaCalendarCheck size={40} className="myReact-icons" />
          <samp>Feedback</samp>
        </div>
      </NavLink>
    </div>
  );
}
