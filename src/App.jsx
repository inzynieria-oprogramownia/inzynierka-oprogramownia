import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/sections/Nav'
import Footer from './components/sections/Footer'
import Section from './components/sections/Section'

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route index element={<Nav />} />
        <Route path="premium" element={null} />
        <Route path="blog" element={null} />
        <Route path="login" element={null} />
      </Routes>
    </BrowserRouter>
    <Section />
    <Footer />
  </div>
)

export default App
