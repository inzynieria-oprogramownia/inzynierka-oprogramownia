import React from 'react'

import Page from '../parts/Page'
import AllComponent from '../parts/AllComponent'
import useFetch from '../../hooks/useFetch'

const AllBlogPage = () => {
  const [data] = useFetch('http://localhost/api/api/users/blog/getPosts.php')
  console.log(data)
  return (
    <Page>
      <AllComponent render={data?.posts} type="blog" />
    </Page>
  )
}

export default AllBlogPage
