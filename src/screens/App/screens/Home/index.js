import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

import Navigation from "shared/components/Navigation";
import {
  AppContainer,
  Main,
  PageTitle,
  PageSubTitle,
  StartNowButton
} from "./components";

const Home = () => (
  <AppContainer className="App">
    <Navigation />
    <Main>
      <PageTitle>
        <span>Deck</span>ify
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
