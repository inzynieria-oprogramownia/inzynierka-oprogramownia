import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addPostComment } from '../../redux/slices/post'

const CommentForm = () => {
  const { id: userID, login } = useSelector((state) => state.person)
  // const { comments } = useSelector((state) => state.post)
  const { id } = useParams()
  const dispatch = useDispatch()
  const [comment, setComment] = useState('')
  const [isEmpty, setIsEmpty] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (comment.trim()) {
      axios.post(
        'http://localhost/api/api/users/blog/comments/addComment.php',
        { userID, postID: id, comment }
      )
      dispatch(addPostComment({ login, comment }))
    } else {
      console.log('nie wyslalem')
    }
  }

  const handleChange = (e) => {
    setComment(e.target.value)
    if (e.target.value) {
      setIsEmpty(false)
    } else {
      setIsEmpty(true)
    }
  }

  return (
    <div className="comment-form">
      <h3>Pozostaw komentarz</h3>
      <p>Komentarz</p>
      <form method="POST" onSubmit={handleSubmit}>
        <textarea
          name="comment-text"
          id="comment-text"
          cols="30"
          rows="10"
          onChange={handleChange}
        />
        <div>
          <input type="submit" value="Wyślij komentarz" disabled={isEmpty} />
        </div>
      </form>
    </div>
  )
}

export default CommentForm
