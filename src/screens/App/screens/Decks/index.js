import React from "react";
import MediaQuery from "react-responsive";
import styled from "styled-components";

import SideNavigation from "shared/components/SideNavigation";
import Navigation from "shared/components/Navigation";

export const DecksContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;

  /* 500px or higher */
  @media (min-width: 500px) {
    grid-template-columns: 1fr 5fr;
  }
`;

const Decks = () => {
  return (
    <DecksContainer>
      <MediaQuery query={"(min-width: 500px)"}>
        {matches => (matches ? <SideNavigation /> : <Navigation />)}
      </MediaQuery>
    </DecksContainer>
  );
};

export default Decks;
