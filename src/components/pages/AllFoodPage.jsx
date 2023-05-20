import React from 'react'
import Page from '../parts/Page'
import AllComponent from '../parts/AllComponent'
import useFetch from '../../hooks/useFetch'

const AllFoodPage = () => {
  const [data] = useFetch('http://localhost/api/api/meal/getMeals.php')

  return (
    <Page>
      <AllComponent render={data} />
    </Page>
  )
}

export default AllFoodPage
