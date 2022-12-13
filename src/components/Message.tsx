import {} from "react";
import Img from "../assets/me.jpg";

const MessageBar = () => {
  return (
    <div className="message">
      <span>
        <div className="photo_badge">
          <div className="badge">
            <img src={Img} alt="img" />
          </div>
        </div>
        <div className="main">
          <label className="text">Bryan Chidi Ezene</label>
          <label className="number">08043565432</label>
        </div>
        <label>12:30</label>
      </span>
    </div>
  );
};

export default MessageBar;
