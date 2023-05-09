import React from 'react'
import Input from './Input'
import PostItem from './PostItem'
import RecipeItem from './RecepieItem'
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

  handleTypeCheck()

  return (
    <section className="allComponent">
      <div className="allComponent--search">
        <Input label="Search" />
      </div>
      <div className="allComponent--wrapper">
        {numbers.map((el) => handleTypeCheck(el))}
      </div>
    </section>
  )
}

export default AllComponent
