import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from './Input'
import PostItem from './PostItem'
import RecipeItem from './RecepieItem'
import Button from './Button'
import '../../styles/allComponent.css'

const AllComponent = ({ render, type }) => {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const handleClick = (url) => {
    navigate(url)
    window.scrollTo(0, 0)
  }
  useEffect(() => {
    setData(render)
  }, [render])

  const deleteElementHandler = (id) => {
    const newData = data?.filter((el) => el.id !== id)
    setData(newData)
  }
  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }
  const filteredData = data?.filter((el) => {
    const pattern = new RegExp(searchTerm, 'i')
    return pattern.test(el.title)
  })

  const ComponentToRender = type === 'blog' ? PostItem : RecipeItem
  return (
    <section className="allComponent">
      <div className="allComponent--search">
        <Input placeholder="Szukaj" onChange={handleSearch} />
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
        {filteredData?.map((el) => (
          <ComponentToRender
            isAddable
            deleteElement={type === 'likedMeals' ? deleteElementHandler : null}
            key={JSON.stringify(el)}
            data={el}
          />
        ))}
      </div>
    </section>
  )
}

export default AllComponent
