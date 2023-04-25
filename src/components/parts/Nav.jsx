import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/nav.css'

const Nav = () => {
  const navRef = useRef()

  const handleNavBarClick = () => {
    navRef.current.classList.toggle('mobile-nav')
  }
  return (
    <nav className="nav">
      <div>
        <NavLink to="/" className="nav-logo">
          NutriPlan
        </NavLink>
      </div>
      <div ref={navRef} className="nav-links">
        <NavLink className="nav-link" to="/premium">
          Premium
        </NavLink>
        <NavLink className="nav-link" to="/blog">
          Blog
        </NavLink>
        <NavLink className="nav-link" to="/login">
          Zaloguj
        </NavLink>
      </div>
      <button type="button" className="nav-btn" onClick={handleNavBarClick}>
        <i className="fa-solid fa-bars" />
      </button>
    </nav>
  )
}
export default Nav
