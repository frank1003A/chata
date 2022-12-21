import { ReactNode } from "react";

interface ChatProp {
  content: ReactNode;
  variant: "outgoing" | "incoming";
}
const Chat = ({ content, variant }: ChatProp) => {
  return (
    <div
      className={variant === "incoming" ? "chat-trey left" : "chat-trey right"}
    >
      {content && variant === "incoming" ? (
        <span className="incoming-content-bubble">{content}</span>
      ) : (
        <span className="outgoing-content-bubble">{content}</span>
      )}
    </div>
  );
};

export default Chat;
