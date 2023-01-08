import {useState} from "react";
import {
  FaClipboard,
  FaComments,
  FaBookmark,
  FaBan,
  FaTrash,
  FaHome,
  FaCube,
  FaLayerGroup,
  FaCheck,
  FaCheckSquare,
  FaStopwatch,
  FaBell,
  FaCog,
  FaMoon,
} from "react-icons/fa";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import ChatModal from "./ChatModal";

const Sidebar = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
    <div className="sidebar">
      <div className="nav">
        <NavLink
          className={({ isActive }) => (isActive ? "nav-active" : "navlink")}
          to="/"
        >
          <FaComments />
          <h5>Messenger</h5>
        </NavLink>
        <div className="badge"></div>
        <NavLink
          className={({ isActive }) => (isActive ? "nav-active" : "navlink")}
          to="/pinned"
        >
          <FaClipboard />
          <h5> Pinned</h5>
        </NavLink>
        <div className="badge"></div>
        <NavLink
          className={({ isActive }) => (isActive ? "nav-active" : "navlink")}
          to="/archived"
        >
          <FaBookmark />
          <h5>Archived</h5>
        </NavLink>
        <div className="badge"></div>
        <NavLink
          className={({ isActive }) => (isActive ? "nav-active" : "navlink")}
          to="/blocked"
        >
          <FaBan />
          <h5>Blocked</h5>
        </NavLink>
        <div className="badge"></div>
        <NavLink
          className={({ isActive }) => (isActive ? "nav-active" : "navlink")}
          to="/trash"
        >
          <FaTrash />
          <h5>Trash</h5>
        </NavLink>
        <div className="badge"></div>
      </div>
      <div className="sb-btn">
        <Button btnText="Chat" onClick={() => openModal()} />
      </div>
      <ChatModal 
      openModal={modalIsOpen}
      closeModal={closeModal}
      >
        <p>Chat MOdal Here</p>
      </ChatModal>
    </div> 
  );
};

export default Sidebar;


/**<div className="container">
      <ul className="link-items">
        <li className="link-item top">
          <a href="#" className="link">
            <img src="https://i.pinimg.com/280x280_RS/44/6f/56/446f561140146f173af22fd9e558bbdd.jpg" alt="" />
            <span>
              <h4>Raja Junaid</h4>
            </span>
          </a>
        </li>
        <li className="link-item active">
          <a href="#" className="link">
            <FaHome name="home-outline"/>
            <span>Home</span>
          </a>
        </li>
        <li className="link-item">
          <a href="#" className="link">
            <FaCube name="cube-outline"/>
            <span>dashboard</span>
          </a>
        </li>
        <li className="link-item">
          <a href="#" className="link"
            >
              <FaLayerGroup name="layers-outline"/>
            <FaCube/>
            <span>projects</span>
          </a>
        </li>
        <li className="link-item">
          <a href="#" className="link">
            <FaCheckSquare name="checkbox-outline"/>
            <span>tasks</span>
          </a>
        </li>
        <li className="link-item">
          <a href="#" className="link">
            <FaStopwatch name="stopwatch-outline"/>
            <span>schedule</span>
          </a>
        </li>
        <li className="link-item">
          <a href="#" className="link">
            <FaBell className="noti-icon" name="notifications-outline" />
            <span>activity</span>
            <span className="num-noti">8</span>
          </a>
        </li>
        <li className="link-item">
          <a href="#" className="link">
            <FaCog name="cog-outline"/>
            <span>settings</span>
          </a>
        </li>

        <li className="link-item dark-mode">
          <a href="#" className="link">
            <FaMoon name="moon-outline"/>
            <span>dark mode</span>
          </a>
        </li>
      </ul>
    </div> */

    /**<div className="sidebar">
      <div className="nav">
        <NavLink
          className={({ isActive }) => (isActive ? "nav-active" : "navlink")}
          to="/"
        >
          <FaComments />
          <h5>Messenger</h5>
        </NavLink>
        <div className="badge"></div>
        <NavLink
          className={({ isActive }) => (isActive ? "nav-active" : "navlink")}
          to="/pinned"
        >
          <FaClipboard />
          <h5> Pinned</h5>
        </NavLink>
        <div className="badge"></div>
        <NavLink
          className={({ isActive }) => (isActive ? "nav-active" : "navlink")}
          to="/archived"
        >
          <FaBookmark />
          <h5>Archived</h5>
        </NavLink>
        <div className="badge"></div>
        <NavLink
          className={({ isActive }) => (isActive ? "nav-active" : "navlink")}
          to="/blocked"
        >
          <FaBan />
          <h5>Blocked</h5>
        </NavLink>
        <div className="badge"></div>
        <NavLink
          className={({ isActive }) => (isActive ? "nav-active" : "navlink")}
          to="/trash"
        >
          <FaTrash />
          <h5>Trash</h5>
        </NavLink>
        <div className="badge"></div>
      </div>
      <div className="sb-btn">
        <Button btnText="Chat" onClick={() => openModal()} />
      </div>
      <ChatModal 
      openModal={modalIsOpen}
      closeModal={closeModal}
      >
        <p>Chat MOdal Here</p>
      </ChatModal>
    </div> */
