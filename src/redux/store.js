import { configureStore } from '@reduxjs/toolkit'
import exampleReducer from './slices/example'

const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
})
export default store
