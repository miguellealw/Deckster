import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

import Logo from "shared/components/Logo";

const NavContainer = styled.nav`
  /* min-width: 6rem; */
  /* font-size: 1rem; */
  height: 100vh;

  position: sticky;
  position: -webkit-sticky;
  top: 0px;

  background-color: #152134;
  padding: 5em;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  /* grid-area: navigation */

  ul {
    align-self: center;
    flex: 1;
    /* background: pink; */

    display: flex;
    flex-flow: column wrap;
    justify-content: center;
  }

  li {
    margin-bottom: 2em;
    text-align: center;
    /* font-size: 0.8rem; */
    list-style: none;
    /* border-bottom: 1px solid #212D40; */
  }

  a {
    /* margin-bottom: 2rem; */
    text-align: center;
    /* font-size: 0.8em; */
  }
`;

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => ({
      style: {
        color: isCurrent ? "default" : "white"
      }
    })}
  />
);

const PartialNavLink = props => (
  <Link
    {...props}
    getProps={({ isPartiallyCurrent }) => ({
      style: {
        color: isPartiallyCurrent ? "default" : "white"
      }
    })}
  />
);

const SideNavigation = () => {
  return (
    <NavContainer>
      <Logo>Deckify</Logo>
      <ul>
        <li>
          <PartialNavLink to="/profile">Profile</PartialNavLink>
        </li>
        <li>
          <PartialNavLink to="/decks">Decks</PartialNavLink>
        </li>
        <li>
          <PartialNavLink to="/explore">Explore</PartialNavLink>
        </li>
      </ul>
      <NavLink to="/">Log Out</NavLink>
    </NavContainer>
  );
};

export default SideNavigation;
