import React from 'react'
// import MediaQuery from "react-responsive";
// import { Router } from "@reach/router";
import { withTheme } from 'styled-components'

import Deck from 'shared/components/Deck'
import { ProfilePage, DeckContainer, ContentContainer } from './components'

const Profile = ({ theme }) => {
  // const [isOpen, setOpen] = React.useState(false);

  // const handleClose = () => setOpen(false);
  // const handleOpen = () => setOpen(true);

  return (
    <ProfilePage>
      <ContentContainer>
        <h2>Your Decks</h2>
        <div className="dropdowns-container">
          <div className="dropdown">
            <label htmlFor="order-select">Sort:</label>
            <select name="pets" id="pet-select">
              <option value="">Alphabetical (A-Z)</option>
              <option value="">Reverse Alphabetical (Z-A)</option>
              <option value="dog">Recently Created</option>
              <option value="cat">Recently Studied </option>
            </select>
          </div>

          <div className="dropdown">
            <label htmlFor="order-select">Filter:</label>
            <select name="pets" id="pet-select">
              <option value="">All</option>
              <option value="">Math</option>
              <option value="dog">Computer Science</option>
            </select>
          </div>
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
