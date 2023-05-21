/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import Page from '../parts/Page'
import AllComponent from '../parts/AllComponent'
import useFetch from '../../hooks/useFetch'
import RecipeItem from '../parts/RecepieItem'
import '../../styles/allFoodPage.css'

const AllFoodPage = () => {
  const [data] = useFetch('http://localhost/api/api/meal/getMeals.php')
  const [premiumData] = useFetch(
    'http://localhost/api/api/users/premium/getPremiumMeals.php'
  )
  const { premium } = useSelector((state) => state.person)
  const [isPremium, setIsPremium] = useState(false)

  useEffect(() => {
    premium === '0' ? setIsPremium(false) : setIsPremium(true)
  }, [premium])
  const path = '/premium/food/'
  return (
    <Page>
      {isPremium && (
        <div className="premium--wrapper">
          <h1> Przygotowane przez zespół NutriPlan</h1>
          <div className="allComponent--wrapper w100">
            {premiumData?.map((el) => (
              <RecipeItem
                deleteElement={null}
                key={JSON.stringify(el)}
                data={el}
                path={path}
              />
            ))}
          </div>
        </div>
      )}
      <AllComponent render={data} />
    </Page>
  )
}

export default AllFoodPage
