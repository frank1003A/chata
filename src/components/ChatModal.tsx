import { ReactNode, useState } from "react";
import ReactModal from "react-modal";

interface ModalProps {
  openModal: boolean;
  closeModal: () => void;
  children: ReactNode;
}

/**
 * Modal Trigger
 * 
 * 
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

 */
const ChatModal = ({openModal, closeModal, children}: ModalProps) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#fff",
      color: "#3730a3",
      width: "400px",
      height: "400px",
      border: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    overlay: {
      inset: "0px",
      zIndex: "100",
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
  };

  let subtitle: any;

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  return (
    <ReactModal
      isOpen={openModal}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      {children}
    </ReactModal>
  );
};

export default ChatModal;
