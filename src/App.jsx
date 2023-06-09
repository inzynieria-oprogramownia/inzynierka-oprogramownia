import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WelcomePage from './components/pages/WelcomePage'
import LoginPage from './components/pages/LoginPage'
import FoodPage from './components/pages/FoodPage'
import AllFoodPage from './components/pages/AllFoodPage'
import AllBlogPage from './components/pages/AllBlogPage'
import PremiumPage from './components/pages/PremiumPage'
import ProfilePage from './components/pages/ProfilePage'
import WaterReminder from './components/parts/WaterReminder'
import PlanPage from './components/pages/PlanPage'
import Error404 from './components/pages/Error404'
import BlogEntry from './components/pages/BlogEntry'
import BlogPage from './components/pages/BlogPage'
import AddingFormPage from './components/pages/AddingFormPage'
import './styles/app.css'

const App = () => (
  <div className="App">
    <WaterReminder />
    <BrowserRouter>
      <Routes>
        <Route index element={<WelcomePage />} />
        <Route path="/premium" element={<PremiumPage />} />
        <Route path="/premium/food/:id" element={<FoodPage type="premium" />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogEntry />} />
        <Route path="/blog/all" element={<AllBlogPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/food" element={<AllFoodPage />} />
        <Route path="/food/:id" element={<FoodPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/plan" element={<PlanPage />} />
        <Route path="/addRecipe" element={<AddingFormPage />} />
        <Route path="/addPost" element={<AddingFormPage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  </div>
)

export default App
