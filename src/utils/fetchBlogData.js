/* eslint-disable import/no-extraneous-dependencies */
// import axios from 'axios'
import { setPostData } from '../redux/slices/post'

const responseData = {
  data: {
    title: 'Odżywki białkowe - co warto wiedzieć i na co zwrócić uwagę',
    image: '../src/assets/blogEntry/entry.png',
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
    comments: [
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
    ],
  },
}
const fetchBlogData = async (dispatch, id) => {
  try {
    console.log(id)
    const response = responseData // await axios.get('www.pl.pl')
    dispatch(setPostData(response.data))
  } catch (error) {
    console.error(error)
  }
}

export default fetchBlogData
