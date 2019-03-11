import React from "react";
import styled from "styled-components";

import Deck from "./Deck";

const CardSliderContainer = styled.div`
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
    <CardSliderContainer>
      <DecksContainer>
        <Deck title={"trig identities"}/>
        <Deck title={"Periodic table"}/>
        <Deck title={"american states"}/>
        <Deck title={"State Capitals"}/>
      </DecksContainer>
    </CardSliderContainer>
  );
};

export default CardSlider;
