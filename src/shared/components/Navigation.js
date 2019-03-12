import React, { useState } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import MediaQuery from "react-responsive";

import Logo from "shared/components/Logo";

const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 1rem;
  height: 3.5rem;
  position: relative;
  background-color: ${({theme}) => theme.colors.secondary};
  z-index: 10;

  width: 100%;

  @media (min-width: 500px) {
    width: 100%;
  }
`;

const ulStyles = {
  listStyle: "none",
  margin: 0
};

const NavButton = styled.button`
  margin: 0;
  font-family: Nunito;
  font-weight: bold;
  padding: 0.5rem 2rem;
  border-radius: 100rem;
  background: none;
  border: 2px solid ${({theme}) => theme.colors.primary};
  cursor: pointer;
  color: white;

  &:hover {
    border: 2px solid #0063ff;
    background: ${({theme}) => theme.colors.gradient};
  }
`;

/* background: red; */
const ButtonContainer = styled.ul`
  li {
    display: inline-block;
    margin-left: 1rem;
  }
`;

const NavIcon = styled.div`
  width: 1.3rem;
  height: 0.4rem;

  /* background: red; */

  position: relative;

  cursor: pointer;

  &::after,
  &::before {
    content: "";
    width: 100%;
    height: 0.1rem;
    background: white;
  }

  &::after {
    position: absolute;
    top: 0;
  }

  &::before {
    position: absolute;
    bottom: 0;
  }
`;

const DropdownContainer = styled.ul`
  font-size: 0.8rem;
  min-width: 10rem;
  min-height: 3rem;
  background-color: ${({theme}) => theme.colors.secondary};
  /* background: purple; */

  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);

  position: absolute;
  top: 100%;
  right: 0;

  li {
    color: white;
    text-align: center;
    padding: 1rem;
    border-top: 1px solid #1a2941;
    /* border-bottom: 1px solid #20324e; */

    &:hover {
      background: ${({theme}) => theme.colors.gradients};
    }
  }
`;

const Dropdown = () => (
  <DropdownContainer>
    <Link to="/profile/my-decks">
      <li>Profile</li>
    </Link>
    <Link to="/login">
      <li>Login</li>
    </Link>
    <Link to="/signup">
      <li>Signup</li>
    </Link>
  </DropdownContainer>
);

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavigationContainer>
      <Logo />
      <ButtonContainer style={ulStyles}>
        <MediaQuery minWidth="500px">
          <li>
            <Link to="/profile/my-decks">
              <NavButton>Profile</NavButton>
            </Link>
          </li>
          <li>
            <Link to="/login">
              <NavButton>Login</NavButton>
            </Link>
          </li>
          <li>
            <Link to="/signup">
              <NavButton>Sign Up</NavButton>
            </Link>
          </li>
        </MediaQuery>

        {/* Nav Icon */}
        <MediaQuery maxWidth="500px">
          <li>
            <NavIcon aria-label="menu" onClick={() => setOpen(!isOpen)} />
          </li>
        </MediaQuery>
      </ButtonContainer>
      <MediaQuery maxWidth="500px">{isOpen && <Dropdown />}</MediaQuery>
    </NavigationContainer>
  );
};

export default React.memo(Navigation);
