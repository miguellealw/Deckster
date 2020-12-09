// Current Deck Screen
import React, { useEffect, useState } from 'react'
import 'styled-components/macro'
import { Link } from '@reach/router'

import { cardsAPI } from 'API'

import IsolatedContainer from 'shared/components/IsolatedContainer'
import ClearButton from 'shared/components/ClearButton'
import Card from 'shared/components/Card'
import DeckInfo from './DeckInfo'
import CreateCardModal from './CreateCardModal'
import UpdateCardModal from './UpdateCardModal'

// Screen
const CurrentDeck = ({ decksInfo, deckId, closeModal }) => {
  deckId = parseInt(deckId)
  // TODO: Move this to state
  let numOfCards
  let selectedDeck
  const [cards, setCards] = useState([])
  const [selectedCard, setSelectedCard] = useState({})

  // Modal State
  const [isCreateCardModalOpen, setCreateCardModalOpen] = useState(false)
  const [isUpdateCardModalOpen, setUpdateCardModalOpen] = useState(false)

  async function createCard(body) {
    const newCard = await cardsAPI.createCard({
      front: body.cardFront,
      back: body.cardBack,
      deckId: body.currentDeckId,
    })

    setCards([...cards, newCard])
  }

  async function updateCard(cardId, body) {
    const updatedCard = await cardsAPI.updateCard(cardId, {
      front: body.cardFront,
      back: body.cardBack,
      deckId: body.currentDeckId,
    })

    const newCardArr = cards.filter(card => updatedCard.id !== card.id)
    setCards([...newCardArr, updatedCard])
  }

  async function deleteCard(cardId) {
    await cardsAPI.deleteCard(cardId)

    // Update State
    const newCardArr = cards.filter(card => cardId !== card.id)
    setCards([...newCardArr])
  }

  // FIXME: why does it have an infinite loop
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

  if (decksInfo.length !== 0) {
    selectedDeck = decksInfo.find(deck => deck.id === parseInt(deckId))
  }

  numOfCards = cards.length

  return (
    <IsolatedContainer
      css={`
        background: #e6e6e6;
      `}
    >
      {decksInfo.length !== 0 ? (
        <>
          {/* Deck Info Section */}
          {/* TODO: Add loading screen */}
          <DeckInfo selectedDeck={selectedDeck} numOfCards={numOfCards} />

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
              <Link to="card-editor">
                <ClearButton
                  css={`
                    color: #0064ff;
                    border-width: 3px;
                    background: none;

                    :hover {
                      color: white;
                    }
                  `}
                  // onClick={() => setCreateCardModalOpen(true)}
                >
                  New Card
                </ClearButton>
              </Link>
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
                  <Card
                    cardInfo={card}
                    isModalOpen={isUpdateCardModalOpen}
                    setModalOpen={setUpdateCardModalOpen}
                    closeModal={closeModal}
                    setSelectedCard={setSelectedCard}
                    deleteCard={deleteCard}
                  />
                ))}
              </div>
            )}
          </div>

          <CreateCardModal
            isModalOpen={isCreateCardModalOpen}
            setModalOpen={setCreateCardModalOpen}
            closeModal={closeModal}
            currentDeckInfo={selectedDeck}
            createCard={createCard}
          />

          {/* Update card modal */}
          <UpdateCardModal
            isModalOpen={isUpdateCardModalOpen}
            setModalOpen={setUpdateCardModalOpen}
            closeModal={closeModal}
            currentDeckInfo={selectedDeck}
            selectedCard={selectedCard}
            updateCard={updateCard}
          />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </IsolatedContainer>
  )
}

export default CurrentDeck
