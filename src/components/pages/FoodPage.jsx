import React from 'react'
import Brick from '../parts/Brick'
import Page from '../parts/Page'
import useRecipeData from '../../hooks/useRecipeData'
import '../../styles/foodPage.css'

const FoodPage = () => {
  const data = useRecipeData()
  const imageToRender = `http://localhost/api/api/meal/${data.backgroundImage}`
  return (
    <Page>
      <section className="food">
        <section
          style={{ backgroundImage: `url(${imageToRender})` }}
          className="food--hero"
        >
          <div className="hero--wrapper">
            <h2 className="hero--title">{data.title}</h2>
          </div>
        </section>
        <div className="food--bottom">
          <section className="food--info">
            <div className="food--recepie">
              <p className="food--date">{data.date}</p>
              <h3 className="food--title">{data.title}</h3>
              <p className="recepie">Przepis:</p>
              <p className="food--steps">{data.description}</p>
            </div>
          </section>
          <div className="detials--wrapper">
            <section className="food--details">
              <p className="details--title">Szczegóły przepisu</p>
              <Brick text={data.people} icon="..\src\assets\person.svg" />
              <Brick text={data.time} icon="..\src\assets\time.svg" />
              <Brick text={data.kcal} icon="..\src\assets\kcal.svg" />
              <Brick text={data.option} icon="..\src\assets\option.svg" />
            </section>
            <section className="food--ingredients">
              <p className="details--title">Składniki</p>
              {data.ingredients?.map((ingredient) => (
                <Brick
                  key={JSON.stringify(ingredient)}
                  text={`${ingredient.name} ${ingredient.weight}`}
                  icon="..\src\assets\plus.svg"
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
