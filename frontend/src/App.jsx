import { useState } from 'react'
import './App.css'
import Homepage from './components/Homepage'
import {Routes,Route} from "react-router-dom";
import Signup from './pages/Signup'
function App() {
  return (
    <>
   <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
      
    </>
  )
}

export default App
