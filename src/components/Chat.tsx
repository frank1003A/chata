import { Fragment, ReactNode, useEffect, useRef } from "react";
import { renderAudioPreview, renderImagePreview, renderVideoPreview } from "../../utils";
import Img1 from "../assets/me.jpg";
import Img2 from "../assets/mee.jpg";

interface ChatProp {
  content: string | undefined;
  variant?: "outgoing" | "incoming";
  attachment?: AttachmentType;
}

interface AttachmentType {
  file: File | null;
  genericType?: "audio" | "video" | "image";
}

const Chat = ({ content, variant, attachment }: ChatProp) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (attachment?.file?.type.startsWith("image/")) {
      renderImagePreview({ file: attachment.file, element: imgRef });
    }
    if (attachment?.file?.type.startsWith("video/")) {
      renderVideoPreview({ file: attachment.file, element: videoRef });
    }
    if (attachment?.file?.type.startsWith("audio/")) {
      renderAudioPreview({ file: attachment.file, element:audioRef });
    }
  }, [attachment]);
  return (
    <div
      className={variant === "incoming" ? "chat-trey left" : "chat-trey right"}
    >
      {variant === "incoming" ? (
        <span className="genContent flex">
          <div className="main-text">
            <div className="in-user">
              <div className="no_badge">
                <img src={Img1} alt="img" />
              </div>
              <span className="incoming-content-bubble">
                <>{content}</>
              </span>
            </div>
            <span className="incoming-time">
              <label htmlFor="">Just now</label>
            </span>
          </div>
          <div className="imgprev_cont">
            <img ref={imgRef} id="img_preview" />
          </div>
          <video hidden controls autoPlay id="chat_video" ref={videoRef}>
            Sorry, your browser doesn't support embedded videos.
          </video>
        </span>
      ) : (
        <span className="genContent flex">
          <div className="main-text">
            <div className="out-user">
              <div className="no_badge">
                <img src={Img2} alt="img" />
              </div>
              <span className="outgoing-content-bubble">
                <>{content}</>
              </span>
            </div>
            <span className="outgoing-time right">
              <label htmlFor="">{`${new Date().getHours()}:${new Date().getMinutes()} PM`}</label>
            </span>
          </div>
          <div className="imgprev_cont">
            <img ref={imgRef} id="img_preview" />
          </div>
          <video
            hidden={attachment?.file && attachment?.file.type.startsWith("video/") ? false : true}
            controls
            autoPlay={false}
            id="chat_video"
            ref={videoRef}
          >
            Sorry, your browser doesn't support embedded videos.
          </video>
          <span 
          >
            <audio ref={audioRef}>
            Sorry, your browser doesn't support embedded audios.
            </audio>
          </span>
        </span>
      )}
    </div>
  );
};

export default Chat;
/** {attachment?.type === "image/*" ? (
            <img src={attachment.name} alt="Error_Image" />
          ): ("")} */

//hidden={attachment && attachment.type.startsWith("audio") ? false : true}

/**<span style={{width: 'fit-content'}}>
            <audio controls autoPlay id="chat_audio">
              Sorry, your browser doesn't support embedded audios.
            </audio>
            </span> */

/** <div className="imgprev_cont">
            <img ref={imgRef} id="img_preview" />
          </div> */
