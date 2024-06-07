import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path="/About" element={<About />} />
			</Routes>
    </>
  )
}

export default App
