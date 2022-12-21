import {useState} from "react";
import { FaBeer, FaChartBar, FaUser, FaComment, FaKey, FaWrench, FaPhone, FaBell } from "react-icons/fa";
import Button from "./Button";
import { NavLink } from "react-router-dom";

const BottomNav = () => {
    //className={({ isActive }) => (isActive ? "nav-active" : "navlink")}

    return (
    <div className="bottom-bar">
      <div className="nav">
        <NavLink
          to="/"
        >
          <FaBeer />
        </NavLink>
        <div className="badge"></div>
        <NavLink
          to="/pinned"
        >
          <FaChartBar />
        </NavLink>
        <div className="badge"></div>
        <NavLink
          to="/archived"
        >
          <FaUser />
        </NavLink>
        <div className="badge"></div>
        <NavLink
          to="/blocked"
        >
          <FaComment />
        </NavLink>
        <div className="badge"></div>
        <NavLink
          to="/trash"
        >
          <FaKey />
        </NavLink>
        <div className="badge"></div>
      </div>
    </div>
  )
}

export default BottomNav