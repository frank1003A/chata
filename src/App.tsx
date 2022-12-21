import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import { Route, Routes} from "react-router-dom"
import Conversations from './pages/Conversations'
import Pinned from './pages/Pinned'
import Chatbox from './pages/Chatbox'

function App() {
  return (
    <Routes>
    <Route path="/" element={<Conversations/>}/>
    <Route path="/pinned" element={<Pinned/>}/>
    <Route path="/chatbox" element={<Chatbox/>}/>
    </Routes>
  )
}

export default App
