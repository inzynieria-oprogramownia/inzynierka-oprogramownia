/* eslint-disable react/no-array-index-key */
import React from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import Page from '../parts/Page'
import CommentForm from '../parts/CommentForm'
import '../../styles/blogEntry.css'
import fetchBlogData from '../../utils/fetchBlogData'
import usePostData from '../../hooks/usePostData'

const BlogEntry = () => {
  const isLogged = true
  const dispatch = useDispatch()
  const id = useParams()
  fetchBlogData(dispatch, id)
  const data = usePostData()

  return (
    <Page>
      <header
        className="entry-header"
        style={{ backgroundImage: `url(${data.image})` }}
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
          <img src={data.image} alt="entry" />
        </div>
        {data.sections.map((section, index) => (
          <div className="entry-box" key={index}>
            <h2>{section.sec1}</h2>
            <p>{section.sec2}</p>
          </div>
        ))}
        <div className="entry-comment">
          <h2>Komentarze</h2>
          {data.comments.map((comment) => (
            <div className="comment-box" key={comment.id}>
              <h3>
                <span className="nick">{comment.nick}</span>
              </h3>
              <p className="comment">{comment.text}</p>
            </div>
          ))}
          {isLogged ? (
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
