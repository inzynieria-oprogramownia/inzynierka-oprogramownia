import { createSlice } from '@reduxjs/toolkit'
import {
  setTitle,
  setImg,
  setDate,
  setSections,
  setComments,
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
    setPostDate: setDate,
    setPostSections: setSections,
    setPostComments: setComments,
  },
})
export const {
  setPostTitle,
  setPostImg,
  setPostDate,
  setPostSections,
  setPostComments,
} = postSlice.actions
export default postSlice.reducer
