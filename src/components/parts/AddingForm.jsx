/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import Select from 'react-select'
import Input from './Input'
import '../../styles/AddingForm.css'

const AddingForm = ({ type }) => {
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    recipe: null,
    personNumber: null,
    timeToPrepare: null,
    kcal: null,
    diet: null,
    sections: [{ sec1: '', sec2: '' }],
  })

  const options = [
    { value: 'redukcja', label: 'Redukcja' },
    { value: 'masa', label: 'Masa' },
    { value: 'bialko', label: 'Wysokobiałkowe' },
  ]

  let text = {}

  if (type === 'recipe') {
    text = {
      heading: ' przepisu',
      section: {
        name: 'Składniki',
        sec1: 'Składnik',
        sec2: 'Waga',
        type: 'number',
      },
      btn1: 'Dodaj składnik',
      btn2: 'Dodaj przepis',
    }
  } else {
    text = {
      heading: ' wpisu',
      section: {
        name: 'Akapity',
        sec1: 'Nagłówek',
        sec2: 'Treść',
        type: 'text',
      },
      btn1: 'Dodaj akapit',
      btn2: 'Dodaj wpis',
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const handleSectionChange = (index, event) => {
    const { name, value } = event.target
    const newSections = [...formData.sections]
    newSections[index][name] = value
    setFormData((prevFormData) => ({
      ...prevFormData,
      sections: newSections,
    }))
  }

  const addSectionBox = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      sections: [...prevFormData.sections, { sec1: '', sec2: '' }],
    }))
  }

  const removeSectionBox = (index) => {
    const newSections = [...formData.sections]
    newSections.splice(index, 1)
    setFormData((prevFormData) => ({
      ...prevFormData,
      sections: newSections,
    }))
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    // formData
  }
  return (
    <div className="addingForm">
      <form action="POST" onSubmit={handleFormSubmit}>
        <h2>
          Tworzenie
          {text.heading}
        </h2>
        <div>
          <Input
            label="Tytuł"
            id="title"
            name="title"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Input
            id="image"
            name="image"
            type="file"
            onChange={handleInputChange}
          />
        </div>
        {type === 'recipe' ? (
          <>
            <div>
              <div className="recipe">
                <label htmlFor="recipe">Przepis (podaj kolejne kroki)</label>
              </div>
              <textarea
                name="recipe"
                id="recipe"
                cols="30"
                rows="10"
                onChange={handleInputChange}
              />
            </div>
            <p>Szczegóły przepisu</p>
            <div>
              <Input
                label="Dla ilu osób"
                id="personNumber"
                name="personNumber"
                type="number"
                min="1"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Input
                label="Czas przygotowania w minutach"
                id="timeToPrepare"
                name="timeToPrepare"
                type="number"
                min="1"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Input
                label="Kaloryczność"
                id="kcal"
                name="kcal"
                type="number"
                min="0"
                onChange={handleInputChange}
              />
            </div>
            <div className="select">
              <Select
                options={options}
                placeholder="Dieta"
                onChange={(selectedOption) =>
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    diet: selectedOption.value,
                  }))
                }
              />
            </div>
          </>
        ) : null}
        <p>{text.section.name}</p>
        <div className="sections">
          {formData.sections.map((ingredient, index) => (
            <div className="sections-box" key={index}>
              <Input
                type="text"
                name="sec1"
                placeholder={text.section.sec1}
                value={ingredient.sec1}
                onChange={(event) => handleSectionChange(index, event)}
              />
              <Input
                type={text.section.type}
                name="sec2"
                placeholder={text.section.sec2}
                value={ingredient.sec2}
                onChange={(event) => handleSectionChange(index, event)}
                min="1"
              />
              <div className="delete-box">
                <button type="button" onClick={() => removeSectionBox(index)}>
                  X
                </button>
              </div>
            </div>
          ))}
          <button type="button" onClick={addSectionBox} className="add-btn">
            {text.btn1}
          </button>
        </div>
        <input type="submit" value={text.btn2} />
      </form>
    </div>
  )
}

export default AddingForm
