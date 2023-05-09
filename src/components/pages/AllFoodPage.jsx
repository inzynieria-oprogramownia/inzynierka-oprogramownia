import React from 'react'
import Page from '../parts/Page'
import AllComponent from '../parts/AllComponent'

const AllFoodPage = () => {
  const recepieItemData = {
    title: 'Wegetariańska tortilla zwarzywami i ryżem',
    img: '..\\src\\assets\\welcomePage\\main.png',
    person: 1,
    time: '20min.',
    kcal: '200kcal',
    option: 'redukcja',
  }

  return (
    <Page>
      <AllComponent data={recepieItemData} type="food" />
    </Page>
  )
}

export default AllFoodPage
