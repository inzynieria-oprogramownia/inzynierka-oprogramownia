import { createSlice } from '@reduxjs/toolkit'
import {
  setName,
  setEmail,
  setLikedMeals,
  setPassword,
  setCreatedMeals,
  setData,
  setWeight,
} from '../reducers/user'

const initialState = {
  name: null,
  email: null,
  password: null,
  likeMeals: [],
  createdMeals: [],
  weight: [],
}
export const personSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {
    setUserName: setName,
    setUserEmail: setEmail,
    setUserLikedMeals: setLikedMeals,
    setUserPassword: setPassword,
    setUserCreatedMeals: setCreatedMeals,
    setUserData: setData,
    setUserWeight: setWeight,
  },
})
export const {
  setUserName,
  setUserEmail,
  setUserLikedMeals,
  setUserPassword,
  setUserCreatedMeals,
  setUserData,
  setUserWeight,
} = personSlice.actions
export default personSlice.reducer
