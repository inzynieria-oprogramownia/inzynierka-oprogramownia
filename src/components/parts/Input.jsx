/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useRef } from 'react'
import '../../styles/input.css'

const Input = ({ label, id, ...rest }) => {
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
  const labelClass = isFocused ? 'hidden' : 'input--label'

  return (
    <div className="input--wrapper">
      <label className={labelClass} htmlFor={id}>
        {label}
      </label>
      <input
        ref={inputRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="input"
        type="text"
        id={id}
        {...rest}
      />
    </div>
  )
}

export default Input
