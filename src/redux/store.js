import { configureStore } from '@reduxjs/toolkit'
import personReducer from './slices/user'
import postReducer from './slices/post'
import recipeReducer from './slices/recipe'

const store = configureStore({
  reducer: {
    person: personReducer,
    post: postReducer,
    recipe: recipeReducer,
  },
})
export default store
