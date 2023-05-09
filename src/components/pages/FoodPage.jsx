import React from 'react'
import Brick from '../parts/Brick'
import Page from '../parts/Page'
import '../../styles/foodPage.css'

const FoodPage = () => {
  const data = {
    id: 200,
    backgroundImage: '../src/assets/welcomePage/main.png',
    title: 'Argentynski kaktus',
    date: '10.10.2010',
    description:
      'Sposób przygotowania: 1. Ryż ugotuj według przepisu na opakowaniu 2. Cukinię i paprykę pokrój w kostkę, cebulę w plasterki 3. Na patelni duś warzywa przez 15 minut 4. Na tortilli połóż sałatę, ryż oraz warzywa, polej jogurtem i zwin 5. Tortilla pszenna 6. Mąkę wymieszaj z solą. Wlej gorącą wodę i wymieszaj 7. Następnie dodaj olej i wyrób ręką. Odstaw 8. Po około 10 minutach podziel ciasto na dwie części, uformuj kuleczki i rozwałkuj cienko (jeśli potrzeba podsyp mąką) 9. Smaż na suchej patelni około minuty z jednej i 30 sekund z drugiej strony',
    time: '200min',
    people: 2,
    kcal: '200kcal',
    option: 'redukcja',
    ingredients: ['20 jaj', '1 kaktus', '20kg kartofli'],
  }

  return (
    <Page>
      <section className="food">
        <section
          style={{ backgroundImage: `url(${data.backgroundImage})` }}
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
              {data.ingredients.map((ingredient) => (
                <Brick
                  key={ingredient}
                  text={ingredient}
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
