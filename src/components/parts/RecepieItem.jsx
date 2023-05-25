/* eslint-disable indent */
/* eslint-disable no-unused-expressions */
/* eslint-disable camelcase */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { setUserLikedMeals, addUserLikedMeals } from '../../redux/slices/user'
import Button from './Button'
import Brick from './Brick'
import '../../styles/recepieItem.css'
import fetchRecipeData from '../../utils/fetchRecipeData'
import fetchPremiumData from '../../utils/fetchPremiumData'

const RecipeItem = ({ data, deleteElement, path, isAddable }) => {
  const { image, id, title, people, time, kcal, mealoption } = data
  const dispatch = useDispatch()
  const navigateTo = useNavigate()
  const { id: userID, liked_meals } = useSelector((state) => state.person)
  const [likedMeals, setLikedMeals] = useState([])
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    setLikedMeals(liked_meals)
  }, [liked_meals])

  useEffect(() => {
    setIsLiked(likedMeals?.some((obj) => obj.id === id))
  }, [likedMeals])

  const handleNavigate = (e) => {
    e.preventDefault()
    path
      ? fetchPremiumData(dispatch, id).then(() => {
          navigateTo(`${path}${id}`)
        })
      : fetchRecipeData(dispatch, id).then(() => {
          navigateTo(`/food/${id}`)
        })
  }
  const handleClick = (event) => {
    const iconElement = event.currentTarget
    iconElement.classList.add('fa-bounce')
    if (isLiked) {
      setIsLiked(false)
      const updatedLikedMeals = likedMeals.filter((el) => el.id !== id)
      setLikedMeals(updatedLikedMeals)
      dispatch(setUserLikedMeals(updatedLikedMeals))
      axios.delete(
        `http://localhost/api/api/users/removeLikedMeal.php?userID=${userID}&mealID=${id}`
      )
      iconElement.classList.remove('fa-bounce')
      deleteElement(id)
    } else {
      setIsLiked(true)
      dispatch(addUserLikedMeals({ id }))
      axios.post('http://localhost/api/api/users/addLikedMeal.php', {
        userID,
        mealID: id,
      })
    }

    setTimeout(() => {
      iconElement.classList.toggle('fa-bounce')
    }, 1000)
  }
  const imageToRender = !isAddable
    ? `http://localhost/api/api/users/premium/${image}`
    : `http://localhost/api/api/meal/${image}`

  return (
    <div className="recipeItem">
      <img className="recipeItem--image" src={imageToRender} alt={title} />
      <div className="recipeItem--wrapper__outer">
        {isAddable && (
          <i
            className="fa-regular fa-heart"
            style={{ color: isLiked ? 'red' : 'black' }}
            onClick={handleClick}
          />
        )}
        <p className="recipeItem--title">{title}</p>
        <div className="recipeItem--wrapper">
          <Brick icon="\src\assets\person.svg" text={people} />
          <Brick icon="\src\assets\time.svg" text={time} />
          <Brick icon="\src\assets\kcal.svg" text={kcal} />
          <Brick icon="\src\assets\option.svg" text={mealoption} />
        </div>
        <Button onClick={handleNavigate} className="recipeItem--button">
          <p>Poznaj szczegóły</p>
        </Button>
      </div>
    </div>
  )
}

export default RecipeItem
