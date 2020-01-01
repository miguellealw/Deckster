// Current Deck Screen

import React, { useEffect, useState } from 'react'
import IsolatedContainer from 'shared/components/IsolatedContainer'
import Button from 'shared/components/Button'
import Deck from 'shared/components/Deck'
import { getCardsFromDeck } from 'services/card-service'
import ClearButton from 'shared/components/ClearButton'

import styled from 'styled-components/macro'

const DeckInfo = ({ selectedDeck, numOfCards }) => (
  <section
    css={`
      width: 100%;
      background: ${({ theme }) => theme.colors.secondary};
      color: white;
      height: 40vh;

      button {
        padding-right: 3rem;
        padding-left: 3rem;
        font-size: 0.9rem;
      }
    `}
  >
    {/* Container for Deck Info */}
    <div
      css={`
        width: 80%;
        margin: 0 auto;
        z-index: 1;
        position: relative;
        display: flex;
        height: 100%;
      `}
    >
      {/* Deck Comp */}
      <div
        css={{
          width: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Deck
          title="test title"
          firstCardName="test first card"
          tags={['tag 1', 'tag 2']}
        />
      </div>

      {/* Deck Info */}
      <div
        css={{
          width: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',

          h2: {
            fontSize: '3.5rem',
            fontWeight: 'bold',
            zIndex: 1,
          },

          '> div, button': {
            margin: '1rem 0',
          },
        }}
      >
        <h2>{selectedDeck.title}</h2>
        <div>
          {/* TODO: Make this dynamic */}
          <span>
            {numOfCards} {numOfCards > 1 ? 'Cards' : 'Card'}
          </span>
          <span css={{ padding: '0 .5rem' }}>&middot;</span>
          <span>by John Doe</span>
        </div>
        <Button>Study</Button>
      </div>
    </div>
  </section>
)

const width = 23
const height = width - 9
const Card = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  width: ${width}rem;
  height: ${height}rem;
  border-radius: 0.438em;
  margin: 1em;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
  background: white;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.4);
  }
`

const CurrentDeck = ({ decksInfo, deckId }) => {
  // TODO: Move this to state
  let numOfCards
  let selectedDeck

  const [cards, setCards] = useState([])
  // const [numOfCards, setNumOfCards] = useState(0);
  // const [selectedDeck, setSelectedDeck] = useState({});

  useEffect(() => {
    async function fetchData() {
      const cardsData = await getCardsFromDeck(deckId)
      setCards(cardsData)
    }
    fetchData()
  }, [])

  if (decksInfo.length !== 0)
    selectedDeck = decksInfo.find(deck => deck.id === parseInt(deckId))

  numOfCards = cards.length

  return (
    <IsolatedContainer
      css={`
        background: #e6e6e6;
      `}
    >
      
      {/* Deck Info Section */}
      {/* <h2>{decksInfo[0].title}</h2> */}
      {/* Add loading screen */}
      {decksInfo.length !== 0 ? (
        <DeckInfo selectedDeck={selectedDeck} numOfCards={numOfCards} />
      ) : (
        <div>Loading...</div>
      )}

      {/* Cards Section */}
      <div
        css={`
          min-height: 60vh;
          width: 80%;
          margin: 0 auto;
        `}
      >
        {/* "Cards" Heading and "New Card" Button */}
        <div
          css={`
            width: 100%;
            display: flex;
            justify-content: space-between;
            margin-top: 2em;
            margin-left: 1em;
            margin-right: 1em;
          `}
        >
          <h2
            css={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
            }}
          >
            Cards
          </h2>
          <ClearButton
            css={`
              color: #0064ff;
              border-width: 3px;
              background: none;

              :hover {
                color: white;
              }
            `}
          >
            New Card
          </ClearButton>
        </div>

        {/* Cards */}
        <div
          css={`
            display: grid;
            grid-gap: 1em;
            grid-template-columns: repeat(auto-fill, minmax(23em, 1fr));
            justify-items: center;
          `}
        >
          {cards.length !== 0 && cards.map(card => <Card>{card.front}</Card>)}
        </div>
      </div>
    </IsolatedContainer>
  )
}

export default CurrentDeck
