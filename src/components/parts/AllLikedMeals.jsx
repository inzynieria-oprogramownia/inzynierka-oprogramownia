import React from 'react'
import AllComponent from './AllComponent'
import useFetch from '../../hooks/useFetch'

const AllLikedMeals = ({ id, panel }) => {
  const [data] = useFetch(
    `http://localhost/api/api/users/getLikedMeals.php?userid=${id}`,
    panel
  )
  return <AllComponent type="likedMeals" render={data?.meals} />
}

export default AllLikedMeals
