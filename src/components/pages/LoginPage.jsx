/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import Page from '../parts/Page'
import Input from '../parts/Input'
import Button from '../parts/Button'
import BackgroundCircles from '../parts/BackgroundCircles'
import '../../styles/loginPage.css'

const LoginPage = () => (
  <Page>
    <section className="login">
      <div className="login--panel">
        <h2 className="login--heading">Logowanie</h2>
        <form action="login" className="login--form">
          <Input label="Username" id="username" />
          <Input label="Password" id="password" />
          <Button type="submit">
            <p>Zaloguj</p>
          </Button>
        </form>
        <div className="login--wrapper__botom">
          <p className="login--p">Nie posiadasz konta?</p>
          <Button className="login--button__forgot">
            <p>Zarejestruj się</p>
          </Button>
        </div>
      </div>
      <BackgroundCircles />
    </section>
  </Page>
)

export default LoginPage
