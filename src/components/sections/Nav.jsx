import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/nav.css'

const Nav = () => {
  const navRef = useRef()

  const handleNavBarClick = () => {
    navRef.current.classList.toggle('mobile-nav')
  }
  return (
    <nav>
      <div>
        <NavLink to="/" className="logo">
          NutriPlan
        </NavLink>
      </div>
      <div ref={navRef} className="nav-links">
        <NavLink to="/premium">Premium</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/login">Zaloguj</NavLink>
        <button
          type="button"
          className="nav-btn close-btn"
          onClick={handleNavBarClick}
        >
          <i className="fa-solid fa-x" />
        </button>
      </div>
      <button type="button" className="nav-btn" onClick={handleNavBarClick}>
        <i className="fa-solid fa-bars" />
      </button>
    </nav>
  )
}
export default Nav
