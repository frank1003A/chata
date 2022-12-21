import { useEffect, useState } from "react";
import { useNavigate, useRoutes, useLocation, useHref } from "react-router-dom";
import Img from "../assets/me.jpg";
import { useWindowResize } from "../hooks/useWindowResize";

const MessageBar = () => {
  let navigate = useNavigate();
  const routes = useLocation();
  const { width } = useWindowResize();

  // allow navigation to chatbox page only on mobile view
  const navigateOnSx = () => {
    if (width > 600 || width === 0) createChat();
    else navigate("/chatbox");
  };

  // mx chatbox functionality
  const createChat = () => {
    //ddgdgd
    alert("chat created");
  };

  useEffect(() => {
    if (routes.pathname.includes("/chatbox") && width === 0) {
      console.log(routes.pathname)
    }
  }, []);

  return (
    <div className="message" onClick={navigateOnSx}>
      <span>
        <div className="photo_badge">
          <div className="badge">
            <img src={Img} alt="profile_picture" />
          </div>
        </div>
        <div className="main">
          <label className="username_text">bryan ezene chidi</label>
          <label>+234 8022 4435</label>
        </div>
        <label className="time">12:30</label>
      </span>
    </div>
  );
};

export default MessageBar;

/** <div className="mess_cont">
          <label className="mess_snippet">Hey do you want to join this great group?</label>
          </div> */
