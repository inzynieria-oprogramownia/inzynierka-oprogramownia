import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Start from './components/pages/Start'
import Premium from './components/pages/Premium'
import Blog from './components/pages/Blog'
import Login from './components/pages/Login'

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route index element={<Start />} />
        <Route path="premium" element={<Premium />} />
        <Route path="blog" element={<Blog />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </div>
)

export default App
