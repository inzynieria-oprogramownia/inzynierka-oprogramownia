/* eslint-disable operator-linebreak */
import React from 'react'
import Button from './Button'
import '../../styles/postItem.css'

const PostItem = ({ data, horizontal }) => {
  const { title, genre, date, description, img } = data
  const imgClassName = horizontal ? 'post--img small' : 'post--img'
  const wrapperClassName = horizontal ? 'post--wrapper large' : 'post--wrapper'
  const postClassName = horizontal ? 'post horizontal' : 'post'
  const genreWords = genre.join(', ')
  return (
    <article className={postClassName}>
      <img src={img} className={imgClassName} alt={title} />
      <div className={wrapperClassName}>
        <p className="post--genre">{genreWords}</p>
        <p className="post--date">{date}</p>
        <h4 className="post--title">{title}</h4>
        <p className="post--description">{description}</p>
        <Button className="post--button">Czytaj Dalej</Button>
      </div>
    </article>
  )
}

export default PostItem
