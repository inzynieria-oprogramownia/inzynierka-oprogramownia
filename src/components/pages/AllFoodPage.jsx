import React from 'react'
import Page from '../parts/Page'
import RecipeItem from '../parts/RecepieItem'
import Input from '../parts/Input'
import '../../styles/allFoodPage.css'

const AllFoodPage = () => {
  const recepieItemData = {
    title: 'Wegetariańska tortilla zwarzywami i ryżem',
    // eslint-disable-next-line prettier/prettier
    img: 'src\\assets\\welcomePage\\main.png',
    person: 1,
    time: '20min.',
    kcal: '200kcal',
    option: 'redukcja',
  }
  const data = new Array(100).fill().map(() => Math.floor(Math.random() * 100))

  return (
    <Page>
      <section className="allFood">
        <div className="allFood--search">
          <Input label="Search" />
        </div>
        <div className="allFood--wrapper ">
          {data.map((el) => (
            <RecipeItem data={recepieItemData} key={el} />
          ))}
        </div>
      </section>
    </Page>
  )
}

export default AllFoodPage
