import React from 'react'
import ReactModal from 'react-modal'

import FormInput from 'shared/components/FormInput'
import Button from 'shared/components/Button'
import TextArea from 'shared/components/TextArea'
import CloseIcon from './CloseIcon'
import FormContainer from './FormContainer'

export default ({ isOpen, handleClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
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
      <CloseIcon className="icon ion-md-close" onClick={handleClose} />
      <FormContainer>
        <h2>Create Deck</h2>
        <FormInput
          label="Deck Name"
          placeholder="World Capitals"
          direction="column"
        />
        <FormInput label="Description (optional)" direction="column">
          <TextArea
            rows="4"
            placeholder="Deck About the Capitals of the World"
          />
        </FormInput>
        <FormInput
          label="Tags"
          placeholder="Geography, History"
          direction="column"
        />
        <Button>Create Deck</Button>
      </FormContainer>
    </ReactModal>
  )
}
