import React from 'react'
import {FaClipboard, FaComments, FaBookmark, FaBan, FaTrash} from "react-icons/fa";
import Button from './Button';
import { NavLink } from "react-router-dom"

const Sidebar = () => {

  const isFetched = () => {}
  return (
    <div className="sidebar">
     <div className="nav">
     <nav>
     <NavLink to="/">
        <span>
        <FaComments/>
        Conversations
        </span>
        </NavLink>
        <div className="badge"></div>
      </nav>
      <nav>
      <NavLink to="/pinned">
      <span>
        <FaClipboard/>
        Pinned
        </span>
      </NavLink>
        <div className="badge"></div>
      </nav>
      <nav>
        <NavLink to="/archived">
        <span>
        <FaBookmark/>
        Archived
        </span>
        </NavLink>
        <div className="badge"></div>
      </nav>
      <nav>
        <NavLink to="/blocked">
        <span>
        <FaBan/>
        Blocked
        </span>
        </NavLink>
        <div className="badge"></div>
      </nav>
      <nav>
        <NavLink to="/trash">
        <span>
        <FaTrash/>
        Trash
        </span>
        </NavLink>
        <div className="badge"></div>
      </nav>
     </div>
     <div className="sb-btn">
      <Button btnText="Chat"/>
     </div>
    </div>
  )
}

export default Sidebar