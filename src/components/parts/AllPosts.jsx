import React from 'react'
import useFetch from '../../hooks/useFetch'
import AllComponent from './AllComponent'

const AllPosts = ({ id, panel }) => {
  const [posts] = useFetch(
    `http://localhost/api/api/users/blog/getUsersPosts.php?userid=${id}`,
    panel
  )
  return <AllComponent render={posts?.posts} type="blog" />
}

export default AllPosts
