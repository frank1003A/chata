import React, { ReactNode } from "react";
import { FaRemoveFormat, FaCrop } from "react-icons/fa";

interface AttachmentType {
  file: File | null;
  genericType?: "audio" | "video" | "image";
}

interface SimChat {
  type?: "incoming" | "outgoing";
  content?: string;
  attachment?: AttachmentType;
}

const PreviewAttch = ({
  chat,
  children,
  variant,
}: {
  chat: SimChat;
  children: ReactNode;
  variant: "audio" | "video" | "image";
}) => {
  return (
    <div
      className={
        chat.attachment?.file &&
        chat.attachment?.file.type.startsWith(`${variant}/`)
          ? "preview-attachment fade_in_center"
          : "preview-attachment hidden"
      }
    >
        <div className="topprev">
        <h4>{chat.attachment?.file ? chat.attachment?.file.name : ""}</h4>
            <FaRemoveFormat/>
        </div>
      {children}
    </div>
  );
};

export default PreviewAttch;
