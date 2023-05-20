/* eslint-disable operator-linebreak */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import fetchBlogData from '../../utils/fetchBlogData'
import Button from './Button'
import '../../styles/postItem.css'

const PostItem = ({ data, horizontal }) => {
  const dispatch = useDispatch()
  const navigateTo = useNavigate()
  const handleNavigate = (e) => {
    e.preventDefault()
    fetchBlogData(dispatch, data.id).then(() => {
      navigateTo(`/blog/${data.id}`)
    })
  }
  const { title, date, sections, image } = data
  const imageToRender = `http://localhost/api/api/users/blog/${image}`
  const imgClassName = horizontal ? 'post--img small' : 'post--img'
  const wrapperClassName = horizontal ? 'post--wrapper large' : 'post--wrapper'
  const postClassName = horizontal ? 'post horizontal' : 'post'
  return (
    <article className={postClassName}>
      <img src={imageToRender} className={imgClassName} alt={title} />
      <div className={wrapperClassName}>
        <p className="post--date">{date}</p>
        <h4 className="post--title">{title}</h4>
        <p className="post--description">{sections[0].description}</p>
        <Button onClick={handleNavigate} className="post--button">
          Czytaj Dalej
        </Button>
      </div>
    </article>
  )
}

export default PostItem
