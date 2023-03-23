import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'initialValue',
}
export const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    setExample: (state, action) => {
      state.value = action.payload
    },
  },
})
export const { setExample } = exampleSlice.actions
export default exampleSlice.reducer
