import {useState} from "react";
import {
  FaClipboard,
  FaComments,
  FaBookmark,
  FaBan,
  FaTrash,
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
