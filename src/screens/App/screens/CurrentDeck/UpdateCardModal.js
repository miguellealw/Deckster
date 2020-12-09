import React, { useState, useEffect } from 'react'

import ReactModal from 'react-modal'
import 'styled-components/macro'

import Button from 'shared/components/Button'
import TextArea from 'shared/components/TextArea'
import CloseIcon from 'shared/components/CloseIcon'

import FormContainer from '../Profile/FormContainer'
import InputLabel from 'shared/components/FormFields/InputLabel'
import Field from 'shared/components/FormFields/Field'

const UpdateCardModal = ({
  isModalOpen,
  setModalOpen,
  currentDeckInfo,
  updateCard,
  selectedCard,
}) => {
  const [cardFront, setCardFront] = useState(selectedCard.front)
  const [cardBack, setCardBack] = useState(selectedCard.back)

  let currentDeckId = currentDeckInfo.id

  // This is done to update the front and back when a card is selected to edit
  useEffect(() => {
    setCardFront(selectedCard.front)
    setCardBack(selectedCard.back)
  }, [selectedCard])

  return (
    <ReactModal
      isOpen={isModalOpen}
      contentLabel="Update Deck Form"
      style={{
        content: {
          minWidth: '2em',
          maxWidth: '35em',
          margin: '0 auto',
          borderRadius: '1em',
        },
        overlay: {
          background: 'rgba(0,0,0,.6)',
          zIndex: '10',
        },
      }}
    >
      <CloseIcon
        className="icon ion-md-close"
        onClick={() => {
          setModalOpen(false)
          setCardFront(selectedCard.front)
          setCardBack(selectedCard.back)
        }}
      />
      <FormContainer>
        <h2
          css={`
            font-size: 3em;
            font-weight: bold;
            text-align: center;
            color: ${props => props.theme.colors.secondary};
            margin: 1em 0;
          `}
        >
          Edit Card
        </h2>
        {/* <Field>
          <InputLabel htmlFor="deckName">Deck Name</InputLabel>
          <FormInput
            id="deckName"
            aria-label="deck-name"
            placeholder="World Capitals"
            direction="column"
            onChange={e => {
              setFormData(e.currentTarget.value)
            }}
          />
        </Field> */}
        <Field>
          <InputLabel htmlFor="cardFront">Front</InputLabel>
          <TextArea
            value={cardFront}
            id="cardFront"
            arial-label="card-front"
            placeholder="The front of the card"
            direction="column"
            onChange={e => setCardFront(e.currentTarget.value)}
          />
        </Field>
        <Field>
          <InputLabel htmlFor="cardBack">Back</InputLabel>
          <TextArea
            value={cardBack}
            id="cardBack"
            arial-label="card-back"
            placeholder="The back of the card"
            direction="column"
            onChange={e => setCardBack(e.currentTarget.value)}
          />
        </Field>
        {/* <FormInput label="Description (optional)" direction="column">
          <TextArea
            rows="4"
            placeholder="Deck About the Capitals of the World"
          />
        </FormInput>
        <FormInput
          label="Tags"
          placeholder="Geography, History"
          direction="column"
        /> */}
        <Button
          onClick={async e => {
            e.preventDefault()
            await updateCard(selectedCard.id, {
              cardFront,
              cardBack,
              deckId: currentDeckId,
            })

            setModalOpen(false)
          }}
        >
          Edit Card
        </Button>
      </FormContainer>
    </ReactModal>
  )
}

export default UpdateCardModal
