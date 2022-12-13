import React from 'react'
import {FaCalendar, FaPhone, FaPlane, FaDochub, FaImage, FaLink, FaSmile} from "react-icons/fa";
import Img from "../assets/me.jpg";
import Button from './Button';

const Chat = () => {
  return (
    <div className="chat_bar">
      <div className="top">
        <div>
          <div className="no_badge">
          <img src={Img} alt="img" />
          </div>
          <label>Conversation with Bryan Chidi Ezene</label>
        </div>
        <div>
          <Button btnText='Archive' />
        </div>
      </div>
      <div className="chatbox">
        <div className="chat-input">
          <input type="text"/>
          <div className="controls">
          <span><FaDochub/></span>
          <span><FaImage/></span>
          <span><FaLink/></span>
          <span id="send-btn"><FaPlane/></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat