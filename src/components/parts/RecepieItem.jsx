/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setUserLikedMeals, addUserLikedMeals } from '../../redux/slices/user'
import Button from './Button'
import Brick from './Brick'
import '../../styles/recepieItem.css'

const RecipeItem = ({ data }) => {
  const { image, title, people, time, kcal, mealoption } = data
  const likedMeals = useSelector((state) => state.person.likeMeals)
  const dispatch = useDispatch()

  const handleClick = (event) => {
    const iconElement = event.currentTarget
    const recipeId = iconElement.getAttribute('data-recipe-id')
    iconElement.classList.add('fa-bounce')
    const { color } = iconElement.style
    iconElement.style.color = color === 'red' ? 'black' : 'red'
    const isMealLiked = likedMeals.includes(recipeId)
    if (isMealLiked) {
      const newLikedMeals = likedMeals.filter((id) => id !== recipeId)
      dispatch(setUserLikedMeals(newLikedMeals))
    } else {
      dispatch(addUserLikedMeals(recipeId))
    }

    setTimeout(() => {
      iconElement.classList.remove('fa-bounce')
    }, 1000)
  }
  const imageToRender = `http://localhost/api/api/meal/${image}`

  return (
    <div className="recipeItem">
      <img className="recipeItem--image" src={imageToRender} alt={title} />
      <div className="recipeItem--wrapper__outer">
        <i
          className="fa-regular fa-heart"
          onClick={handleClick}
          data-recipe-id="1"
        />
        <p className="recipeItem--title">{title}</p>
        <div className="recipeItem--wrapper">
          <Brick icon="src\assets\person.svg" text={people} />
          <Brick icon="src\assets\time.svg" text={time} />
          <Brick icon="src\assets\kcal.svg" text={`${kcal} kcal`} />
          <Brick icon="src\assets\option.svg" text={mealoption} />
        </div>
        <Button className="recipeItem--button">
          <p>Poznaj szczegóły</p>
        </Button>
      </div>
    </div>
  )
}

export default RecipeItem
