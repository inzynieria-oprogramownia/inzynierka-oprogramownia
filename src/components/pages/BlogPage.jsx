/* eslint-disable no-useless-escape */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Page from '../parts/Page'
import Heading from '../parts/Heading'
import PostItem from '../parts/PostItem'
import Button from '../parts/Button'
import RecipeItem from '../parts/RecepieItem'

import '../../styles/blogPage.css'

const PostItemMockData = {
  title: 'Piosenki opole mock 2020',
  description:
    'Wlazł kotek na płotek i mruga krótka to piosenka nie długa. Koziołek matołek stuka w stołek',
  genre: ['test1', 'test2'],
  // eslint-disable-next-line prettier/prettier
  img: 'src\\assets\\welcomePage\\main.png',
  date: '20 kwietnia 2020',
}
const recepieItemData = {
  title: 'Wegetariańska tortilla zwarzywami i ryżem',
  // eslint-disable-next-line prettier/prettier
  img: 'src\\assets\\welcomePage\\main.png',
  person: 1,
  time: '20min.',
  kcal: '200kcal',
  option: 'redukcja',
}

const BlogPage = () => {
  const navigate = useNavigate()

  const handleClick = (url) => {
    navigate(url)
    window.scrollTo(0, 0)
  }

  return (
    <Page>
      <section className="blog">
        <section className="dayli">
          <Heading className="dayli--heading" type="primary">
            <h2>Wpis dnia</h2>
          </Heading>
          <PostItem horizontal data={PostItemMockData} />
        </section>
        <section className="fitatuBlog">
          <Heading className="fitatuBlog--heading" type="secondary">
            <h3>Fitatu blog </h3>
          </Heading>
          <div className="fitatuBlog--wrapper">
            <PostItem data={PostItemMockData} />
            <PostItem data={PostItemMockData} />
            <PostItem data={PostItemMockData} />
          </div>
          <Button
            className="fitatuBlog--button"
            onClick={() => {
              handleClick('/blog/all')
            }}
          >
            <p>Wszystkie wpisy</p>
          </Button>
        </section>
        <div className="add">GORACE OFERTY W TWOJEJ OKOLICY HIT!!!</div>
        <section className="recepies">
          <Heading className="recepies--heading" type="primary">
            <h4>Twoje Przepisy</h4>
          </Heading>
          <div className="recepies--wrapper">
            <RecipeItem data={recepieItemData} />
            <RecipeItem data={recepieItemData} />
            <RecipeItem data={recepieItemData} />
          </div>
          <div className="recepies--wrapper__buttons">
            <Button
              className="recepies--button"
              onClick={() => {
                handleClick('')
                // dodac strone do dodania przepisu
              }}
            >
              <p>Dodaj przepis</p>
            </Button>
            <Button
              className="recepies--button"
              onClick={() => {
                handleClick('/food')
              }}
            >
              <p>Wszystkie przepisy</p>
            </Button>
          </div>
        </section>
      </section>
    </Page>
  )
}

export default BlogPage
