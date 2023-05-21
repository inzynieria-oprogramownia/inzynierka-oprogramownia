import React from 'react'
import '../../styles/brick.css'

const baseURL = 'http://127.0.0.1:5173'
const Brick = ({ text, icon, weight }) => (
  <div className="brick">
    <img alt="icon" src={`${baseURL}${icon}`} />
    <p>{text}</p>
    {weight === null ? null : <p>{weight}</p>}
  </div>
)

export default Brick
