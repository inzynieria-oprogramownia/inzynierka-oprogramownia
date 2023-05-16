/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Page from '../parts/Page'
import Input from '../parts/Input'
import Button from '../parts/Button'
import BackgroundCircles from '../parts/BackgroundCircles'
import fetchUserData from '../../utils/fetchUserData'
import '../../styles/loginPage.css'

const LoginForm = () => {
  const navigateTo = useNavigate()
  return (
    <>
      <Input placeholder="Username" id="username" />
      <Input placeholder="Password" type="password" id="password" />
      <Button type="submit" onClick={() => navigateTo('/profile')}>
        <p>Zaloguj</p>
      </Button>
    </>
  )
}

const CreateForm = () => {
  const dispatch = useDispatch()

  const handle = (event) => {
    event.preventDefault()
    fetchUserData(dispatch)
  }

  return (
    <>
      <Input placeholder="Username" id="username" />
      <Input type="mail" label="Email" id="email" />
      <Input placeholder="Password" type="password" id="password" />
      <Button type="submit" onClick={(e) => handle(e)}>
        <p>Stworz konto</p>
      </Button>
    </>
  )
}

const Bottom = ({ onClick, pText, buttonText }) => (
  <>
    <p className="login--p">{pText}</p>
    <Button onClick={onClick} className="login--button__forgot">
      <p>{buttonText}</p>
    </Button>
  </>
)

const LoginPage = () => {
  const [makeAccount, setMakeAccount] = useState(false)

  const handleClick = () => {
    setMakeAccount(true)
  }
  const handleLoginClick = () => {
    setMakeAccount(false)
  }
  const headingText = makeAccount ? 'Rejestracja' : 'Logowanie'
  return (
    <Page>
      <section className="login">
        <div className="login--panel">
          <h2 className="login--heading">{headingText}</h2>
          <form action="login" className="login--form">
            {makeAccount ? <CreateForm /> : <LoginForm />}
          </form>
          <div className="login--wrapper__botom">
            {makeAccount ? (
              <Bottom
                onClick={handleLoginClick}
                pText="Posiadasz konto?"
                buttonText="Zaloguj się"
              />
            ) : (
              <Bottom
                onClick={handleClick}
                pText="Nie posiadasz konta?"
                buttonText="Zarejestruj się"
              />
            )}
          </div>
        </div>
        <BackgroundCircles />
      </section>
    </Page>
  )
}

export default LoginPage
