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
import Profile from './Component/Profile'
import { UserContext } from './UserContext'
import Product from './Component/Product'
import Search from './Component/Search'

function App() {
  const [count, setCount] = useState(0)
  const [menu, setmenu] = useState("ROUTES")
  const name = "Aman"

  return (
    <>
    <UserContext.Provider value={name}>
      <Routes>
        <Route path='/' element={<><HomePage /><Navbar list={menu} /></>} />

        <Route path="/contact"  element={<Contact />} />
        <Route path="/Sample" element={<Sample />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:username" element={<Profile />} />
        
        <Route path="/search" element={<><Search/></>} />
        <Route path="/Product" element={<Product />} />
      </Routes>
    </UserContext.Provider>
    </>
  )
}

export default App
