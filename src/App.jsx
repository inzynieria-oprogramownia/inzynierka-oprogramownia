import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setExample } from './redux/slices/example'
import Review from './components/parts/Review'

const App = () => {
  const value = useSelector((state) => state.example.value)
  const dispach = useDispatch()
  return (
    <div className="App">
      <input onChange={(e) => dispach(setExample(e.target.value))} />
      <p>{value}</p>
      <Review
        text="Jak to się mówi Płyn Chodnikowy wlewamy
        Miałeś lotnisko robić, robisz?
        Od tyłu, 3 centymetry bliżej"
        user="Jan Ł Borodo"
        rate={2}
      />
    </div>
  )
}

export default App
