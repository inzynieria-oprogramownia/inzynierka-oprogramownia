/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import Page from '../parts/Page'
import Input from '../parts/Input'
import Button from '../parts/Button'
import BackgroundCircles from '../parts/BackgroundCircles'
import fetchUserData from '../../utils/fetchUserData'
import '../../styles/loginPage.css'
import useFetch from '../../hooks/useFetch'
import { invalidDataLogin, accountCreated } from '../../mocks/popups'

const LoginForm = ({ handleLogin }) => {
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)

  return (
    <>
      <Input
        onInputChange={(e) => setUsername(e)}
        placeholder="Username"
        id="username"
      />
      <Input
        onInputChange={(e) => setPassword(e)}
        placeholder="Password"
        type="password"
        id="password"
      />
      <Button
        type="submit"
        onClick={(e) => {
          e.preventDefault()
          handleLogin(username, password)
        }}
      >
        <p>Zaloguj</p>
      </Button>
    </>
  )
}

const CreateForm = ({ handleCreateAccount }) => {
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)
  const [email, setEmai] = useState(null)

  const handle = (event) => {
    event.preventDefault()
    handleCreateAccount(username, password, email)
  }

  return (
    <>
      <Input
        onInputChange={(e) => setUsername(e)}
        placeholder="Username"
        id="username"
      />
      <Input
        onInputChange={(e) => setEmai(e)}
        type="mail"
        label="Email"
        id="email"
      />
      <Input
        onInputChange={(e) => setPassword(e)}
        placeholder="Password"
        type="password"
        id="password"
      />
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
  const dispatch = useDispatch()
  const navigateTo = useNavigate()
  const [data] = useFetch(
    'http://localhost/api/api/users/getUsers.php',
    makeAccount
  )
  const handleLogin = (username, password) => {
    const user = data.find(
      (item) => item.login === username && item.password === password
    )
    if (user) {
      fetchUserData(dispatch, user.id).then(() => {
        navigateTo('/profile')
      })
    } else {
      toast.error('Invalid data', { ...invalidDataLogin })
    }
  }
  const handleClick = () => {
    setMakeAccount(true)
  }
  const handleLoginClick = () => {
    setMakeAccount(false)
  }
  const handleCreateAccount = (username, password, email) => {
    const user = data.find(
      (item) =>
        item.login === username &&
        item.password === password &&
        item.email === email
    )
    if (!user) {
      axios.post('http://localhost/api/api/users/addUser.php', {
        login: username,
        password,
        email,
      })
      toast.success('Account created!', { ...accountCreated })
    } else {
      toast.error('The data given is occupied', { ...invalidDataLogin })
    }
  }

  const headingText = makeAccount ? 'Rejestracja' : 'Logowanie'
  return (
    <Page>
      <ToastContainer />
      <section className="login">
        <div className="login--panel">
          <h2 className="login--heading">{headingText}</h2>
          <form action="POST" className="login--form">
            {makeAccount ? (
              <CreateForm handleCreateAccount={handleCreateAccount} />
            ) : (
              <LoginForm handleLogin={handleLogin} />
            )}
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
