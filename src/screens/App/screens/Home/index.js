import React from 'react'
import { Link } from '@reach/router'

// Components
import StartNowButton from 'shared/components/Button'
import Main from './Main'
import PageSubTitle from './PageSubTitle'
import PageTitle from './PageTitle.js'

import IsolatedContainer from 'shared/components/IsolatedContainer'

const Home = () => (
  <IsolatedContainer className="App">
    <Main>
      <PageTitle data-testid="home-page-title">
        <span>Deck</span>ster
      </PageTitle>
      <PageSubTitle>Create, Study, and Share Decks of Flashcards</PageSubTitle>
      <Link to="/signup">
        {/* <Button>Start Now</Button> */}
        <StartNowButton>Start Now</StartNowButton>
      </Link>
    </Main>
  </IsolatedContainer>
)

export default Home
