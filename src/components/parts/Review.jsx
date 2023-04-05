import React from 'react'
import StarsImage from './StarsImage'
import '../../styles/commponents/review.css'

const Review = ({ text, user, rate }) => (
  <div className="review--wrapper">
    <StarsImage rate={rate} />
    <p>{text}</p>
    <p>{user}</p>
  </div>
)

export default Review
