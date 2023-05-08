import React from 'react'
import Page from '../parts/Page'
import CommentForm from '../parts/CommentForm'
import img from '../../assets/blogEntry/entry.png'
import '../../styles/blogEntry.css'

const BlogEntry = () => {
  const isLogged = true
  return (
    <Page>
      <header className="entry-header">
        <div>
          <h1>Odżywki białkowe - co warto wiedzieć i na co zwrócić uwagę</h1>
        </div>
      </header>
      <section className="entry">
        <div className="entry-title-box">
          <p className="entry-date">28 kwietnia 2023 | Porady</p>
          <h2>Odżywki białkowe - co warto wiedzieć i na co zwrócić uwagę</h2>
        </div>
        <div className="entry-image">
          <img src={img} alt="entry" />
        </div>
        <div className="entry-box">
          <h2>Źródła białka</h2>
          <p>
            Zapotrzebowanie organizmu na białko stanowi 12-20% dziennego
            zapotrzebowania kalorycznego. Wskazówki na to, jak obliczyć swoje
            zapotrzebowanie na ten makroskładnik znajdziesz tutaj. Większość z
            nas jest w stanie dostarczyć tę dawkę w codziennej diecie, bez
            dodatkowej suplementacji.
          </p>
        </div>
        <div className="entry-box">
          <h3>Białka roślinne</h3>
          <p>
            Białko możemy dostarczyć zarówno z produktów roślinnych, jak i
            zwierzęcych. Należy jednak pamiętać, że produkty roślinne
            dostarczają niepełnowartościowe białko. Co to oznacza? Te białka nie
            posiadają wszystkich niezbędnych aminokwasów egzogennych. Wspomniane
            aminokwasy aminokwasy są nam potrzebne, ponieważ nasz organizm nie
            potrafi sobie ich sam wyprodukować. Aby nie doprowadzić do ich
            niedoborów, muszą zostać dostarczone z dietą.
          </p>
        </div>
        <div className="entry-box">
          <h3>Białka zwierzęce</h3>
          <p>
            Białka pochodzenia zwierzęcego przyswajają się lepiej w naszym
            organizmie. W swoim składzie posiadają mniej substancji
            utrudniających ich wchłanianie. Do takich substancji należą: błonnik
            pokarmowy i pokarmowy i pokarmowy i inhibitory enzymów, czyli
            substancje substancje działanie enzymów trawiennych i zmniejszające
            strawność białka.
          </p>
        </div>
        <div className="entry-links">
          <h2>Zobacz koniecznie</h2>
          <p>
            <a href="#s">
              Europejski Dzień Śniadania 24.04 - 10 pomysłów na zdrowe śniadanie
            </a>
          </p>
        </div>
        <div className="entry-comment">
          <h2>Komentarze</h2>
          <div className="comment-box">
            <h3>
              <span className="nick">TurboKrzysiek</span>
            </h3>
            <p className="comment">
              Ten post jest bardzo pomocny i zawiera dużo ważnych informacji na
              temat odżywek białkowych i ich roli w naszej diecie. Cieszy mnie
              fakt, że autor zwraca uwagę na to, że większość ludzi nie
              potrzebuje dodatkowej suplementacji, aby dostarczyć odpowiednią
              ilość białka, co może pomóc uniknąć niepotrzebnych wydatków.
            </p>
          </div>
          <div className="comment-box">
            <h3>
              <span className="nick">Janusz28</span>
            </h3>
            <p className="comment">
              Bardzo doceniam również informacje o tym, że białka roślinne mogą
              nie zawierać wszystkich niezbędnych aminokwasów i że białka
              pochodzenia zwierzęcego przyswajają się lepiej w organizmie.
            </p>
          </div>
          {isLogged ? (
            <CommentForm />
          ) : (
            <div>
              <p>Musisz byc zalogowany żeby zostawić komentarz!</p>
            </div>
          )}
        </div>
      </section>
    </Page>
  )
}

export default BlogEntry
