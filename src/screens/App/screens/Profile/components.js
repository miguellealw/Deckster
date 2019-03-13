import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

export const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;

  /* 699px or lower */
  ${({ theme }) => theme.media.phoneOnly`
    grid-template-columns: none;
    grid-template-rows: 1fr auto;
  `}
`;

export const ContentContainer = styled.div`
  /* width: 100vw; */

  display: grid;
  grid-template-rows: 1fr 2fr;

  ${({ theme }) => theme.media.phoneOnly`
    grid-template-rows: 0.3fr 1fr;
  `}
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
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.primaryGray};
  /* width: 100%; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3em;

  position: relative;
`;

export const Tabs = styled.ul`
  font-size: 1rem;
  background: ${({ theme }) => theme.colors.secondary};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
  border-radius: 0.625em;

  margin-bottom: 1.3em;
  width: 100%;
  height: 3em;

  display: flex;
  justify-content: center;
  align-items: center;

  /* position: absolute;
  top: 0; */

  li {
    display: inline-block;
    margin: 0 1em;

    a {
      /* color: #b0b0b0; */
      color: white;
    }
  }
`;

export const Name = styled.span`
  font-weight: bold;
`;

export const Email = styled.span`
  font-size: 0.8em;
  color: ${({ theme }) => theme.colors.secondaryGray};
`;

export const ImageContainer = styled.div`
  font-size: 1rem;

  width: 5em;
  height: 5em;

  border-radius: 100em;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #ccc;

  img {
    width: 5em;
    height: 5em;
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
