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
  setPremium,
} from '../reducers/user'

export const initialState = {
  id: null,
  login: null,
  email: null,
  password: null,
  liked_meals: [],
  created_meals: [],
  user_weights: [],
  premium: false,
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
    setUserPremium: setPremium,
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
  setUserPremium,
} = personSlice.actions
export default personSlice.reducer
