import React from 'react'
import '../../styles/welcomePage.css'
import img2 from '../../assets/welcomePage/profile1.jfif'
import img1 from '../../assets/welcomePage/profile2.jfif'
import Page from '../parts/Page'
import Review from '../parts/Review'

const WelcomePage = () => (
  <Page>
    <section className="headingImage">
      <img src="src\assets\welcomePage\main.png" alt="bowls with food" />
    </section>
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
    <section className="functions">
      <h2 className="functions--heading">
        Poznaj funkcje, których codziennie potrzebujesz
      </h2>
      <div className="functions--wrapper">
        <p className="functions--option">
          Kontrola spożywanych kalorii i mikroskładników
        </p>
        <p className="functions--option">
          Największa baza produktów spożywczych
        </p>
        <p className="functions--option">Personalizacja planu żywieniowego</p>
        <p className="functions--option">
          Wizualizacja postępów użytkownika w odniesieniu do jego celów
          odchudzania lub przybierania na wadze
        </p>
        <p className="functions--option">
          Szybkie dodawanie własnych produktów i potraw.
        </p>
        <p className="functions--option">Lorem ipsum dolor sit amet</p>
      </div>
    </section>
    <section className="opinions">
      <h2 className="options--heading">Sprawdź opienie o naszej aplikacji </h2>
      <div className="opinions--wrapper">
        <Review
          rate={5}
          user="Jan Rodo"
          text="Świetna aplikacja, chyba nie miałem jeszcze sytuacji żeby nie było produktu któego szukałem, a przy tym aplikacja nie wtrąca się w to co robimy :-)"
        />
        <Review
          rate={5}
          user="Krzysztof Kononowicz"
          text="Rok temu uważałem Fitatu za najlepszą tego typu aplikację. Jednak muszę przyznać, że NutriPlan zepchnęło ją z podium. Brawo! Przejrzysta, dużo sprawdzonych produktów. Zabieram się do testowania!"
        />
      </div>
    </section>
  </Page>
)

export default WelcomePage
