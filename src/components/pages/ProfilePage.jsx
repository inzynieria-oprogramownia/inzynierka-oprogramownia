/* eslint-disable operator-linebreak */
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Page from '../parts/Page'
import Button from '../parts/Button'
import AllComponent from '../parts/AllComponent'
import WeightChart from '../parts/WeightChart'
import useUserData from '../../hooks/useUserData'
import '../../styles/profilePage.css'

const ProfilePage = () => {
  const userID = useSelector((state) => state.person.id)
  const navigate = useNavigate()

  useEffect(() => {
    if (!userID) {
      navigate('/login')
    }
  }, [])

  const data = useUserData()
  const recepieItemData = {
    title: 'Wegetariańska tortilla zwarzywami i ryżem',
    img: '..\\src\\assets\\welcomePage\\main.png',
    person: 1,
    time: '20min.',
    kcal: '200kcal',
    option: 'redukcja',
  }
  const postItemData = {
    title: 'Piosenki opole mock 2020',
    description:
      'Wlazł kotek na płotek i mruga krótka to piosenka nie długa. Koziołek matołek stuka w stołek',
    genre: ['test1', 'test2'],
    img: '..\\src\\assets\\blogEntry\\entry.png',
    date: '20 kwietnia 2020',
  }
  const [panel, setPanel] = useState(0)
  const handleClick = (e) => {
    setPanel(e)
  }

  const buttons = ['Wykresy', 'Twoje wpisy', 'Twoje przepisy', 'Ulubione dania']

  const panels = [
    <WeightChart className="weightChart" />,
    <AllComponent data={postItemData} type="blog" />,
    <AllComponent data={recepieItemData} />,
    <AllComponent data={recepieItemData} />,
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
