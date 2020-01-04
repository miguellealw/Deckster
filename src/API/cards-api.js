import axios from 'axios'

const getCardsFromDeck = async deckId => {
  const { data } = await axios.get(
    `http://localhost:3001/decks/${deckId}/cards`,
  )
  return data
}

const getFirstCardInDeck = async deckId => {
  const { data } = await axios.get(
    `http://localhost:3001/decks/${deckId}/cards?_limit=1`,
  )
  return data
}

export default { getCardsFromDeck, getFirstCardInDeck }
