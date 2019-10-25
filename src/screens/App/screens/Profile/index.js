import React from 'react'
// import MediaQuery from "react-responsive";
// import { Router } from "@reach/router";
import { withTheme } from 'styled-components/macro'

// Shared Components
import Deck from 'shared/components/Deck'
import Dropdown from 'shared/components/Dropdown'
import IsolatedContainer from 'shared/components/IsolatedContainer'

// Page Components
import ProfilePage from './ProfilePage'
import DeckList from './DeckList'

const Profile = ({ theme }) => {
  // const [isOpen, setOpen] = React.useState(false);

  // const handleClose = () => setOpen(false);
  // const handleOpen = () => setOpen(true);

  return (
    <ProfilePage>
      <IsolatedContainer
        css={`
          display: grid;

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
          <Deck
            title="test title"
            firstCardName="test first card"
            tags={['tag 1', 'tag 2', 'tag 3', 'tag 4', 'tag 5']}
          />
          <Deck
            title="test title"
            firstCardName="test first card"
            tags={['tag 1', 'tag 2']}
          />
          <Deck
            title="test title"
            firstCardName="test first card"
            tags={['tag 1', 'tag 2']}
          />
          <Deck
            title="test title"
            firstCardName="test first card"
            tags={['tag 1', 'tag 2']}
          />
          <Deck
            title="test title"
            firstCardName="test first card"
            tags={['tag 1', 'tag 2']}
          />
          <Deck
            title="test title"
            firstCardName="test first card"
            tags={['tag 1', 'tag 2']}
          />
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
