import { createSlice } from '@reduxjs/toolkit'
import {
  setTitle,
  setImg,
  setData,
  setSections,
  setComments,
  setDate,
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
  },
})
export const {
  setPostTitle,
  setPostImg,
  setPostData,
  setPostSections,
  setPostComments,
} = postSlice.actions
export default postSlice.reducer
