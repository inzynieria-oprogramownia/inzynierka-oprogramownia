/* eslint-disable implicit-arrow-linebreak */
import React from 'react'
import star from '../../assets/welcomePage/star.svg'

const StarsImage = ({ rate }) => (
  <div>
    {[...Array(rate)].map(() => (
      <img src={star} key={Math.random()} alt="starImage" />
    ))}
  </div>
)

export default StarsImage
