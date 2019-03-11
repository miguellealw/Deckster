import React from 'react';
import styled from "styled-components";

const Logo = styled.h2`
  text-transform: uppercase;
  font-size: 0.7rem;
  font-weight: 900;
  letter-spacing: 0.3rem;
  margin: 0;
  color: white;
`;

const blueStyles = {
  color: "#009DFF"
};

export default () => (
  <Logo>
    <span style={blueStyles}>Deck</span>ify
  </Logo>
);
