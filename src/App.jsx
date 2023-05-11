import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WelcomePage from './components/pages/WelcomePage'
import LoginPage from './components/pages/LoginPage'
import BlogPage from './components/pages/BlogPage'
import FoodPage from './components/pages/FoodPage'
import AllFoodPage from './components/pages/AllFoodPage'
import AllBlogPage from './components/pages/AllBlogPage'
import PremiumPage from './components/pages/PremiumPage'
import ProfilePage from './components/pages/ProfilePage'
import WaterReminder from './components/parts/WaterReminder'
import PlanPage from './components/pages/PlanPage'

const App = () => (
  <div className="App">
    <WaterReminder />
    <BrowserRouter>
      <Routes>
        <Route index element={<WelcomePage />} />
        <Route path="/premium" element={<PremiumPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/all" element={<AllBlogPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/food" element={<AllFoodPage />} />
        <Route path="/food/:id" element={<FoodPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/plan" element={<PlanPage />} />
      </Routes>
    </BrowserRouter>
  </div>
)

export default App
