import React from 'react'
import '../../styles/brick.css'

const Brick = ({ text, icon }) => (
  <div className="brick">
    <img alt="icon" src={icon} />
    <p>{text}</p>
  </div>
)

export default Brick
