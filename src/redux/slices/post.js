import { createSlice } from '@reduxjs/toolkit'
import {
  setTitle,
  setImg,
  setData,
  setSections,
  setComments,
  setDate,
  addComment,
} from '../reducers/post'

const initialState = {
  title: null,
  image: null,
  date: null,
  sections: [],
  comments: [],
}
export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPostTitle: setTitle,
    setPostImg: setImg,
    setPostData: setData,
    setPostSections: setSections,
    setPostComments: setComments,
    setPostDate: setDate,
    addPostComment: addComment,
  },
})
export const {
  setPostTitle,
  setPostImg,
  setPostData,
  setPostSections,
  setPostComments,
  addPostComment,
} = postSlice.actions
export default postSlice.reducer
