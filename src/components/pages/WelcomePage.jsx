import React from 'react'
import '../../styles/welcomePage.css'
import img2 from '../../assets/welcomePage/profile1.jfif'
import img1 from '../../assets/welcomePage/profile2.jfif'
import Page from '../parts/Page'

const WelcomePage = () => (
  <Page>
    <section className="section">
      <article className="section-box">
        <div>
          <p className="section-text">
            Dzięki NutriPlan nie musisz rezygnować z ulubionych potraw, a
            jednocześnie możesz uniknąć niezdrowych nawyków żywieniowych.
          </p>
        </div>
        <img src={img1} alt="profile1" />
      </article>
      <article className="section-box">
        <div>
          <p className="section-text">
            NutriPlan to aplikacja żywieniowa, która zyskała zaufanie tysięcy
            klientów. Dzięki jej innowacyjnym rozwiązaniom, użytkownicy mogą
            kontrolować swoją dietę i osiągać zamierzone cele zdrowotne.
          </p>
        </div>
        <img src={img2} alt="profile2" />
      </article>
    </section>
  </Page>
)

export default WelcomePage
