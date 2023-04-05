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
        text="Świetna aplikacja, chyba nie miałem jeszcze sytuacji żeby nie było produktu któego szukałem, a przy tym aplikacja nie wtrąca się w to co robimy :-)"
        user="Krzysztof K."
        rate={5}
      />
    </div>
  )
}

export default App
