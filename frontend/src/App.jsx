import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import Searchform from './components/Searchform'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section className='grid grid-cols-3 items-center bg-gray-200 py-4'>
    <Navbar/>
    <Searchform className="flex justify-center"/>
    <div></div>
    </section>
      
    </>
  )
}

export default App
