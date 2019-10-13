import React from "react";
import { Link } from "@reach/router";

import {
  AppContainer,
  Main,
  PageTitle,
  PageSubTitle,
  StartNowButton
} from "./components";

const Home = () => (
  <AppContainer className="App">
    <Main>
      <PageTitle>
        <span>Deck</span>ster
      </PageTitle>
      <PageSubTitle>Create, Study, and Share Decks of Flashcards</PageSubTitle>
      <Link to="/signup">
        {/* <Button>Start Now</Button> */}
        <StartNowButton>Start Now</StartNowButton>
      </Link>
    </Main>
  </AppContainer>
);

export default Home;
