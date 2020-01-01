import axios from 'axios'

export const getDecks = async () => {
  const { data } = await axios.get('http://localhost:3001/decks')
  return data
}
