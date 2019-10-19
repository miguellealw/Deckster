import React from 'react'
// import MediaQuery from "react-responsive";
// import { Router } from "@reach/router";
import { withTheme } from 'styled-components/macro'

import Deck from 'shared/components/Deck'
import {
  ProfilePage,
  DeckContainer,
  ContentContainer,
} from './components'

import Dropdown from 'shared/components/Dropdown'

const Profile = ({ theme }) => {
  // const [isOpen, setOpen] = React.useState(false);

  // const handleClose = () => setOpen(false);
  // const handleOpen = () => setOpen(true);

  return (
    <ProfilePage>
      <ContentContainer>
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
            <Dropdown.Item value="Math">
              Math
            </Dropdown.Item>
            <Dropdown.Item value="Computer Science">
              Computer Science
            </Dropdown.Item>
          </Dropdown>
        </div>

        <DeckContainer>
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
        </DeckContainer>
      </ContentContainer>

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
