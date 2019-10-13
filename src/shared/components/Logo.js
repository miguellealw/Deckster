import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const Logo = styled.h2`
  text-transform: uppercase;
  font-size: 0.7rem;
  font-weight: 900;
  letter-spacing: 0.2rem;
  margin: 0;
  color: white;
`;

const blueStyles = {
  color: "#009DFF"
};

export default () => (
  <Link to="/" style={{ textDecoration: "none" }}>
    <Logo>
      <span style={blueStyles}>Deck</span>ster
      <span role="img" aria-label="flashcards">
        📇
      </span>
    </Logo>
  </Link>
);
