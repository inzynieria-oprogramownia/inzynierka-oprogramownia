/* eslint-disable react/no-array-index-key */
import React from 'react'
import { useParams } from 'react-router-dom'
import Brick from '../parts/Brick'
import Page from '../parts/Page'
import data from '../../mocks/premiumDiets'
import '../../styles/foodPage.css'

const FoodPage = () => {
  const urlParam = useParams('id')
  let { id } = urlParam
  id -= 1

  return (
    <Page>
      <section className="food">
        <section
          style={{ backgroundImage: `url(${data[id].backgroundImage})` }}
          className="food--hero"
        >
          <div className="hero--wrapper">
            <h2 className="hero--title">{data[id].title}</h2>
          </div>
        </section>
        <div className="food--bottom">
          <section className="food--info">
            <div className="food--recepie">
              <p className="food--date">{data[id].date}</p>
              <h3 className="food--title">{data[id].title}</h3>
              <p className="recepie">Przepis:</p>
              <p className="food--steps">{data[id].description}</p>
            </div>
          </section>
          <div className="detials--wrapper">
            <section className="food--details">
              <p className="details--title">Szczegóły przepisu</p>
              <Brick
                text={data[id].people}
                icon="..\..\src\assets\person.svg"
              />
              <Brick text={data[id].time} icon="..\..\src\assets\time.svg" />
              <Brick text={data[id].kcal} icon="..\..\src\assets\kcal.svg" />
              <Brick
                text={data[id].option}
                icon="..\..\src\assets\option.svg"
              />
            </section>
            <section className="food--ingredients">
              <p className="details--title">Składniki</p>
              {data[id].ingredients.map((ingredient, index) => (
                <Brick
                  key={index}
                  text={ingredient.name}
                  icon="../../src/assets/plus.svg"
                  weight={ingredient.weight}
                />
              ))}
            </section>
          </div>
        </div>
      </section>
    </Page>
  )
}

export default FoodPage
