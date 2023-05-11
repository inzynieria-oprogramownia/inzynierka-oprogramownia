/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useRef } from 'react'
import '../../styles/input.css'

const Input = ({ label, type, className, id, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef(null)

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    if (!inputRef.current.value) {
      setIsFocused(false)
    }
  }
  const labelClass = isFocused && type !== 'radio' ? 'hidden' : 'input--label'
  const inputType = type || 'text'
  const wrapperClass = className
    ? `${className} input--wrapper`
    : 'input--wrapper'
  return (
    <div className={wrapperClass}>
      <label className={labelClass} htmlFor={id}>
        {label}
      </label>
      <input
        ref={inputRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="input"
        type={inputType}
        id={id}
        {...rest}
      />
    </div>
  )
}

export default Input
