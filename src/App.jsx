import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Index from './pages/index'
import Home from './pages/home'
import Founder from './pages/founder'
import Contact from './pages/contact'
import Careers from './pages/careers'
import AreaOfPractice from './pages/areaOfPractice'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/areaOfPractice" element={<AreaOfPractice />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
