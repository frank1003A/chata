import { useState } from "react";
import {
  FaBeer,
  FaChartBar,
  FaUser,
  FaComment,
  FaKey,
} from "react-icons/fa";

const BottomNav = () => {
  //className={({ isActive }) => (isActive ? "nav-active" : "a")}
  //08134934568
  return (
    <div className="bottom-bar">
      <div className="nav">
        <a>
          <FaBeer />
          Resume
        </a>
        <div className="badge"></div>
        <a>
          <FaChartBar />
          Statistics
        </a>
        <div className="badge"></div>
        <a>
          <FaUser />
          Contacts
        </a>
        <div className="badge"></div>
        <a>
          <FaComment />
          Chats
        </a>
        <div className="badge"></div>
        <a>
          <FaKey />
          Settings
        </a>
        <div className="badge"></div>
      </div>
    </div>
  );
};

export default BottomNav;
