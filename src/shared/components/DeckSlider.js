import React from "react";
import styled from "styled-components";
import getImage from "shared/utils/getImage";

import Deck from "./Deck";

const DeckSliderContainer = styled.div`
  min-width: 75vw;
  max-width: 75vw;
  height: 20rem;

  background: white;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
  border-radius: 0.625em;
  overflow: auto;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const DecksContainer = styled.div`
  position: absolute;
  left: 0;

  padding: 0 2em;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardSlider = () => {
  return (
    <DeckSliderContainer>
      <DecksContainer>
        <Deck title={"trig identities"} image={getImage()} />
        <Deck title={"Periodic table"} image={getImage()} />
        <Deck title={"american states"} image={getImage()} />
        <Deck title={"State Capitals"} image={getImage()} />
      </DecksContainer>
    </DeckSliderContainer>
  );
};

export default CardSlider;
