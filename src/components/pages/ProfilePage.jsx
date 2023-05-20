/* eslint-disable operator-linebreak */
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Page from '../parts/Page'
import Button from '../parts/Button'
import WeightChart from '../parts/WeightChart'
import useUserData from '../../hooks/useUserData'
import '../../styles/profilePage.css'
import AllRecepies from '../parts/AllRecepies'
import AllPosts from '../parts/AllPosts'
import AllLikedMeals from '../parts/AllLikedMeals'

const ProfilePage = () => {
  const userID = useSelector((state) => state.person.id)
  const navigate = useNavigate()
  const [panel, setPanel] = useState(0)

  useEffect(() => {
    if (!userID) {
      navigate('/login')
    }
  }, [])
  const data = useUserData()

  const handleClick = (e) => {
    setPanel(e)
  }

  const buttons = ['Wykresy', 'Twoje wpisy', 'Twoje przepisy', 'Ulubione dania']

  const panels = [
    <WeightChart className="weightChart" />,
    <AllPosts id={data.id} panel={panel} />,
    <AllRecepies id={data.id} panel={panel} />,
    <AllLikedMeals id={data.id} panel={panel} />,
  ]
  return (
    <Page>
      <section className="profile">
        <p className="profile--name">{data.name}</p>
        <div className="panel">
          <div className="panel--wrapper__top">
            {buttons.map((el, i) => {
              const isActive =
                i === panel ? 'panel--button button__active' : 'panel--button'
              return (
                <Button
                  key={el}
                  onClick={() => handleClick(i)}
                  className={isActive}
                >
                  {el}
                </Button>
              )
            })}
          </div>
          <div className="panel--wrapper__bottom">{panels[panel]}</div>
        </div>
      </section>
    </Page>
  )
}

export default ProfilePage
