import React from 'react'
import useFetch from '../../hooks/useFetch'
import AllComponent from './AllComponent'

const AllRecepies = ({ id, panel }) => {
  const [recepies] = useFetch(
    `http://localhost/api/api/users/getCreatedMeals.php?userid=${id}`,
    panel
  )
  return <AllComponent render={recepies?.meals} />
}

export default AllRecepies
