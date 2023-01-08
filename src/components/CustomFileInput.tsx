import { useRef, useEffect } from "react";
import { FaLink } from "react-icons/fa";
import { FileType } from "./CustomImageFileInput";

interface FileTypes extends FileType {
    fileType?: string | undefined;
    onFileTypesInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; 
}
/**Accepts all file type */
const CustomInputinputRef = ({ onFileTypesInputChange }: FileTypes) => {
  const inputRef = useRef(null);

  const fileUpload = () => {
    let Input = inputRef.current! as HTMLInputElement;
    Input.click();
  };
  
  return (
    <span>
        <FaLink onClick={fileUpload} />
      <input
        hidden
        id="inputRef"
        ref={inputRef}
        type="file"
        accept="/*"
        onChange={onFileTypesInputChange}
      />
    </span>
  );
};

export default CustomInputinputRef;
