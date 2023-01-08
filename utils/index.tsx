import { MutableRefObject } from "react";

interface RenderImgArgs {
  /**Javascript File Object to obtain base64 string */
  file: File;
  /**
   *  React mutable `ref` object. Pass `useRef` hook
   */
  element: MutableRefObject<HTMLImageElement | null>;
}

interface RenderVidArgs {
  /**Javascript File Object to obtain base64 string */
  file: File;
  /**
   *  React mutable `ref` object. Pass `useRef` hook
   */
  element: MutableRefObject<HTMLVideoElement | null>;
}

interface RenderAudArgs {
  /**Javascript File Object to obtain base64 string */
  file: File;
  /**
   *  React mutable `ref` object. Pass `useRef` hook
   */
  element: MutableRefObject<HTMLAudioElement | null>;
}

/**Renders Image from File*/
export const renderImagePreview = ({ file, element }: RenderImgArgs) => {
  const preview = element.current as HTMLImageElement;
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    // result is a base64 string
    if (reader.result !== null) {
      preview.src = reader.result as string;
    }
  });
  reader.readAsDataURL(file);
};

/**Renders Video from File*/
export const renderVideoPreview = ({ file, element }: RenderVidArgs) => {
  const video = element.current as HTMLVideoElement;
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    // result is a base64 string
    if (reader.result !== null) {
      video.src = reader.result as string;
    }
  });
  reader.readAsDataURL(file);
};


/**Renders Video from File*/
export const renderAudioPreview = ({ file, element }: RenderAudArgs) => {
  const audio = element.current as HTMLAudioElement;
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    // result is a base64 string
      audio.src = URL.createObjectURL(file)
  });
  reader.readAsDataURL(file);
};