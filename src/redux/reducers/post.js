export const setTitle = (state, action) => {
  state.title = action.payload
}
export const setImg = (state, action) => {
  state.image = action.payload
}
export const setDate = (state, action) => {
  state.date = action.payload
}
export const setSections = (state, action) => {
  state.sections = action.payload
}
export const setComments = (state, action) => {
  state.comments = action.payload
}
export const addComment = (state, action) => {
  state.comments.push(action.payload)
}
export const setData = (state, action) => {
  const { payload } = action
  state.title = payload.title
  state.image = payload.image
  state.date = payload.date
  state.sections = payload.sections
  state.comments = payload.comments
}
