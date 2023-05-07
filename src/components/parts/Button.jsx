/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from 'react'
import '../../styles/button.css'

const Button = ({ children, className, ...props }) => {
  const buttonRef = useRef(null)
  const buttonClass = `button ${className || ''}`

  return (
    <button type="button" className={buttonClass} ref={buttonRef} {...props}>
      {children}
    </button>
  )
}

export default Button
