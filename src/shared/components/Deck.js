import React from "react";
import styled from "styled-components";

const width = 23;
const height = width - 9;

const DeckContainer = styled.div`
  font-size: 0.8rem;
  width: ${width}em;
  height: ${height}em;
  border-radius: 0.438em;
  margin: 1em;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
  background: white;
  position: relative;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.2s;


  .deckFirstCard {
    font-size: 1.5rem;
    color: ${props => props.theme.colors.secondaryGray};
  }

  &:before,
  &:after {
    content: "";
    height: inherit;
    border-radius: inherit;
    box-shadow: inherit;
    background: white;
    position: absolute;
    transition: 0.2s;
  }

  &:before {
    min-width: calc(${width}em - 1em);
    transform: translateY(-0.5rem);
    z-index: -1;
  }

  &:after {
    min-width: calc(${width}em - 2em);
    transform: translateY(-1rem);
    z-index: -2;
  }

  /* Hover Effects */
  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
  }

  &:hover:before {
    transform: translateY(-1rem);
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.4);
  }

  &:hover:after {
    transform: translateY(-2rem);
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.4);
  }

  ${({ theme }) => theme.media.tabletLandscapeUp`
    // grid-template-columns: 0.8fr 5fr;
    font-size: 1rem;
  `}
`;

const DeckInfo = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.primaryGray};
  padding: 1em 1em;
`;

const DeckTitle = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
`;

const DeckDescription = styled.div`
  font-size: 0.6rem;
  color: ${({ theme }) => theme.colors.secondaryGray};
  line-height: 1.3em;
  margin: 1em 0;
`;

const Tag = styled.span`
  font-size: 0.6rem;
  width: 1em;
  height: 0.5em;
  padding: 0.2em 0.5em;
  background: tomato;
  border-radius: 100em;
  margin-right: 0.5em;
  color: white;
  cursor: pointer;
`;

const TagContainer = styled.div`
  margin-top: .6em;
`;

const Deck = ({ title }) => {
  return (
    <DeckContainer>
      <span className="deckFirstCard">Test First Card</span>
      <DeckInfo>
        <DeckTitle>{title}</DeckTitle>
        <TagContainer>
          <Tag>Math</Tag>
          <Tag>Trigonometry</Tag>
        </TagContainer>
      </DeckInfo>
    </DeckContainer>
  );
};

export default Deck;
