import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setUserData, initialState } from '../../redux/slices/user'
import '../../styles/nav.css'

const Nav = () => {
  const navRef = useRef()
  const isLoggedIn = useSelector((state) => state.person.login)

  const handleClick = () => {
    const dispatch = useDispatch()
    dispatch(setUserData(initialState))
  }

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
        {isLoggedIn ? (
          <>
            <NavLink className="nav-link" to="/food">
              Przepisy
            </NavLink>
            <NavLink className="nav-link" to="/blog/all">
              Wpisy
            </NavLink>
            <NavLink className="nav-link" to="/" onClick={handleClick}>
              Wyloguj
            </NavLink>
            <NavLink className="nav-link" to="/profile">
              Profil
            </NavLink>
          </>
        ) : (
          <NavLink className="nav-link" to="/login">
            Zaloguj
          </NavLink>
        )}
      </div>
      <button type="button" className="nav-btn" onClick={handleNavBarClick}>
        <i className="fa-solid fa-bars" />
      </button>
    </nav>
  )
}
export default Nav
