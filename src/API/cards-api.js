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

const createCard = async body => {
  const { data } = await axios.post('http://localhost:3001/cards', body)

  return data
}

const updateCard = async (cardId, body) => {
  const { data } = await axios.patch(
    `http://localhost:3001/cards/${cardId}`,
    body,
  )

  return data
}

const deleteCard = async cardId => {
  const { data } = await axios.delete(`http://localhost:3001/cards/${cardId}`)

  return data
}

export default {
  getCardsFromDeck,
  getFirstCardInDeck,
  createCard,
  updateCard,
  deleteCard,
}
