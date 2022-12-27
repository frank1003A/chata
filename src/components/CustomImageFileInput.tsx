import {HTMLInputTypeAttribute, useRef} from 'react'
import { FaImages } from 'react-icons/fa'

export interface FileType {
    onFileInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

/**Accepts only image files */
const CustomImageFileInput = ({ onFileInputChange }: FileType) => {
    const inputRef = useRef(null);

  const fileUpload = () => {;
    let Input = inputRef.current! as HTMLInputElement
    Input.click();
  };
  
  return (
    <span>
        <span onClick={fileUpload}><FaImages/></span>
        <input
        hidden
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={onFileInputChange}
      />
    </span>
  )
}

export default CustomImageFileInput