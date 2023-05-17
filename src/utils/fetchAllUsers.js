/* eslint-disable arrow-body-style */
/* eslint-disable implicit-arrow-linebreak */
// import axios from 'axios'

const fetchAllUsers = async () => {
  try {
    const response = await fetch('http://localhost/api/api/users/getUsers.php')
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}
export default fetchAllUsers
