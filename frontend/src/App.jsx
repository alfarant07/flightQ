//import { useState } from 'react'
import './App.css'
import Homepage from './components/Homepage'
import {Routes,Route} from "react-router-dom";
import Signup from './pages/Signup'
import Login from './pages/Login'
function App() {
  return (
    <>
   <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
      
    </>
  )
}

export default App
