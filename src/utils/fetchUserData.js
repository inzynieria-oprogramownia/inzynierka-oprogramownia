/* eslint-disable import/no-extraneous-dependencies */
// import axios from 'axios'
import { setUserData } from '../redux/slices/user'

const responseData = {
  data: {
    name: 'jan',
    password: 'kowalski',
    email: 'test@test.com',
    likedMeals: ['1', '2'],
    createdMeals: ['1', '2'],
    weight: [{ date: '12.12.2012', value: 80 }],
  },
}
const fetchUserData = async (dispatch) => {
  try {
    const response = responseData // await axios.get('www.pl.pl')
    dispatch(setUserData(response.data))
  } catch (error) {
    console.error(error)
  }
}

export default fetchUserData
