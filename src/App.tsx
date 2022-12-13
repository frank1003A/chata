import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import { Route, Routes} from "react-router-dom"
import Conversations from './pages/Conversations'
import Pinned from './pages/Pinned'

function App() {
  return (
    <Routes>
    <Route path="/" element={<Conversations/>}/>
    <Route path="/pinned" element={<Pinned/>}/>
    </Routes>
  )
}

export default App
