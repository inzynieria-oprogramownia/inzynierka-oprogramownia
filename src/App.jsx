import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WelcomePage from './components/pages/WelcomePage'
import LoginPage from './components/pages/LoginPage'

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route index element={<WelcomePage />} />
        <Route path="premium" element={null} />
        <Route path="blog" element={null} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  </div>
)

export default App
