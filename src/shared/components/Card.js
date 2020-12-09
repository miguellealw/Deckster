import React, { useState } from 'react'
import styled from 'styled-components'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import OptionsDropdown from './OptionsDropdown'
import { cardsAPI } from 'API'

const { Option } = OptionsDropdown

const width = 23
const height = width - 9
const CardWrapper = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  width: ${width}rem;
  height: ${height}rem;
  border-radius: 0.438em;
  margin: 1em;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.3);
  background: white;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  &:hover {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.4);
  }
`

const CardOptions = ({
  setSelectedCard,
  cardInfo,
  setModalOpen,
  deleteCard,
}) => {
  return (
    <OptionsDropdown>
      <Option
        onClick={e => {
          e.preventDefault()

          setModalOpen(true)
          setSelectedCard(cardInfo)
        }}
        icon={faEdit}
      >
        Edit
      </Option>
      <Option
        icon={faTrashAlt}
        onClick={e => {
          e.preventDefault()

          deleteCard(cardInfo.id)
        }}
      >
        Delete
      </Option>
    </OptionsDropdown>
  )
}

const Card = ({ cardInfo, setSelectedCard, setModalOpen, deleteCard }) => {
  // const [isEditing, setIsEditing] = useState(false)

  return (
    <CardWrapper>
      <CardOptions
        setSelectedCard={setSelectedCard}
        setModalOpen={setModalOpen}
        cardInfo={cardInfo}
        deleteCard={deleteCard}
      />
      <span>{cardInfo.front}</span>
    </CardWrapper>
  )
}

export default Card
