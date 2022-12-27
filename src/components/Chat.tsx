import { Fragment, ReactNode, useEffect, useRef } from "react";
import { renderImagePreview, renderVideoPreview } from "../../utils";

interface ChatProp {
  content: string | undefined;
  variant?: "outgoing" | "incoming";
  attachment?: File | null;
}

interface AttachmentType {
  image?:
    | "image/png"
    | "image/jpeg"
    | "image/gif"
    | "image/svg+xml"
    | "image/svg";
  video?: "video/mpeg" | "video/mp4";
  audio?: "audio/mpeg" | "audio/mp4";
}
const Chat = ({ content, variant, attachment }: ChatProp) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    let image = imgRef.current as HTMLImageElement;
    let video = videoRef.current as HTMLVideoElement;

    if (attachment?.type.startsWith("image/")) {
      renderImagePreview({ file: attachment, element: imgRef });
    }
    if (attachment?.type.startsWith("video/")) {
      renderVideoPreview({ file: attachment, element: videoRef });
    }
  }, []);
  return (
    <div
      className={variant === "incoming" ? "chat-trey left" : "chat-trey right"}
    >
      {variant === "incoming" ? (
        <span className="incoming-content-bubble">
          <>{content}</>
          <br />
          <div className="imgprev_cont">
            <img ref={imgRef} id="img_preview" />
          </div>
        </span>
      ) : (
        <span className="outgoing-content-bubble">
          <>{content}</>
          <br />
          <div className="imgprev_cont">
            <img ref={imgRef} id="img_preview" />
          </div>
          <br />
          <video controls autoPlay id="chat_video" ref={videoRef}>
            Sorry, your browser doesn't support embedded videos.
          </video>
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