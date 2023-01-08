import {
  ChangeEvent,
  useRef,
  useEffect,
  useState,
  ReactNode,
  ReactFragment,
  SyntheticEvent,
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
  FaMicrophone,
  FaMicrophoneAltSlash,
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
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import RecorderControls from "./RecorderControls";
import PreviewAttch from "./PreviewAttch";

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
  const recorderControls = useAudioRecorder();
  const addAudioElement = (blob: Blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);
  };

  const [modalIsOpen, setIsOpen] = useState(false);
  const [sendMessage, setSendMessage] = useState(false);
  const [mount, setMount] = useState(false);
  const [mouseEnter, setMouseEnter] = useState(false);
  const [showRec, setShowRec] = useState(false);

  const fileInput = useRef<HTMLInputElement | null>(null);
  const ImgElement = useRef<HTMLImageElement | null>(null);
  const vidElement = useRef<HTMLVideoElement | null>(null);
  const audElement = useRef<HTMLAudioElement | null>(null);
  const chatBoxRef = useRef<HTMLDivElement | null>(null);
  const hovRef = useRef<HTMLDivElement | null>(null);

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
        file: null,
      },
    },
    {
      type: "outgoing",
      content: "It sounds great!!",
      attachment: { file: null },
    },
    { type: "incoming", content: "Great how?", attachment: { file: null } },
    { type: "outgoing", content: "😶😶😶😶😶", attachment: { file: null } },
  ];

  const [chats, setChats] = useState<SimChat[]>(initChat);
  const [chat, setChat] = useState<SimChat>({
    type: "outgoing",
    content: "",
    attachment: { file: null },
  });

  const handleChange = (
    e: Event | SyntheticEvent<any, Event>,
    type: "incoming" | "outgoing"
  ) => {
    const { value } = e.currentTarget;
    setChat({ ...chat, content: value as string, type: type });
  };

  const sendChat = () => {
    let chts: SimChat[] = chats;
    let ct: SimChat = {
      content: chat?.content as string,
      type: chat?.type as "incoming" | "outgoing",
      attachment: chat.attachment,
    };
    chts.push(ct);
    setChats(chts);
    setChat(chat);
  };

  const onImageFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let cht: SimChat = {};
    if (event.target.files !== null && event.target.files !== undefined) {
      cht.attachment = {
        file: event.target.files[0],
        genericType: "image",
      };
    }
    setChat({ ...chat, attachment: cht.attachment });
  };

  const handleVideoAttch = (
    event: React.ChangeEvent<HTMLInputElement>,
    files: FileList
  ) => {
    let video = vidElement.current as HTMLVideoElement;
    let reader = new FileReader();
    try {
      let file = files[0];
      reader.addEventListener("load", () => {
        video.src = reader.result as string;
        setChat({
          ...chat,
          attachment: {
            file: file,
            genericType: "video",
          },
        });
      });
      reader.readAsDataURL(files[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAudioAttch = (
    event: React.ChangeEvent<HTMLInputElement>,
    files: FileList
  ) => {
    let audio = audElement.current as HTMLAudioElement;
    let reader = new FileReader();
    try {
      let file = files[0];
      reader.addEventListener("load", () => {
        audio.src = reader.result as string;
        setChat({
          ...chat,
          attachment: {
            file: file,
            genericType: "audio",
          },
        });
      });
      reader.readAsDataURL(files[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const onFilesInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let files = event.target.files;
    if (files !== null && files !== undefined) {
      let file = files[0];
      if (file.type.startsWith("video/")) handleVideoAttch(event, files);
      if (file.type.startsWith("audio/")) handleAudioAttch(event, files);
    }
  };

  useEffect(() => {
    setMount(true);
  }, []);

  useEffect(() => {
    let chtbx = chatBoxRef.current as HTMLDivElement;
    chtbx.scrollTo({
      behavior: "smooth",
      top: chtbx.scrollHeight,
    });
  }, [chat]);

  useEffect(() => {
    let mr = hovRef.current as HTMLDivElement;
    mr.addEventListener("mouseenter", () => {
      setMouseEnter(true);
    });
    mr.addEventListener("mouseleave", () => {
      setMouseEnter(false);
    });
  }, []);

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
        <div ref={chatBoxRef}>
          {chats.map((c) => {
            return (
              <Chat
                content={c.content}
                variant={c.type}
                attachment={c.attachment}
              />
            );
          })}
          <div className={showRec ? "slide_up" : "hidden"}>
            <AudioRecorder
              onRecordingComplete={(blob) => addAudioElement(blob)}
              recorderControls={recorderControls}
            />
          </div>
        </div>
      </div>
      
      <PreviewAttch chat={chat} variant="audio">
      <span>
          <audio controls ref={audElement} autoPlay id="chat_audio">
            Sorry, your browser doesn't support embedded audios.
          </audio>
        </span>
      </PreviewAttch>
      <div
        className={
          chat.attachment?.file &&
          chat.attachment?.file.type.startsWith("video/")
            ? "preview-attachment fade_in_center"
            : "preview-attachment hidden"
        }
      >
        <video
              controls
              ref={vidElement}
              autoPlay
              id="chat_video"
            >
              Sorry, your browser doesn't support embedded videos.
            </video>
      </div>
      <div className="chat_input" ref={hovRef}>
        <div>
          <div className="content-input slide_up">
            <input
              type="text"
              placeholder="What's happening?"
              onChange={(e) => handleChange(e, "outgoing")}
            />
            <select
              name="select_variant"
              id=""
              onChange={(e) =>
                setChat({
                  ...chat,
                  type: e.target.value as "incoming" | "outgoing",
                })
              }
            >
              <option value="outgoing">outgoing</option>
              <option value="incoming">incoming</option>
            </select>
            <div className="btn-ctrls">
              <RecorderControls showRec={showRec} setShowRec={setShowRec} />
              <CustomImageFileInput
                onFileInputChange={onImageFileInputChange}
              />
              <CustomFileInput onFileTypesInputChange={onFilesInputChange} />
            </div>
            <Button
              icon={<FaRegPaperPlane />}
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

/**<div
            className={
              !chat.attachment?.file
                ? "imgprev_cont hidden"
                : "imgprev_cont slide_up"
            }
          >
            <label>{chat.content}</label>
            <img ref={ImgElement} id="img_preview" />
          </div>
          <span
            className={
              chat.attachment?.file &&
              chat.attachment?.file?.type.startsWith("video/")
                ? "preview_trey hidden"
                : "preview_trey slide_up"
            }
          >
            <label htmlFor="preview_trey">Preview</label>
            <video
              hidden
              controls
              ref={vidElement}
              autoPlay={false}
              id="chat_video"
            >
              Sorry, your browser doesn't support embedded videos.
            </video>
          </span>
          <span>
            <audio
              hidden
              controls
              ref={audElement}
              autoPlay={false}
              id="chat_audio"
            >
              Sorry, your browser doesn't support embedded audios.
            </audio>
          </span> */
