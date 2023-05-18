/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios'
import { setUserData } from '../redux/slices/user'

const fetchUserData = async (dispatch, id) => {
  try {
    const response = await axios.get(
      `http://localhost/api/api/users/getUser.php?id=${id}`
    )
    dispatch(setUserData(response.data.data))
  } catch (error) {
    console.error(error)
  }
}

export default fetchUserData
