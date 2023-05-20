/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Page from '../parts/Page'
import CommentForm from '../parts/CommentForm'
import '../../styles/blogEntry.css'

import usePostData from '../../hooks/usePostData'

const BlogEntry = () => {
  const [comments, setComments] = useState([])
  const isLoggedIn = useSelector((state) => state.person.login)
  const data = usePostData()
  useEffect(() => {
    setComments(data.comments)
  }, [data.comments])
  const imageToRender = `http://localhost/api/api/users/blog/${data.image}`
  return (
    <Page>
      <header
        className="entry-header"
        style={{ backgroundImage: `url(${imageToRender})` }}
      >
        <div>
          <h1>{data.title}</h1>
        </div>
      </header>
      <section className="entry">
        <div className="entry-title-box">
          <p className="entry-date">{data.date}</p>
          <h2>{data.title}</h2>
        </div>
        <div className="entry-image">
          <img src={imageToRender} alt="entry" />
        </div>
        {comments.map((section, index) => (
          <div className="entry-box" key={index}>
            <h2>{section.name}</h2>
            <p>{section.description}</p>
          </div>
        ))}
        <div className="entry-comment">
          <h2>Komentarze</h2>
          {data.comments.map(
            (comment, i) =>
              comment.login && (
                <div className="comment-box" key={i}>
                  <h3>
                    <span className="nick">{comment.login}</span>
                  </h3>
                  <p className="comment">{comment.comment}</p>
                </div>
              )
          )}
          {isLoggedIn ? (
            <CommentForm />
          ) : (
            <div>
              <p>Musisz byc zalogowany żeby zostawić komentarz!</p>
            </div>
          )}
        </div>
      </section>
    </Page>
  )
}

export default BlogEntry
