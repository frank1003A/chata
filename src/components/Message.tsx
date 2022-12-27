import { useEffect, useState } from "react";
import { useNavigate, useRoutes, useLocation, useHref } from "react-router-dom";
import Img from "../assets/me.jpg";
import { useWindowResize } from "../hooks/useWindowResize";

const MessageBar = () => {
  let navigate = useNavigate();
  const routes = useLocation();
  const [mount, setMount] = useState<boolean>(false)

  useEffect(() => {
    setMount(true)
  }, [])

  const { width, setWidth } = useWindowResize();

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [mount]);

  // allow navigation to chatbox page only on mobile view
  const navigateOnSx = () => {
    if (width > 600) createChat();
    else navigate("/chatbox");
  };

  // mx chatbox functionality
  const createChat = () => {
    alert("chat created");
  };

  return (
    <div className="message" onClick={navigateOnSx}>
      <span>
        <div className="photo_badge" onClick={() => alert("you clicked image")}>
          <div className="badge">
            <img src={Img} alt="profile_picture" />
          </div>
        </div>
        <div className="main">
          <label className="username_text">bryan ezene chidi</label>
          <label className="user_num">080224435</label>
          <label className="mess_snippet">Hey do you want to join this great group?</label>
        </div>
        <label className="time">NEW</label>
      </span>
    </div>
  );
};

export default MessageBar;

/** <div className="mess_cont">
          <label className="mess_snippet">Hey do you want to join this great group?</label>
          </div> */
