import React from 'react'
import '../../styles/brick.css'

const Brick = ({ text, icon, weight }) => (
  <div className="brick">
    <img alt="icon" src={icon} />
    <p>{text}</p>
    {weight === null ? null : <p>{weight}</p>}
  </div>
)

export default Brick
