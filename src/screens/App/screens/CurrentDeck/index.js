// Current Deck Screen
import React, { useEffect, useState } from 'react'
import 'styled-components/macro'

import { cardsAPI } from 'API'

import IsolatedContainer from 'shared/components/IsolatedContainer'
import ClearButton from 'shared/components/ClearButton'
import Card from 'shared/components/Card'
import DeckInfo from './DeckInfo'
import CreateCardModal from './CreateCardModal'

// Screen
const CurrentDeck = ({
  decksInfo,
  deckId,
  isModalOpen,
  setModalOpen,
  closeModal,
  openModal,
}) => {
  deckId = parseInt(deckId)
  // TODO: Move this to state
  let numOfCards
  let selectedDeck
  const currentDeckInfo = decksInfo.find(deck => deck.id === deckId)

  const [cards, setCards] = useState([])
  // const [numOfCards, setNumOfCards] = useState(0);
  // const [selectedDeck, setSelectedDeck] = useState({});

  // Fetch Data
  useEffect(() => {
    async function fetchData() {
      const cardsData = await cardsAPI.getCardsFromDeck(deckId)
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
      {/* TODO: Add loading screen */}
      {decksInfo.length !== 0 ? (
        <DeckInfo
          currentDeck={currentDeckInfo}
          selectedDeck={selectedDeck}
          numOfCards={numOfCards}
        />
      ) : (
        <div>Loading...</div>
      )}

      {/* Cards Section */}
      <div
        css={`
          min-height: 60vh;
          width: 80%;
          margin: 0 auto;

          position: relative;
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
            onClick={openModal}
          >
            New Card
          </ClearButton>
        </div>

        {/* Cards */}
        {cards.length === 0 ? (
          <span
            css={`
              color: gray;
              /* background: pink; */
              margin: 1em;

              position: absolute;
              top: 3em;
            `}
          >
            No cards in deck
          </span>
        ) : (
          <div
            css={`
              display: grid;
              grid-gap: 1em;
              grid-template-columns: repeat(auto-fill, minmax(23em, 1fr));
              justify-items: center;
            `}
          >
            {cards.map(card => (
              <Card>{card.front}</Card>
            ))}
          </div>
        )}
      </div>

      <CreateCardModal
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
        closeModal={closeModal}
      />
    </IsolatedContainer>
  )
}

export default CurrentDeck
