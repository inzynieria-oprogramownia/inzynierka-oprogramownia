/* eslint-disable prefer-destructuring */
/* eslint-disable no-useless-escape */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Page from '../parts/Page'
import Heading from '../parts/Heading'
import PostItem from '../parts/PostItem'
import Button from '../parts/Button'
import RecipeItem from '../parts/RecepieItem'
import '../../styles/blogPage.css'

const BlogPage = () => {
  const [posts, setPosts] = useState({})
  const [recipes, setRecipes] = useState([])
  const navigate = useNavigate()
  const { isLoggedIn, premium } = useSelector((state) => state.person)

  const handleClick = (url) => {
    navigate(url)
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsPromise = axios.get(
          'http://localhost/api/api/users/blog/getPosts.php'
        )
        const recipesPromise = axios.get(
          'http://localhost/api/api/meal/getMeals.php'
        )
        const [postsResponse, recipesResponse] = await Promise.all([
          postsPromise,
          recipesPromise,
        ])

        setPosts(postsResponse.data)
        setRecipes(recipesResponse.data.data)
      } catch (error) {
        console.error('Błąd: ', error)
      }
    }

    fetchData()
  }, [])

  let latestPost = null
  let remainingPosts = []
  if (posts.data && posts.data.posts && posts.data.posts.length > 0) {
    const sortedPosts = [...posts.data.posts].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    )
    latestPost = sortedPosts[0]
    remainingPosts = sortedPosts.slice(1, 4)
  }

  return (
    <Page>
      <section className="blog">
        <section className="dayli">
          <Heading className="dayli--heading" type="primary">
            <h2>Wpis dnia</h2>
          </Heading>
          {latestPost && <PostItem horizontal data={latestPost} />}
        </section>
        <section className="fitatuBlog">
          <Heading className="fitatuBlog--heading" type="secondary">
            <h3>Fitatu blog </h3>
          </Heading>
          <div className="fitatuBlog--wrapper">
            {remainingPosts.map((post) => (
              <PostItem key={post.id} data={post} />
            ))}
          </div>
          <div className="recepies--wrapper__buttons">
            {isLoggedIn ? (
              <Button
                className="fitatuBlog--button"
                onClick={() => {
                  handleClick('/addPost')
                }}
              >
                <p>Dodaj wpis</p>
              </Button>
            ) : null}
            <Button
              className="fitatuBlog--button"
              onClick={() => {
                handleClick('/blog/all')
              }}
            >
              <p>Wszystkie wpisy</p>
            </Button>
          </div>
        </section>
        {premium === '0' && (
          <div className="add">GORACE OFERTY W TWOJEJ OKOLICY HIT!!!</div>
        )}
        <section className="recepies">
          <Heading className="recepies--heading" type="primary">
            <h4>Ostatnie przepisy</h4>
          </Heading>
          <div className="recepies--wrapper">
            {recipes.slice(-3)?.map((recipe) => (
              <RecipeItem key={recipe.id} data={recipe} isAddable />
            ))}
          </div>
          <div className="recepies--wrapper__buttons">
            {isLoggedIn ? (
              <Button
                className="recepies--button"
                onClick={() => {
                  handleClick('/addRecipe')
                }}
              >
                <p>Dodaj przepis</p>
              </Button>
            ) : null}
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
