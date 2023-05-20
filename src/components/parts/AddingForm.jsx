/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Select from 'react-select'
import Input from './Input'
import '../../styles/AddingForm.css'

const AddingForm = ({ type }) => {
  const userID = useSelector((state) => state.person.id)
  const navigate = useNavigate()

  useEffect(() => {
    if (!userID) {
      navigate('/login')
    }
  }, [])

  const [formData, setFormData] = useState({
    userID,
    title: '',
    image: '',
    description: null,
    people: null,
    time: null,
    kcal: null,
    mealoption: null,
    sections: [{ name: '', description: '' }],
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

  const handleAdd = (
    title,
    description,
    sections,
    image,
    people,
    time,
    kcal,
    mealoption
  ) => {
    if (type === 'recipe') {
      axios
        .post(
          'http://localhost/api/api/meal/addMeal.php',
          {
            userID,
            title,
            description,
            sections,
            image,
            people,
            time,
            kcal,
            mealoption,
          },
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )
        .then(() => {
          navigate('/profile')
        })
    } else {
      axios
        .post(
          'http://localhost/api/api/users/blog/addPost.php',
          {
            userID,
            title,
            image,
            description,
            sections,
          },
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )
        .then(() => {
          navigate('/profile')
        })
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }
  const handleFileChange = (event) => {
    const { name, files } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: files[0],
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
      sections: [...prevFormData.sections, { name: '', description: '' }],
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
    handleAdd(
      formData.title,
      formData.description,
      formData.sections,
      formData.image,
      formData.people,
      formData.time,
      formData.kcal,
      formData.mealoption
    )
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
            onChange={handleFileChange}
          />
        </div>
        {type === 'recipe' ? (
          <>
            <div className="form-textarea">
              <div className="recipe">
                <label htmlFor="description">
                  Przepis (podaj kolejne kroki)
                </label>
              </div>
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="10"
                onChange={handleInputChange}
              />
            </div>
            <p>Szczegóły przepisu</p>
            <div>
              <Input
                label="Dla ilu osób"
                id="people"
                name="people"
                type="number"
                min="1"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Input
                label="Czas przygotowania w minutach"
                id="time"
                name="time"
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
                    mealoption: selectedOption.value,
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
                name="name"
                placeholder={text.section.name}
                value={ingredient.name}
                onChange={(event) => handleSectionChange(index, event)}
              />
              <Input
                type={text.section.type}
                name="description"
                placeholder={text.section.description}
                value={ingredient.description}
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
