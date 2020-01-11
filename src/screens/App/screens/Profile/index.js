import React from 'react'
// import MediaQuery from "react-responsive";
import { Link } from '@reach/router'
import { withTheme } from 'styled-components/macro'

// import { getFirstCardInDeck } from 'services/card-service'

// Shared Components
import Deck from 'shared/components/Deck/'
import Dropdown from 'shared/components/Dropdown'
import IsolatedContainer from 'shared/components/IsolatedContainer'
import Button from 'shared/components/Button'

// Page Components
import ProfilePage from './ProfilePage'
import DeckList from './DeckList'
import CreateDeckModal from './CreateDeckModal'

const Profile = ({
  decksInfo,
  setDecksInfo,
  isModalOpen,
  setModalOpen,
  closeModal,
  openModal,
}) => {
  return (
    <ProfilePage>
      <IsolatedContainer
        css={`
          display: grid;
          min-height: initial;

          ${({ theme }) => theme.media.tabletLandscapeUp`
            width: 90%;
            margin: 0 auto;
          `};
        `}
      >
        <h2
          css={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginTop: '2em',
            marginLeft: 'calc(2em - 3rem)',
            marginBottom: '1em',
            // height: '.5rem'
          }}
          data-testid="profile-page-title"
        >
          Your Decks
        </h2>

        {/* Dropdown Container */}
        <div
          css={`
            display: flex;
            margin-left: 2em;
            /* height: .5rem */

            ${({ theme }) => theme.media.phoneOnly`
              flex-direction: column;

              width: 100%;
              margin: 0 auto;

              background: pink;

              > select {
                // background: red;
                width: 100%;
                // padding: 1em;
              }

              > button {
                width: 100%;
              }
            `}
          `}
        >
          <Dropdown label="Sort">
            <Dropdown.Item value="Alphabetical (A-Z)">
              Alphabetical (A-Z)
            </Dropdown.Item>
            <Dropdown.Item value="Reverse Alphabetical (Z-A)">
              Reverse Alphabetical (Z-A)
            </Dropdown.Item>
            <Dropdown.Item value="Recently Created">
              Recently Created
            </Dropdown.Item>
            <Dropdown.Item value="Recently Studied ">
              Recently Studied
            </Dropdown.Item>
          </Dropdown>

          <Dropdown label="Filter">
            <Dropdown.Item value="All">All</Dropdown.Item>
            <Dropdown.Item value="Math">Math</Dropdown.Item>
            <Dropdown.Item value="Computer Science">
              Computer Science
            </Dropdown.Item>
          </Dropdown>

          <Button
            css={`
              margin-left: auto;
            `}
            onClick={openModal}
          >
            New Deck
          </Button>
        </div>

        <DeckList>
          {decksInfo.length === 0
            ? 'You have no decks yet.'
            : decksInfo.map(deck => {
                //TODO: Make this better somehow
                // FIXME: wont work because this is async in render function

                // const firstCardInDeck = await getFirstCardInDeck(deck.id)
                // console.log('react first card in dekc', firstCardInDeck)

                return (
                  <Link
                    key={deck.id}
                    to={`my-decks/${deck.id}`}
                    data-deckid={deck.id}
                    css={`
                      :hover {
                        text-decoration: none;
                      }
                    `}
                  >
                    <Deck
                      currentDeck={deck}
                      decksInfo={decksInfo}
                      setDecksInfo={setDecksInfo}
                    />
                  </Link>
                )
              })}
        </DeckList>

        <CreateDeckModal
          path="create-deck"
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          setDecksInfo={setDecksInfo}
          decksInfo={decksInfo}
        />
      </IsolatedContainer>

      {/* <Router>
            <DeckSlider path="my-decks" />
            <DeckSlider path="favorited" />
            <CreateDeckModal
              path="create-deck"
              isModalOpen={isModalOpen}
              handleClose={handleClose}
            />
          </Router> */}
    </ProfilePage>
  )
}

export default withTheme(Profile)
