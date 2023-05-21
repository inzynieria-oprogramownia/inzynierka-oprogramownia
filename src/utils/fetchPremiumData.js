/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios'
import { setRecipeData } from '../redux/slices/recipe'

const fetchPremiumData = async (dispatch, id) => {
  try {
    const response = await axios.get(
      `http://localhost/api/api/users/premium/getPremiumMeal.php?id=${id}`
    )
    dispatch(setRecipeData(response.data.data))
  } catch (error) {
    console.error(error)
  }
}

export default fetchPremiumData
