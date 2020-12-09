import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

import DeckOptions from './DeckOptions'
import EditingInput from './EditingInput'

import { decksAPI } from 'API'

const width = 23
const height = width - 9

const DeckContainer = styled.div`
  font-size: 0.8rem;
  width: ${width}em;
  height: ${height}em;
  border-radius: 0.438em;
  margin: 1em;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
  background: white;
  position: relative;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.2s;

  .deckFirstCard {
    font-size: 1.5rem;
    color: ${props => props.theme.colors.secondaryGray};
  }

  &:before,
  &:after {
    content: '';
    height: inherit;
    border-radius: inherit;
    box-shadow: inherit;
    background: white;
    position: absolute;
    transition: 0.2s;
  }

  &:before {
    min-width: calc(${width}em - 1em);
    transform: translateY(-0.5rem);
    z-index: -1;
  }

  &:after {
    min-width: calc(${width}em - 2em);
    transform: translateY(-1rem);
    z-index: -2;
  }

  /* Hover Effects */
  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
  }

  &:hover:before {
    transform: translateY(-1rem);
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.4);
  }

  &:hover:after {
    transform: translateY(-2rem);
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.4);
  }

  ${({ theme }) => theme.media.tabletLandscapeUp`
    // grid-template-columns: 0.8fr 5fr;
    font-size: 1rem;
  `}
`

const DeckInfo = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.primaryGray};
  padding: 1em 1em;
`

const DeckTitle = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary};
`

// const DeckDescription = styled.div`
//   font-size: 0.6rem;
//   color: ${({ theme }) => theme.colors.secondaryGray};
//   line-height: 1.3em;
//   margin: 1em 0;
// `

const Tag = styled.li`
  font-size: 0.7rem;
  /* min-width: 1em; */
  /* height: 0.5em; */
  padding: 0.2em 0.5em;
  background: tomato;
  border-radius: 100em;
  margin-right: 0.5em;
  color: white;
  cursor: pointer;
`

const TagContainer = styled.ul`
  margin-top: 0.6em;

  display: flex;
`

const Deck = ({ currentDeck, showOptions = true, decksInfo, setDecksInfo }) => {
  const [isEditing, setEditing] = useState(false)
  const [value, setValue] = useState(currentDeck.title)

  async function updateDecksInfo(value) {
    const updatedDecksInfo = decksInfo.filter(
      deck => deck.id !== currentDeck.id,
    )

    const updatedDeck = await decksAPI.updateDeck(currentDeck.id, {
      title: value,
    })

    setDecksInfo([...updatedDecksInfo, updatedDeck])
  }

  return (
    <DeckContainer
      onKeyDown={e => {
        console.log('event emited')
        if (e.key === 'Enter') {
          e.preventDefault()
          if (value !== currentDeck.title) updateDecksInfo(value)

          // Wait 100ms to avoid a 'flash' of data
          setTimeout(() => setEditing(false), 100)
        }
      }}
    >
      <DeckOptions
        showOptions={showOptions}
        decksInfo={decksInfo}
        setDecksInfo={setDecksInfo}
        setEditing={setEditing}
      />

      <span className="deckFirstCard">{currentDeck.firstCardName}</span>
      <DeckInfo>
        {isEditing ? (
          <EditingInput
            title={currentDeck.title}
            setEditing={setEditing}
            updateDecksInfo={updateDecksInfo}
            value={value}
            setValue={setValue}
          />
        ) : (
          <DeckTitle>{currentDeck.title}</DeckTitle>
        )}

        <TagContainer>
          {/* TODO: change key */}
          {currentDeck.tags.map((tag, i) => (
            <Tag key={i} data-testid="tag">
              {tag}
            </Tag>
          ))}
        </TagContainer>
      </DeckInfo>
    </DeckContainer>
  )
}

Deck.propTypes = {
  title: PropTypes.string.isRequired,
  firstCardName: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  showOptions: PropTypes.bool,
}

export default Deck
