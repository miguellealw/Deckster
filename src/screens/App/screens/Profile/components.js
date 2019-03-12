import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

export const ProfileContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;

  /* grid-template-areas:
    "navigation userInfo"
    "navigation deckInfo"; */

  /* 500px or higher */
  @media (min-width: 500px) {
    grid-template-columns: 1fr 5fr;
  }
`;

export const ContentContainer = styled.div`
  /* width: 100vw; */

  display: grid;
  grid-template-rows: 0.3fr 1fr;

  @media (min-width: 500px) {
    grid-template-rows: 1fr 2fr;
  }
`;

// TODO: check if section element is better
export const UserInfo = styled.div`
  min-height: 40vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    margin-top: 0.5rem;
  }

  /* grid-area: userInfo */
`;

export const DeckInfo = styled.div`
  background-color: #f4f4f4;
  /* width: 100%; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;

  /* grid-area: deckInfo; */
`;

export const Tabs = styled.ul`
  /* background: rebeccapurple; */
  margin-bottom: 2rem;

  /* width: 10em; */

  li {
    display: inline-block;
    margin: 0 1rem;

    a {
      color: #b0b0b0;
    }
  }
`;

export const Name = styled.span`
  font-weight: bold;
`;

export const Email = styled.span`
  font-size: 0.8em;
  color: #b0b0b0;
`;

export const ImageContainer = styled.div`
  width: 5rem;
  height: 5rem;

  border-radius: 100rem;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #ccc;

  img {
    width: 5rem;
    height: 5rem;
    object-fit: cover;
    object-position: center;
  }
`;

export const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => ({
      style: {
        textDecoration: isCurrent ? "underline" : "none"
      }
    })}
  />
);
