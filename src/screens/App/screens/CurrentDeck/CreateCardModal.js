import React, { useState } from 'react'

import ReactModal from 'react-modal'
import 'styled-components/macro'

import Button from 'shared/components/Button'
import TextArea from 'shared/components/TextArea'
import CloseIcon from 'shared/components/CloseIcon'

import FormContainer from '../Profile/FormContainer'
import FormInput from 'shared/components/FormFields/TextField'
import InputLabel from 'shared/components/FormFields/InputLabel'
import Field from 'shared/components/FormFields/Field'

import { decksAPI } from 'API'

const CreateCardModal = ({
  isModalOpen,
  setModalOpen,
  setDecksInfo,
  decksInfo,
  closeModal,
  openModal,
}) => {
  const [formData, setFormData] = useState('')

  return (
    <ReactModal
      isOpen={isModalOpen}
      contentLabel="Create Deck Form"
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
      <CloseIcon className="icon ion-md-close" onClick={closeModal} />
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
          Create Cards
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
        <div></div>
        <Field>
          <InputLabel htmlFor="cardFront">Front</InputLabel>
          <TextArea
            id="cardFront"
            arial-label="card-front"
            placeholder="The front of the card"
            direction="column"
          />
        </Field>
        <Field>
          <InputLabel htmlFor="cardBack">Back</InputLabel>
          <TextArea
            id="cardBack"
            arial-label="card-back"
            placeholder="The back of the card"
            direction="column"
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
            const newDeck = await decksAPI.createDeck(formData)

            setDecksInfo([...decksInfo, newDeck])
            closeModal()
          }}
        >
          Create Cards
        </Button>
      </FormContainer>
    </ReactModal>
  )
}

export default CreateCardModal
