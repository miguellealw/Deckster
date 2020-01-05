import React, { useState } from 'react'
import { decksAPI } from 'API'
import 'styled-components/macro'

import {
  faEllipsisH,
  faEdit,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DeckOptions = ({ showOptions, decksInfo, setDecksInfo, setEditing }) => {
  const [isOptionsOpen, setOptionsOpen] = useState(false)

  return (
    <>
      {showOptions && (
        <>
          {/* Deck Options Icon */}
          <div
            css={`
              color: ${({ theme }) => theme.colors.secondaryGray};
              width: 1.5em;
              height: 1.5em;
              margin: 0.5em;
              /* background: gray; */
              /* padding: 1em; */
              border-radius: 100%;
              position: absolute;
              top: 0;
              right: 0;
              /* box-shadow: 0px 0px 10px rgba(0, 0, 0, .5); */
              z-index: 5;

              display: flex;
              justify-content: center;
              align-items: center;

              &:hover {
                color: black;
              }
            `}
            onClick={e => {
              e.preventDefault()

              setOptionsOpen(!isOptionsOpen)
            }}
          >
            <FontAwesomeIcon icon={faEllipsisH} />
          </div>

          {/* Deck Options */}
          {isOptionsOpen && (
            <div
              css={`
                font-size: 0.85rem;
                background: ${({ theme }) => theme.colors.primaryGray};
                box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
                position: absolute;
                top: 2.5em;
                right: 0.5em;

                display: flex;
                flex-direction: column;

                span {
                  width: 100%;
                  height: 50%;
                  color: black;
                  padding: 0.7em 1.7em;

                  display: flex;
                  align-items: center;
                  justify-content: center;

                  &:hover {
                    background: ${({ theme }) => theme.colors.secondaryGray};
                  }
                }
              `}
            >
              <span
                css={`
                  border-bottom: 1px solid
                    ${({ theme }) => theme.colors.secondaryGray};
                `}
                onClick={async e => {
                  e.preventDefault()
                  setOptionsOpen(false)

                  setEditing(true)
                }}
              >
                <FontAwesomeIcon
                  icon={faEdit}
                  css={`
                    margin-right: 0.5em;
                  `}
                />
                Edit
              </span>
              <span
                onClick={async e => {
                  e.preventDefault()
                  const linkTag =
                    e.currentTarget.parentElement.parentElement.parentElement

                  const deckId = parseInt(linkTag.dataset.deckid)

                  // Remove deck from database
                  await decksAPI.deleteDeck(deckId)

                  // TODO: use slice / splice instead
                  const updatedDecks = decksInfo.filter(
                    deck => deck.id !== deckId,
                  )

                  // Remove deleted deck from state
                  setDecksInfo([...updatedDecks])
                }}
              >
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  css={`
                    margin-right: 0.5em;
                  `}
                />
                Delete
              </span>
            </div>
          )}
        </>
      )}
    </>
  )
}

export default DeckOptions
