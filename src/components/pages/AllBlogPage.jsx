import React from 'react'
import Page from '../parts/Page'
import AllComponent from '../parts/AllComponent'

const AllBlogPage = () => {
  const postItemData = {
    title: 'Piosenki opole mock 2020',
    description:
      'Wlazł kotek na płotek i mruga krótka to piosenka nie długa. Koziołek matołek stuka w stołek',
    genre: ['test1', 'test2'],
    img: '..\\src\\assets\\blogEntry\\entry.png',
    date: '20 kwietnia 2020',
  }

  return (
    <Page>
      <AllComponent data={postItemData} type="blog" />
    </Page>
  )
}

export default AllBlogPage
