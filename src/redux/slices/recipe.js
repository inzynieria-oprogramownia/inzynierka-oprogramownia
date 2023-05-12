import { createSlice } from '@reduxjs/toolkit'
import {
  setImg,
  setTime,
  setTitle,
  setDate,
  setDescription,
  setKcal,
  setOption,
  setIngredients,
  setData,
} from '../reducers/recipe'

const initialState = {
  backgroundImage: null,
  title: null,
  date: null,
  description: null,
  time: null,
  people: null,
  kcal: null,
  option: null,
  ingredients: [],
}
export const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    setRecipeImg: setImg,
    setRecipeTime: setTime,
    setRecipeTitle: setTitle,
    setRecipeDate: setDate,
    setRecipeDescription: setDescription,
    setRecipeKcal: setKcal,
    setRecipeOption: setOption,
    setRecipeIngredients: setIngredients,
    setRecipeData: setData,
  },
})
export const {
  setRecipeImg,
  setRecipeTime,
  setRecipeTitle,
  setRecipeDate,
  setRecipeDescription,
  setRecipeKcal,
  setRecipeOption,
  setRecipeIngredients,
  setRecipeData,
} = recipeSlice.actions
export default recipeSlice.reducer
