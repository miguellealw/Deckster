import React from 'react'
// import MediaQuery from "react-responsive";
import { Link } from '@reach/router'
import { withTheme } from 'styled-components/macro'

import { getFirstCardInDeck } from 'services/card-service'

// Shared Components
import Deck from 'shared/components/Deck'
import Dropdown from 'shared/components/Dropdown'
import IsolatedContainer from 'shared/components/IsolatedContainer'

// Page Components
import ProfilePage from './ProfilePage'
import DeckList from './DeckList'

const Profile = ({ theme, decksInfo }) => {
  // const [isOpen, setOpen] = React.useState(false);

  // const handleClose = () => setOpen(false);
  // const handleOpen = () => setOpen(true);

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
          css={{
            display: 'flex',
            marginLeft: '2em',
            // height: '.5rem'
          }}
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
        </div>

        <DeckList>
          {decksInfo.map(deck => {
            //TODO: Make this better somehow
            // FIXME: wont work because this is async in render function
            // const firstCardInDeck = await getFirstCardInDeck(deck.id)
            // console.log('react first card in dekc', firstCardInDeck)

            return (
              <Link
                key={deck.id}
                to={`my-decks/${deck.id}`}
                css={`
                  :hover {
                    text-decoration: none;
                  }
                `}
              >
                <Deck
                  title={deck.title}
                  firstCardName={"first card test"}
                  tags={deck.tags}
                />
              </Link>
            )
          })}
        </DeckList>
      </IsolatedContainer>

      {/* <Router>
            <DeckSlider path="my-decks" />
            <DeckSlider path="favorited" />
            <CreateDeckModal
              path="create-deck"
              isOpen={isOpen}
              handleClose={handleClose}
            />
          </Router> */}
    </ProfilePage>
  )
}

export default withTheme(Profile)
