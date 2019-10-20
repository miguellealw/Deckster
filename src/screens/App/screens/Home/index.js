import React from 'react'
import { Link } from '@reach/router'

// Components
import StartNowButton from 'shared/components/Button'
import AppContainer from './AppContainer'
import Main from './Main'
import PageSubTitle from './PageSubTitle'
import PageTitle from './PageTitle.js'

const Home = () => (
  <AppContainer className="App">
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
  </AppContainer>
)

export default Home
