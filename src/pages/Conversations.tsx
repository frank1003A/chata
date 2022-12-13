import React from 'react'
import Messages from "../components/Messages"
import Chat from "../components/Chat"
import Extras from "../components/Extras"

const all = () => {
  return (
    <div className="grid-layout">
      <Messages/>
      <Chat/>
      <Extras/>
    </div>
  )
}

export default all