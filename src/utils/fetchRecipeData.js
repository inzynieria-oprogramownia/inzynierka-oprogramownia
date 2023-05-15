/* eslint-disable import/no-extraneous-dependencies */
// import axios from 'axios'
import { setRecipeData } from '../redux/slices/recipe'

const responseData = {
  data: {
    backgroundImage: '../src/assets/welcomePage/main.png',
    title: 'est',
    date: '20.12.2020',
    description: 'To jest test tego czy to bedzie dzialac czy nie',
    time: '20',
    people: 2,
    kcal: 232,
    option: 'Redukcja',
    ingredients: ['dupa', 'kwas'],
  },
}
const fetchRecipeData = async (dispatch, id) => {
  try {
    console.log(id)
    const response = responseData // await axios.get('www.pl.pl')
    dispatch(setRecipeData(response.data))
  } catch (error) {
    console.error(error)
  }
}

export default fetchRecipeData
