import React from 'react'
import { FaMicrophone, FaMicrophoneAltSlash } from 'react-icons/fa'

const RecorderControls = ({showRec, setShowRec}:{showRec: boolean, setShowRec: (value: React.SetStateAction<boolean>) => void}) => {
  return (
    <span>
        {showRec === true ? <FaMicrophone onClick={() => setShowRec(!showRec)}/>:<FaMicrophoneAltSlash onClick={() => setShowRec(true)}/>}
    </span>
  )
}

export default RecorderControls