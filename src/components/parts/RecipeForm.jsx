/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import Select from 'react-select'
import Input from './Input'
import '../../styles/recipeForm.css'

const RecipeForm = () => {
  const [ingredients, setIngredients] = useState([
    { ingredient: '', weight: '' },
  ])

  const options = [
    { value: 'redukcja', label: 'Redukcja' },
    { value: 'masa', label: 'Masa' },
  ]

  const handleIngredientChange = (index, event) => {
    const { name, value } = event.target
    const newIngredients = [...ingredients]
    newIngredients[index][name] = value
    setIngredients(newIngredients)
  }

  const addIngredientBox = () => {
    setIngredients([...ingredients, { ingredient: '', weight: '' }])
  }

  const removeIngredientBox = (index) => {
    const newIngredients = [...ingredients]
    newIngredients.splice(index, 1)
    setIngredients(newIngredients)
  }

  const handleFormSend = (event) => {
    event.preventDefault()
  }
  return (
    <div className="recipe-form">
      <form action="" onSubmit={handleFormSend}>
        <div>
          <Input label="Tytuł" id="title" name="title" />
        </div>
        <div>
          <Input id="image" name="image" type="file" />
        </div>
        <div>
          <div>
            <label htmlFor="recipe">Przepis (podaj kolejne kroki)</label>
          </div>
          <textarea name="recipe" id="recipe" cols="30" rows="10" />
        </div>
        <p>Szczegóły przepisu</p>
        <div>
          <Input
            label="Dla ilu osób"
            id="personNumber"
            name="personNumber"
            type="number"
            min="1"
          />
        </div>
        <div>
          <Input
            label="Czas przygotowania w minutach"
            id="timeToPrepare"
            name="timeToPrepare"
            type="number"
            min="1"
          />
        </div>
        <div>
          <Input
            label="Kaloryczność"
            id="kcal"
            name="kcal"
            type="number"
            min="0"
          />
        </div>
        <div className="select">
          <Select options={options} placeholder="Dieta" />
        </div>
        <p>Składniki</p>
        <div className="ingredients">
          {ingredients.map((ingredient, index) => (
            <div className="ingredients-box" key={index}>
              <Input
                name="ingredient"
                type="text"
                placeholder="Składnik"
                value={ingredient.ingredient}
                onChange={(event) => handleIngredientChange(index, event)}
              />
              <Input
                type="number"
                name="weight"
                placeholder="Waga"
                value={ingredient.weight}
                onChange={(event) => handleIngredientChange(index, event)}
                min="1"
              />
              <div className="delete-box">
                <button
                  type="button"
                  onClick={() => removeIngredientBox(index)}
                >
                  X
                </button>
              </div>
            </div>
          ))}
          <button type="button" onClick={addIngredientBox} className="add-btn">
            Dodaj składnik
          </button>
        </div>
        <input type="submit" value="Dodaj przepis" />
      </form>
    </div>
  )
}

export default RecipeForm
