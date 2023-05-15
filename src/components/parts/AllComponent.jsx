import React from 'react'
import { useNavigate } from 'react-router-dom'
import Input from './Input'
import PostItem from './PostItem'
import RecipeItem from './RecepieItem'
import Button from './Button'
import '../../styles/allComponent.css'

const AllComponent = ({ data, type }) => {
  const numbers = []

  while (numbers.length < 50) {
    const randomNumber = Math.floor(Math.random() * 50)
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber)
    }
  }

  const handleTypeCheck = (el) => {
    if (type === 'blog') {
      return <PostItem key={el} data={data} />
    }
    return <RecipeItem key={el} data={data} />
  }

  const navigate = useNavigate()

  const handleClick = (url) => {
    navigate(url)
    window.scrollTo(0, 0)
  }

  handleTypeCheck()

  return (
    <section className="allComponent">
      <div className="allComponent--search">
        <Input placeholder="Szukaj" />
        {type === 'blog' ? (
          <Button
            className="fitatuBlog--button profile-btn"
            onClick={() => {
              handleClick('/addPost')
            }}
          >
            <p>Dodaj wpis</p>
          </Button>
        ) : (
          <Button
            className="fitatuBlog--button profile-btn"
            onClick={() => {
              handleClick('/addRecipe')
            }}
          >
            <p>Dodaj przepis</p>
          </Button>
        )}
      </div>
      <div className="allComponent--wrapper">
        {numbers.map((el) => handleTypeCheck(el))}
      </div>
    </section>
  )
}

export default AllComponent
