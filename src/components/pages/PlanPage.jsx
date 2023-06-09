/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUserPremium } from '../../redux/slices/user'
import Page from '../parts/Page'
import Input from '../parts/Input'
import Button from '../parts/Button'
import '../../styles/planPage.css'

const SubscriptionOption = ({ label, price, description }) => (
  <div className="option--row">
    <Input
      className="option--radio"
      name="subscription"
      type="radio"
      label={label}
    />
    <div className="price--wrapper">
      <p>{price}</p>
      {description && <p>{description}</p>}
    </div>
  </div>
)
const PlanCard = ({ title, options, payment }) => (
  <div className="paid--card">
    <p className="card--title">{title}</p>
    <div className="option--wrapper">
      {options.map((option) => (
        <SubscriptionOption key={option.label} {...option} />
      ))}
    </div>
    <div className="paid--bottom">
      <p>{payment}</p>
    </div>
  </div>
)

const PlanPage = () => {
  const dispatch = useDispatch()
  const navigateTo = useNavigate()
  const { id } = useSelector((state) => state.person)
  const handleFreePlan = () => {
    dispatch(setUserPremium('0'))
    axios.put(
      `http://localhost/api/api/users/premium/removePremium.php?id=${id}`
    )
    navigateTo('/profile')
  }
  const handlePremiumPlan = () => {
    dispatch(setUserPremium('1'))
    axios.put(
      `http://localhost/api/api/users/premium/updatePremium.php?id=${id}`
    )
    navigateTo('/profile')
  }
  return (
    <Page>
      <section className="plan">
        <section className="paid">
          <h2 className="paid--title">Wybierz plan</h2>
          <form className="cards--wrapper">
            <PlanCard
              title="SUBSKRYPCJA"
              options={[
                {
                  label: 'Co rok',
                  price: '199.09zł',
                  description: '10,83 zł za 1 miesiąc',
                },
                { label: 'Co miesiac', price: '19.09zł' },
              ]}
              payment="Płatność kartą płatniczą lub kredytową.Możesz zrezygnować w każdej chwili, co najmniej 24 godziny przed datą odnowienia."
            />
            <PlanCard
              title="JEDNORAZOWO"
              options={[
                {
                  label: 'Na rok',
                  price: '199.09zł',
                  description: '10,83 zł za 1 miesiąc',
                },
                { label: 'Na miesiąc', price: '19.09zł' },
              ]}
              payment="Płatność przez Przelewy24. Dostępne m.in.: Google Pay, Apple Pay, Blik, płatność kartą, przelew bankowy."
            />
          </form>
          {/* <div className="bonus--wrapper">
          <Input placeholder="Kod rabatowy" className="bonus" />
          <Button className="bonus--button">
            <p>Aktywuj</p>
          </Button>
        </div> */}
          <Button onClick={handlePremiumPlan} className="paid--button">
            <p>Zapłac</p>
          </Button>
          <Button onClick={handleFreePlan} className="free--button">
            <p>Plan darmowy</p>
          </Button>
        </section>
        <section className="free">
          <div className="free--panel">
            <h3 className="free--heading">Plan darmowy</h3>
            <div className="free--wrapper">
              <img src="src\assets\plan\person.svg" alt="person" />
              <p>
                Jeśli wybierzesz plan darmowy, warto mieć na uwadze, że nie
                będziesz mógł korzystać z pełni funkcjonalności oferowanej przez
                dany produkt lub usługę. W przypadku bardziej zaawansowanych
                potrzeb, plan płatny może okazać się konieczny.
              </p>
            </div>
          </div>
        </section>
      </section>
    </Page>
  )
}

export default PlanPage
