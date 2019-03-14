import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import Button from "shared/components/Button";

import Navigation from "shared/components/Navigation";

const AppContainer = styled.div`
  min-height: 100vh;
  /* width: 85%; */
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
  font-size: 4.5rem;
  font-weight: 800;
  margin: 0em;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }

  ${({ theme }) => theme.media.phoneOnly`font-size: 3.3rem`}
`;

const PageSubTitle = styled.h3`
  color: #d5d5d5;
  margin-top: 1em;
  text-align: center;

  ${({ theme }) => theme.media.phoneOnly`font-size: .8rem`}
`;

const StartNowButton = styled(Button)`
  /* font-size: 0.8rem; */
`;

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
