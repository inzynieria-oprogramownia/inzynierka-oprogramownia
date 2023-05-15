/* eslint-disable react/no-array-index-key */
import React from 'react'
import Page from '../parts/Page'
import CommentForm from '../parts/CommentForm'
import '../../styles/blogEntry.css'

const BlogEntry = () => {
  const isLogged = true
  const data = {
    title: 'Odżywki białkowe - co warto wiedzieć i na co zwrócić uwagę',
    image: 'src/assets/blogEntry/entry.png',
    date: '28.04.2023',
    sections: [
      {
        sec1: 'Źródła białka',
        sec2: 'Zapotrzebowanie organizmu na białko stanowi 12-20% dziennego zapotrzebowania kalorycznego. Wskazówki na to, jak obliczyć swoje zapotrzebowanie na ten makroskładnik znajdziesz tutaj. Większość z nas jest w stanie dostarczyć tę dawkę w codziennej diecie, bez dodatkowej suplementacji.',
      },
      {
        sec1: 'Białka roślinne',
        sec2: 'Białko możemy dostarczyć zarówno z produktów roślinnych, jak i zwierzęcych. Należy jednak pamiętać, że produkty roślinne dostarczają niepełnowartościowe białko. Co to oznacza? Te białka nie posiadają wszystkich niezbędnych aminokwasów egzogennych. Wspomniane aminokwasy aminokwasy są nam potrzebne, ponieważ nasz organizm nie potrafi sobie ich sam wyprodukować. Aby nie doprowadzić do ich niedoborów, muszą zostać dostarczone z dietą.',
      },
      {
        sec1: 'Białka zwierzęce',
        sec2: 'Białka pochodzenia zwierzęcego przyswajają się lepiej w naszym organizmie. W swoim składzie posiadają mniej substancji utrudniających ich wchłanianie. Do takich substancji należą: błonnik pokarmowy i pokarmowy i pokarmowy i inhibitory enzymów, czyli substancje substancje działanie enzymów trawiennych i zmniejszające strawność białka.',
      },
    ],
    recipe: null,
    personNumber: null,
    timeToPrepare: null,
    kcal: null,
    diet: null,
  }
  const comments = [
    {
      id: 1,
      nick: 'Janusz28',
      text: 'Ten post jest bardzo pomocny i zawiera dużo ważnych informacji na temat odżywek białkowych i ich roli w naszej diecie. Cieszy mnie fakt, że autor zwraca uwagę na to, że większość ludzi nie potrzebuje dodatkowej suplementacji, aby dostarczyć odpowiednią ilość białka, co może pomóc uniknąć niepotrzebnych wydatków.',
    },
    {
      id: 2,
      nick: 'TurboKrzysiek',
      text: 'Bardzo doceniam również informacje o tym, że białka roślinne mogą nie zawierać wszystkich niezbędnych aminokwasów i że białka pochodzenia zwierzęcego przyswajają się lepiej w organizmie.',
    },
  ]
  return (
    <Page>
      <header
        className="entry-header"
        style={{ backgroundImage: `url(${data.image})` }}
      >
        <div>
          <h1>{data.title}</h1>
        </div>
      </header>
      <section className="entry">
        <div className="entry-title-box">
          <p className="entry-date">{data.date}</p>
          <h2>{data.title}</h2>
        </div>
        <div className="entry-image">
          <img src={data.image} alt="entry" />
        </div>
        {data.sections.map((section, index) => (
          <div className="entry-box" key={index}>
            <h2>{section.sec1}</h2>
            <p>{section.sec2}</p>
          </div>
        ))}
        <div className="entry-comment">
          <h2>Komentarze</h2>
          {comments.map((comment) => (
            <div className="comment-box" key={comment.id}>
              <h3>
                <span className="nick">{comment.nick}</span>
              </h3>
              <p className="comment">{comment.text}</p>
            </div>
          ))}
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
