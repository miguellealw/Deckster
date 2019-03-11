import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

import Navigation from "shared/components/Navigation";

const AppContainer = styled.div`
  /* width: 85%; */
  min-height: 100vh;
  /* margin: 0 auto; */
`;

const Main = styled.main`
  /* width: 85%; */
  width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin: 0em;

  /* @media screen and (min-width: 500px) {
    font-size: 5rem;
  } */
`;

const PageSubTitle = styled.h3`
  color: #d5d5d5;
  margin-top: 1em;
  text-align: center;
  font-size: 0.8rem;

  /* @media screen and (min-width: 500px) {
    font-size: 1.2rem;
  } */
`;

const StartNowButton = styled.button`
  font-family: Nunito;
  border-radius: 100rem;
  border: none;
  padding: 0.6rem 2rem;
  font-size: .8rem;
  background: linear-gradient(to bottom, #009dff 0%, #0063ff 100%);
  color: white;
  cursor: pointer;
  font-weight: bold;
  margin-top: 1rem;

  /* @media screen and (min-width: 500px) {
    font-size: 1.2rem;
  } */
`;

const blueStyles = {
  color: "#009DFF"
};

const Home = () => (
  <AppContainer className="App">
    <Navigation />
    <Main>
      <PageTitle>
        <span style={blueStyles}>Deck</span>ify
      </PageTitle>
      <PageSubTitle>Create, Study, and Share Decks of Flashcards</PageSubTitle>
      <Link to="/signup">
        <StartNowButton>Start Now</StartNowButton>
      </Link>
    </Main>
  </AppContainer>
);

export default Home;
