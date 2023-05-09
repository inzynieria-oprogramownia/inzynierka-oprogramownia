import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WelcomePage from './components/pages/WelcomePage'
import LoginPage from './components/pages/LoginPage'
import BlogPage from './components/pages/BlogPage'
import FoodPage from './components/pages/FoodPage'

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route index element={<WelcomePage />} />
        <Route path="premium" element={null} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="/food/:id" element={<FoodPage />} />
      </Routes>
    </BrowserRouter>
  </div>
)

export default App
