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
import useFetch from '../../hooks/useFetch'

const ProfilePage = () => {
  const userID = useSelector((state) => state.person.id)
  const navigate = useNavigate()

  useEffect(() => {
    if (!userID) {
      navigate('/login')
    }
  }, [])

  const data = useUserData()
  const [recepies] = useFetch(
    `http://localhost/api/api/users/getCreatedMeals.php?userid=${data.id}`
  )
  const [posts] = useFetch(
    `http://localhost/api/api/users/blog/getUsersPosts.php?userid=${data.id}`
  )
  const [likedMeals] = useFetch(
    `http://localhost/api/api/users/getLikedMeals.php?userid=${data.id}`
  )
  const [panel, setPanel] = useState(0)
  const handleClick = (e) => {
    setPanel(e)
  }
  console.log(posts?.posts, 'hcujjjjj')
  const buttons = ['Wykresy', 'Twoje wpisy', 'Twoje przepisy', 'Ulubione dania']

  const panels = [
    <WeightChart className="weightChart" />,
    <AllComponent data={posts?.posts} type="blog" />,
    <AllComponent data={recepies?.meals} />,
    <AllComponent data={likedMeals?.meals} />,
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
