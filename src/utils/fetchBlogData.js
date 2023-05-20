/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios'
import { setPostData } from '../redux/slices/post'

const fetchBlogData = async (dispatch, id) => {
  try {
    const response = await axios.get(
      `http://localhost/api/api/users/blog/getPost.php?id=${id}`
    )
    dispatch(setPostData(response.data.data))
  } catch (error) {
    console.error(error)
  }
}

export default fetchBlogData
