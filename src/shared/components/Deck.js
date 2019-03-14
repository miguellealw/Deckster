import React from "react";
import styled from "styled-components";

const DeckContainer = styled.div`
  min-width: 25em;
  height: 16em;
  position: relative;
  border-radius: 0.438em;
  overflow: hidden;
  margin: 1em;

  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
`;

const DeckInfo = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.primaryGray};
  padding: 1.5em 1em;
`;

const DeckTitle = styled.span`
  /* font-size: 1.4rem; */
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
  /* margin-top: 1em; */
`;

const Deck = ({ title, image }) => {
  return (
    <DeckContainer image={image}>
      <DeckInfo>
        <DeckTitle>{title}</DeckTitle>
        <DeckDescription>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          blanditiis eveniet illo, consectetur commodi vero hic! Minus
          voluptatibus reprehenderit, quasi dolore nobis atque explicabo.
          Maiores nostrum modi facere assumenda similique.
        </DeckDescription>
        <TagContainer>
          <Tag>Math</Tag>
          <Tag>Trigonometry</Tag>
        </TagContainer>
      </DeckInfo>
    </DeckContainer>
  );
};

export default Deck;
