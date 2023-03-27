import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setExample } from './redux/slices/example'

function App() {
  const value = useSelector((state) => state.example.value)
  const dispach = useDispatch()
  return (
    <div className="App">
      <input onChange={(e) => dispach(setExample(e.target.value))} />
      <p>{value}</p>
    </div>
  )
}

export default App
