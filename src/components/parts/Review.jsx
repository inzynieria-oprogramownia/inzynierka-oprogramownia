import React from 'react'
import StarsImage from './StarsImage'
import '../../styles/review.css'

const Review = ({ text, user, rate }) => (
  <div className="review--wrapper">
    <StarsImage rate={rate} />
    <p className="review--text">{text}</p>
    <p className="review--user">{user}</p>
  </div>
)

export default Review
