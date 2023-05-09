/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import '../../styles/heading.css'

const Heading = ({ children, className, type, ...props }) => {
  const color = type ? `line ${type}` : 'line'
  const headingClass = className
    ? `heading--wrapper ${className}`
    : 'heading--wrapper'

  return (
    <div className={headingClass} {...props}>
      <div className={color} />
      <div className="heading--text">{children}</div>
      <div className={color} />
    </div>
  )
}

export default Heading
