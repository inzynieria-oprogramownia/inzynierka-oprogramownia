export const setName = (state, action) => {
  state.name = action.payload
}
export const setPassword = (state, action) => {
  state.password = action.payload
}
export const setEmail = (state, action) => {
  state.email = action.payload
}
export const setLikedMeals = (state, action) => {
  state.likeMeals = action.payload
}
export const setCreatedMeals = (state, action) => {
  state.createdMeals = action.payload
}
export const setWeight = (state, action) => {
  state.weight = action.payload
}
export const addLikedMeals = (state, action) => {
  state.likeMeals.push(action.payload)
}
export const addWeight = (state, action) => {
  state.weight.push(action.payload)
}
export const setData = (state, action) => {
  const { payload } = action
  state.name = payload.name
  state.password = payload.password
  state.email = payload.email
  state.likeMeals = payload.likedMeals
  state.createdMeals = payload.createdMeals
  state.weight = payload.weight
}
