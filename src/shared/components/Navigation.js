import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

import Logo from "shared/components/Logo";

const NavigationContatiner = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 1rem;
  height: 3.5rem;
  position: relative;
  background-color: #152134;
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

const LoginButton = styled.button`
  margin: 0;
  font-family: Nunito;
  font-weight: bold;
  padding: 0.5rem 2rem;
  border-radius: 100rem;
  background: none;
  border: 2px solid #009dff;
  cursor: pointer;
  color: white;

  &:hover {
    border: 2px solid #0063ff;
    background: linear-gradient(to bottom, #009dff 0%, #0063ff 100%);
  }
`;

const Navigation = () => {
  return (
    <NavigationContatiner>
      <Link to="/">
        <Logo />
      </Link>
      <ul style={ulStyles}>
        <li>
          <Link to="/login">
            <LoginButton>Login</LoginButton>
          </Link>
        </li>
        {/* <li><button style={loginButtonStyles}>Sign Up</button></li> */}
      </ul>
    </NavigationContatiner>
  );
};

export default React.memo(Navigation);
