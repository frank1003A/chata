import React from "react";
import { FaBeer, FaChartBar, FaUser, FaComment, FaKey, FaWrench, FaPhone, FaBell } from "react-icons/fa";
import Img from "../assets/me.jpg";
import Switch from "./Switch";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">CHATA</span>

      <nav>
        <span>
          <FaBeer />
          Resume
        </span>
        <span>
          <FaUser />
          Contact
        </span>
        <span>
          <FaChartBar />
          Statistic
        </span>
        <span>
          <FaComment />
          Chats
        </span>
        <span>
          <FaWrench/>
          Settings
        </span>
      </nav>

      <nav>
        <Switch/>
        <FaPhone/>
        <FaBell/>
      </nav>
      
      <div className="user">
        <div>
        <label className="bot-mess">Good Evening, John</label>
        <label className="no">+1 243 554 423</label>
        </div>
        <div className="no_badge">
        <img src={Img} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

/**
 * npm install @fortawesome/fontawesome-svg-core @fortawesome/free-regular-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome babel-plugin-macros */
