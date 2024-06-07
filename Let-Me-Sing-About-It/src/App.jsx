import { useState } from 'react'
import './App.css'
import About from '../src/pages/AboutPage'
import { Route, Routes } from 'react-router-dom'

function App() {
  
  return (
    <>
    <div>
      <header>

      <Routes>
        <Route path="/About" element={<About />} />
      </Routes>
      </header>

      <h2>Ka Ra Ok</h2>

      </div>

      </>
  )
}

export default App
