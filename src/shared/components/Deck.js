import React from "react";
import styled from "styled-components";

const DeckContainer = styled.div`
  min-width: 20em;
  height: 12em;
  position: relative;
  border-radius: 0.438em;
  background: #d9d9d9;
  overflow: hidden;
  margin: 1rem;

  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
`;

const DeckInfo = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  background: #f4f4f4;
  padding: 1.5rem 1rem;
`;

const DeckTitle = styled.span`
  font-weight: bold;
`;

const DeckDescription = styled.span``;

const Tag = styled.span``;

const Deck = ({ title, image }) => {
  return (
    <DeckContainer image={image}>
      <DeckInfo>
        <DeckTitle >{title}</DeckTitle>
        <DeckDescription />
        <Tag />
      </DeckInfo>
    </DeckContainer>
  );
};

export default Deck;
