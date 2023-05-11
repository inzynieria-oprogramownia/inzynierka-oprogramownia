import React from 'react'
import Page from '../parts/Page'
import clouds from '../../assets/errorPage/clouds.png'
import error from '../../assets/errorPage/error404.png'
import '../../styles/error404.css'

const Error404 = () => (
  <Page>
    <div className="wrapper">
      <div className="first">
        <img src={clouds} alt="clouds" />
      </div>
      <div className="seccond">
        <div className="box">
          <div>
            <h1>Oops...</h1>
          </div>
          <div>
            <p>strona, której szukasz nie istnieje</p>
          </div>
        </div>
        <img src={error} alt="error404" />
      </div>
    </div>
  </Page>
)

export default Error404
