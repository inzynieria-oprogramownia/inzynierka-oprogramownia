export const setImg = (state, action) => {
  state.backgroundImage = action.payload
}
export const setTitle = (state, action) => {
  state.title = action.payload
}
export const setDate = (state, action) => {
  state.date = action.payload
}
export const setDescription = (state, action) => {
  state.description = action.payload
}
export const setTime = (state, action) => {
  state.time = action.payload
}
export const setKcal = (state, action) => {
  state.kcal = action.payload
}
export const setOption = (state, action) => {
  state.option = action.payload
}
export const setIngredients = (state, action) => {
  state.ingredients = action.payload
}
export const setData = (state, action) => {
  const { payload } = action
  state.backgroundImage = payload.backgroundImage
  state.title = payload.title
  state.date = payload.date
  state.description = payload.description
  state.time = payload.time
  state.kcal = payload.kcal
  state.option = payload.option
  state.ingredients = payload.ingredients
}
