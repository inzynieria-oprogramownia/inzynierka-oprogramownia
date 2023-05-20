import React, { useState } from 'react'
import axios from 'axios'
import Page from '../parts/Page'
import AllComponent from '../parts/AllComponent'

const AllBlogPage = () => {
  const [state, setState] = useState([])
  axios
    .get('http://localhost/api/api/users/blog/getPosts.php')
    .then((response) => {
      setState(response.data.data.posts)
    })
  return (
    <Page>
      <AllComponent render={state} type="blog" />
    </Page>
  )
}

export default AllBlogPage
