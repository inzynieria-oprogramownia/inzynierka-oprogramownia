import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

const Page = ({ children }) => (
  <>
    <Nav />
    <main>{children}</main>
    <Footer />
  </>
)

export default Page
