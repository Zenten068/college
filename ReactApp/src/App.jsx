import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './Component/Navbar'
import Sample from './Component/Sample'
import HomePage from './Component/HomePage'
import loggedin from './Component/HomePage'
import Contact from './Component/Contact'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const [menu, setmenu] = useState("sports")

  return (
    <>
      <Routes>
        <Route path='/' element={<><HomePage /><Navbar list={menu} /></>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="Sample" element={<Sample />} />
      </Routes>
    </>
  )
}

export default App
