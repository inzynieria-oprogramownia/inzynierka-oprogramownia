import React, { useState } from 'react'

const CommentForm = () => {
  const [comment, setComment] = useState('')
  const [isEmpty, setIsEmpty] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (comment.trim()) {
      // wysłanie komentarza
    } else {
      // disable input
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
