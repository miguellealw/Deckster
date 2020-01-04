import axios from 'axios'

const getDecks = async () => {
  const { data } = await axios.get('http://localhost:3001/decks')
  return data
}

const createDeck = async deckName => {
  const { data } = await axios.post('http://localhost:3001/decks', {
    title: deckName,
    tags: ['test tag 1', 'test tag 2'],
    firstCardName: 'first card name',
  })

  return data
}

const deleteDeck = async deckId => {
  await axios.delete(`http://localhost:3001/decks/${deckId}`)
}

export default {
  getDecks,
  createDeck,
  deleteDeck
}
