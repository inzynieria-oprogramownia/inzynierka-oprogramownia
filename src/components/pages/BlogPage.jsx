/* eslint-disable no-useless-escape */
import React from 'react'
import Page from '../parts/Page'
import Heading from '../parts/Heading'
import PostItem from '../parts/PostItem'
import Button from '../parts/Button'
import '../../styles/blogPage.css'

const PostItemMockData = {
  title: 'Dupa',
  description:
    'loajsdlkasj kajsdl asjdlahqkjwehkqjwhekqwjhekjqwhekjqwhkjajsldasdlaksdjalsjdlasjdlaksdjdaklsjdklasjdlkasjlaklsdalksdjlaksdjlkasjdlkjdlkajsdlkajsldkjaslkdjalskdjklasdjlehqkwehkqwhekqwjhksd jlaks jd',
  genre: ['cyce', 'wadowice'],
  // eslint-disable-next-line prettier/prettier
  img: 'src\\assets\\welcomePage\\main.png',
  date: '20 kwietnia 2020',
}
const BlogPage = () => (
  <Page>
    <section className="blog">
      <section className="dayli">
        <Heading className="dayli--heading" type="primary">
          <h2>Wpis dnia</h2>
        </Heading>
        <PostItem horizontal data={PostItemMockData} />
      </section>
      <section className="fitatuBlog">
        <Heading className="fitatuBlog--heading" type="secondary">
          <h3>Fitatu blog </h3>
        </Heading>
        <div className="fitatuBlog--wrapper">
          <PostItem data={PostItemMockData} />
          <PostItem data={PostItemMockData} />
          <PostItem data={PostItemMockData} />
        </div>
        <Button className="fitatuBlog--button">
          <p>Wszystkie wpisy</p>
        </Button>
      </section>
      <div className="add">GORACE OFERTY W TWOJEJ OKOLICY HIT!!!</div>
    </section>
  </Page>
)

export default BlogPage
