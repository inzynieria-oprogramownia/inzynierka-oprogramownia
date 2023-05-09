import React from 'react'
import Button from './Button'
import Brick from './Brick'
import '../../styles/recepieItem.css'

const RecipeItem = ({ data }) => {
  const { img, title, person, time, kcal, option } = data
  return (
    <div className="recipeItem">
      <img className="recipeItem--image" src={img} alt={title} />
      <div className="wrapper">
        <p className="recipeItem--title">{title}</p>
        <div className="recipeItem--wrapper">
          <Brick icon="src\assets\person.svg" text={person} />
          <Brick icon="src\assets\time.svg" text={time} />
          <Brick icon="src\assets\kcal.svg" text={kcal} />
          <Brick icon="src\assets\option.svg" text={option} />
        </div>
        <Button className="recipeItem--button">
          <p>Poznaj szczegóły</p>
        </Button>
      </div>
    </div>
  )
}

export default RecipeItem
