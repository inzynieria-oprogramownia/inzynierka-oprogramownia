import { createSlice } from '@reduxjs/toolkit'
import {
  setName,
  setEmail,
  setLikedMeals,
  setPassword,
  setCreatedMeals,
  setData,
  setWeight,
  addWeight,
  addLikedMeals,
} from '../reducers/user'

export const initialState = {
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
    addUserWeight: addWeight,
    addUserLikedMeals: addLikedMeals,
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
  addUserWeight,
  addUserLikedMeals,
} = personSlice.actions
export default personSlice.reducer
