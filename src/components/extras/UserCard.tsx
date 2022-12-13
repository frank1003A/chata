import { useState } from "react";
import { FaPhone, FaVideo, FaVolumeUp, FaBriefcase } from "react-icons/fa";
import Accordion from "../Accordion";
import MessageBar from "../Message";
import Modal from "../Modal";
import Img from "../../assets/me.jpg"

interface ModalProps {
    phone?: boolean;
    video?: boolean;
    sound?: boolean;
    briefcase?: boolean;

}
const UserCard = () => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [modalOpen, setCurrentOpen] =  useState<ModalProps>({
    phone: false, 
    video: false,
    sound: false, 
    briefcase: false
  })

  function openModal() {
    setCurrentOpen({})
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="user_card">
      <div className="pos">
        <div className="user">
          <div className="no_badge">
            <img src={Img} alt="image" />
          </div>
          <span className="user-dets">
            <label className="text">Bryan Chidi Ezene</label>
            <label className="no">+2348043565432</label>
          </span>
        </div>
        <div className="controls">
          <span onClick={() =>  setCurrentOpen({phone: true})}>
            <FaPhone />
          </span>
          <span onClick={() => setCurrentOpen({video: true})}>
            <FaVideo />
          </span>
          <span onClick={() => setCurrentOpen({sound: true})}>
            <FaVolumeUp />
          </span>
          <span onClick={() => setCurrentOpen({briefcase: true})}>
            <FaBriefcase />
          </span>
        </div>
        <div className="bio">
          <label>Hello Everybody! 👋</label>
          <label>Our company is looking for:</label>
        </div>
      </div>
      <Modal openModal={modalOpen.phone!} closeModal={() => setCurrentOpen({phone: false})}>
        <span
          style={{
            fontSize: 200,
          }}
        >
          <FaPhone />
        </span>
      </Modal>
      <Modal openModal={modalOpen.video!} closeModal={() => setCurrentOpen({video: false})}>
        <span
          style={{
            fontSize: 200,
          }}
        >
          <FaVideo />
        </span>
      </Modal>
      <Modal openModal={modalOpen.sound!} closeModal={() => setCurrentOpen({sound: false})}>
        <span
          style={{
            fontSize: 200,
          }}
        >
          <FaVolumeUp />
        </span>
      </Modal>
      <Modal openModal={modalOpen.briefcase!} closeModal={() => setCurrentOpen({briefcase: false})}>
        <span
          style={{
            fontSize: 200,
          }}
        >
          <FaBriefcase />
        </span>
      </Modal>
    </div>
  );
};

export default UserCard;
