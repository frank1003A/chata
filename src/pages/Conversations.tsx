import React from 'react'
import Messages from "../components/Messages"
import Chatbox from "../components/Chatbox"
import Extras from "../components/Extras"

const all = () => {
  return (
    <div className="grid-layout">
      <Messages/>
      <Chatbox/>
      <Extras/>
    </div>
  )
}

export default all