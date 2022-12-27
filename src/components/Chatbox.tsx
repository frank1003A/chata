import {
  ChangeEvent,
  useRef,
  useEffect,
  useState,
  ReactNode,
  ReactFragment,
} from "react";
import {
  FaCalendar,
  FaPhone,
  FaPlane,
  FaDochub,
  FaImage,
  FaLink,
  FaSmile,
  FaRegPaperPlane,
} from "react-icons/fa";
import Img from "../assets/me.jpg";
import Button from "./Button";
import Chat from "./Chat";
import ChatModal from "./ChatModal";
import CustomFileInput from "./CustomFileInput";
import CustomImageFileInput from "./CustomImageFileInput";
import Dropdown from "./Dropdown";
import Input from "./Input";
import Modal from "./Modal";
import { renderImagePreview } from "../../utils/index";
import AudioPlayer from "./AudioPlayer";

interface AttachmentType {
  file: File | null;
  genericType?: "audio" | "video" | "image";
}
interface SimChat {
  type?: "incoming" | "outgoing";
  content?: string;
  attachment?: AttachmentType;
}

const Chatbox = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [sendMessage, setSendMessage] = useState(false);

  const fileInput = useRef<HTMLInputElement | null>(null);
  const ImgElement = useRef<HTMLImageElement | null>(null);
  const vidElement = useRef<HTMLVideoElement | null>(null);
  const audElement = useRef<HTMLAudioElement | null>(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  // simulating chat
  const initChat: SimChat[] = [
    {
      type: "incoming",
      content: "How does it sound for you?",
      attachment: {
        file: null
      },
    },
    { type: "outgoing", content: "It sounds great!!", attachment: { file: null} },
    { type: "incoming", content: "Great how?", attachment: { file: null} },
    { type: "outgoing", content: "😶😶😶😶😶", attachment: { file: null} },
  ];

  const [chats, setChats] = useState<SimChat[]>(initChat);
  const [chat, setChat] = useState<SimChat>({
    type: "outgoing",
    content: "Say Hi",
    attachment: { file: null},
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    type: "incoming" | "outgoing"
  ) => {
    let cht: SimChat = {};
    const value = e.target.value;
    if (typeof value === "string") cht.content = value;
    cht.type = type;
    setChat(cht);
  };

  const handleAttachments = (e: ChangeEvent<HTMLInputElement>) => {
    const attch = e.target.files;
    //setChat({attachment: attch})
    console.log(attch);
  };

  const onChangeImage = (value: string) => {
    console.log(value);
  };

  const handleImage = () => {
    if (fileInput?.current?.files) {
      const files = fileInput.current.files;

      if (files.length > 0 && typeof onChangeImage === "function") {
        const reader = new FileReader();

        reader.addEventListener("load", () => {
          if (typeof reader.result === "string") {
            onChangeImage(reader.result);
          }
        });

        reader.readAsDataURL(files[0]);
      }
    }
  };

  const sendChat = () => {
    let chts: SimChat[] = chats;
    let ct: SimChat = {
      content: chat?.content as string,
      type: chat?.type as "incoming" | "outgoing",
      attachment: chat.attachment,
    };
    chts.push(ct);
    console.log(chts);
    setChats(chts);
  };

  const onImageFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let cht: SimChat = {};
    if (event.target.files !== null && event.target.files !== undefined) {
      cht.attachment = {
        file: event.target.files[0],
        genericType: "image"
      }
    }
    setChat({ ...chat, attachment: cht.attachment });
    if (cht.attachment && cht.attachment.file !== null && cht.attachment.file !== undefined)
      renderImagePreview({ file: cht.attachment.file, element: ImgElement });
  };

  const onFilesInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let files = event.target.files;
    let video = vidElement.current as HTMLVideoElement;
    let audio = audElement.current as HTMLAudioElement;
    let reader = new FileReader();
    try {
      if (files !== null && files !== undefined) {
        let file = files[0];
        reader.addEventListener("load", () => {
          if (file.type.startsWith("video/")) {
            video.src = reader.result as string;
          }
        });
        if (file.type.startsWith("audio/")) {
          audio.src = reader.result as string;
        }
        reader.readAsDataURL(files[0]);
      }
    } catch (error) {
      console.error(error);
    }
  };

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
          {chat.attachment ? (
            <div className="imgprev_cont">
              <img ref={ImgElement} id="img_preview" />
            </div>
          ) : (
            ""
          )}
          {chats.map((c) => {
            return (
              <Chat
                content={c.content}
                variant={c.type}
                attachment={c.attachment?.file}
              />
            );
          })}
          <span>
          <video controls ref={vidElement} autoPlay={false} id="chat_video">
            Sorry, your browser doesn't support embedded videos.
          </video>
          </span>
          <span>
          <audio controls ref={audElement} autoPlay={false} id="chat_audio">
          Sorry, your browser doesn't support embedded audios.
          </audio>
          </span>
        </div>
      </div>
      <div className="chat_input">
        <div>
        <div className="content-input">
          <div className="no_badge">
            <img src={Img} alt="img" />
          </div>
          <input
            type="text"
            placeholder="What's happening?"
            onChange={(e) => handleChange(e, "outgoing")}
          />
          <div className="btn-ctrls">
          <CustomImageFileInput onFileInputChange={onImageFileInputChange} />
          <CustomFileInput onFileTypesInputChange={onFilesInputChange} />
          </div>
          <Button
          icon={<FaRegPaperPlane/>}
            onClick={() => {
              sendChat();
              closeModal();
            }}
          />
        </div>
        </div>
      </div>

      <Modal openModal={modalIsOpen} closeModal={closeModal}>
        <h5>Attach File</h5>
        <input
          type="file"
          name="open_modal"
          id=""
          onChange={(e) => handleChange(e, "outgoing")}
        />
      </Modal>
    </div>
  );
};

export default Chatbox;

/** <div className="btn-ctrls">
          <span>
            <FaDochub />
          </span>
          <CustomImageFileInput onFileInputChange={onImageFileInputChange} />
          <CustomFileInput onFileTypesInputChange={onFilesInputChange} />
          <Button
            btnText="Send"
            onClick={() => {
              sendChat();
              closeModal();
            }}
          />
        </div> */

/** {chats.map((c) => {
            return (
              <Chat
                content={c.content}
                variant={c.type}
                attachment={c.attachment}
              />
            );
          })} */

/** <div className="chat-input">
          <input type="text"/>
          <div className="controls">
          <span><FaDochub/></span>
          <span><FaImage/></span>
          <span><FaLink/></span>
          <span id="send-btn"><FaPlane/></span>
          </div>
        </div> */

/***<Input
            variant="outlined"
            accept="file"
            id="icon-button-file-manifest"
            multiple
            disabled={false}
            type="file"
            onChange={(e) => {
              const fileTwo = e.target.files[0];
              if (selectBank === 1) {
                matchByRef(
                  `manifest ${convert(new Date(Date.now()))}`,
                  "xlsx",
                  fileTwo
                );
              } else if (selectBank === 2) {
                matchByCodeFidelity(
                  `manifest ${convert(new Date(Date.now()))}`,
                  "xlsx",
                  fileTwo
                );
              }
            }}
          /> */

/**<ChatModal openModal={modalIsOpen} closeModal={closeModal}>
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
      </ChatModal> */

/** const handleImage = () => {
    if (fileInput?.current?.files) {
      const files = fileInput.current.files;

      if (files.length > 0 && typeof onChangeImage === "function") {
        const reader = new FileReader();

        reader.addEventListener("load", () => {
          if (typeof reader.result === "string") {
            onChangeImage(reader.result);
          }
        });

        reader.readAsDataURL(files[0]);
      }
    }
  }; */
