import React from 'react'
import '../../styles/section.css'
import img2 from '../../assets/welcomePage/profile1.jfif'
import img1 from '../../assets/welcomePage/profile2.jfif'

const Section = () => (
  <div className="section">
    <div className="section-box">
      <div>
        <p className="section-text">
          Dzięki NutriPlan nie musisz rezygnować z ulubionych potraw, a
          jednocześnie możesz uniknąć niezdrowych nawyków żywieniowych.
        </p>
      </div>
      <img src={img1} alt="profile1" />
    </div>
    <div className="section-box">
      <div>
        <p className="section-text">
          NutriPlan to aplikacja żywieniowa, która zyskała zaufanie tysięcy
          klientów. Dzięki jej innowacyjnym rozwiązaniom, użytkownicy mogą
          kontrolować swoją dietę i osiągać zamierzone cele zdrowotne.
        </p>
      </div>
      <img src={img2} alt="profile2" />
    </div>
  </div>
)

export default Section
