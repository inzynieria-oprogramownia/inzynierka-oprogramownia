import React from 'react'
import Page from '../parts/Page'
import img1 from '../../assets/premiumPage/no_ads.png'
import img2 from '../../assets/premiumPage/water.png'
import img3 from '../../assets/premiumPage/foodBox.png'
import '../../styles/premiumPage.css'

const PremiumPage = () => (
  <Page>
    <div className="premium">
      <div>
        <h1>Brak reklam!</h1>
        <p>
          Wybór NutriPlan Premium sprawia, że korzystasz z aplikacji w wersji
          bez reklam. Otrzymujesz tylko powiadomienia o nowych
          funkcjonalnościach
        </p>
        <img src={img1} alt="no-ads" />
      </div>
      <div className="notification-wrapper">
        <div className="notification-box">
          <h2>Powiadomienia o nawadnianiu!</h2>
          <p>
            Wybierając pakiet premium będziesz otrzymywał powiadomienia o
            nawadnianiu
          </p>
        </div>
        <div className="img-wrapper">
          <img src={img2} alt="water" />
        </div>
      </div>
      <div className="food-box-wrapper">
        <h2>Przepisy na boxy gwiazd</h2>
        <p>
          W pakiecie premium masz dostęp do przepisów, z których codziennie
          korzystają największe gwiazdy sportu
        </p>
        <img src={img3} alt="food-box" />
      </div>
    </div>
  </Page>
)

export default PremiumPage
