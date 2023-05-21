export const setName = (state, action) => {
  state.login = action.payload
}
export const setPassword = (state, action) => {
  state.password = action.payload
}
export const setEmail = (state, action) => {
  state.email = action.payload
}
export const setLikedMeals = (state, action) => {
  state.liked_meals = action.payload
}
export const setCreatedMeals = (state, action) => {
  state.created_meals = action.payload
}
export const setWeight = (state, action) => {
  state.user_weights = action.payload
}
export const addLikedMeals = (state, action) => {
  state.liked_meals.push(action.payload)
}
export const addWeight = (state, action) => {
  state.user_weights.push(action.payload)
}
export const setPremium = (state, action) => {
  state.premium = action.payload
}
export const setData = (state, action) => {
  const { payload } = action
  state.id = payload.id
  state.login = payload.login
  state.password = payload.password
  state.email = payload.email
  state.liked_meals = payload.liked_meals
  state.created_meals = payload.created_meals
  state.user_weights = payload.user_weights
  state.premium = payload.premium
}
