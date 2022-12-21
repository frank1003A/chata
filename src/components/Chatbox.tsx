import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import {
  FaCalendar,
  FaPhone,
  FaPlane,
  FaDochub,
  FaImage,
  FaLink,
  FaSmile,
} from "react-icons/fa";
import Img from "../assets/me.jpg";
import Button from "./Button";
import Chat from "./Chat";
import ChatModal from "./ChatModal";
import Input from "./Input";

interface SimChat {
  type: "incoming" | "outgoing";
  content: string;
}

const Chatbox = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [sendMessage, setSendMessage] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  // simulating chat
  const initChat: SimChat[] = [
    { type: "incoming", content: "How does it sound for you?" },
    { type: "outgoing", content: "It sounds great!!" },
    { type: "incoming", content: "Great how?" },
    { type: "outgoing", content: "😶😶😶😶😶" },
  ];

  const [chats, setChats] = useState<SimChat[]>(initChat);
  const [chat, setChat] = useState<SimChat>();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    type: "incoming" | "outgoing"
  ) => {
    const { value } = e.currentTarget;
    let cht: SimChat = { content: value, type: type };
    setChat(cht);
  };

  const sendChat = () => {
    let chts: SimChat[] = chats;
    let ct: SimChat = {
      content: chat?.content as string,
      type: chat?.type as "incoming" | "outgoing",
    };
    chts.push(ct);
    //setChats(chts);
  };

  useEffect(() => {
    if (sendMessage) {
      let chts: SimChat[] = chats;
      setChats(chts);
    }
  }, [chat]);

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
          <Button btnText="Chat" onClick={() => setSendMessage(true)} />
        </div>
      </div>
      <div className="chatbox">
        <div>
          {chats.map((c) => {
            return <Chat content={c.content} variant={c.type} />;
          })}
        </div>
      </div>
      <div className="chat_input">
        <div className="content-input">
          <div className="no_badge">
            <img src={Img} alt="img" />
          </div>
          <input
            type="text"
            placeholder="What's happening?"
            onChange={(e) => handleChange(e, "outgoing")}
          />
        </div>
        <div className="divider" />
        <div className="btn-ctrls">
          <span>
            <FaDochub />
          </span>
          <span>
            <FaImage />
          </span>
          <span>
            <FaLink />
          </span>
          <Button
            btnText="Send"
            onClick={() => {
              sendChat();
              closeModal();
            }}
          />
        </div>
      </div>
      <ChatModal openModal={modalIsOpen} closeModal={closeModal}>
        <input
          type="text"
          onChange={(e) => handleChange(e, "outgoing")}
          placeholder="content"
        />
        <Button
          btnText="Send"
          onClick={() => {
            sendChat();
            closeModal();
          }}
        />
      </ChatModal>
    </div>
  );
};

export default Chatbox;

/** <div className="chat-input">
          <input type="text"/>
          <div className="controls">
          <span><FaDochub/></span>
          <span><FaImage/></span>
          <span><FaLink/></span>
          <span id="send-btn"><FaPlane/></span>
          </div>
        </div> */
