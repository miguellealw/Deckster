import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import ReactModal from "react-modal";

import FormInput from "shared/components/FormInput";
import Button from "shared/components/Button";

export const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: none;
  grid-template-rows: 1fr auto;
  /* grid-template-rows: 1fr; */

  /* 900px up */
  ${({ theme }) => theme.media.tabletLandscapeUp`
    grid-template-columns: 0.8fr 5fr;
  `}
`;

export const ContentContainer = styled.div`
  /* width: 100vw; */
  font-size: 1.3rem;

  display: grid;
  grid-template-rows: 1fr 2fr;

  ${({ theme }) => theme.media.tabletLandscapeUp`
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
    margin-top: 0.5em;
  }

  ${({ theme }) => theme.media.phoneOnly`
    font-size: 1.3rem;
  `}
`;

export const ImageContainer = styled.div`
  font-size: 1.3rem;

  width: 5em;
  height: 5em;

  border-radius: 100em;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #ccc;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);

  img {
    width: 5em;
    height: 5em;
    object-fit: cover;
    object-position: center;
  }

  ${({ theme }) => theme.media.phoneOnly`
    font-size: 1.5rem;
  `}
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

  ${({ theme }) => theme.media.phoneOnly`
    padding: 1em;
  `}
`;

export const Tabs = styled.ul`
  font-size: 1em;
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

  ${({ theme }) => theme.media.phoneOnly`
    font-size: .8em;
  `}
`;

export const Name = styled.span`
  font-weight: bold;
`;

export const Email = styled.span`
  font-size: 0.8em;
  color: ${({ theme }) => theme.colors.secondaryGray};
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

const FormContainer = styled.form`
  width: 100%;
  /* width: 100%; */
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  position: relative;
  margin: 0 auto;
  /* background: pink; */

  h2 {
    font-size: 3em;
    font-weight: bold;
    text-align: center;
    color: ${props => props.theme.colors.primaryGray}
    margin: 1em 0;
  }

  ${({ theme }) => theme.media.phoneOnly`
    font-size: .6em;
    // width: 20em;
  `}
`;

const CloseIcon = styled.i`
  font-size: 2em;
  position: absolute;
  top: 0.3em;
  right: 0.5em;
  cursor: pointer;
  color: ${props => props.theme.colors.secondaryGray};

  :hover {
    color: black;
  }

  ${({ theme }) => theme.media.phoneOnly`
    font-size: 1em;
    position: absolute;
    top: .8em;
    right: 1em;
  `}
`;

export const CreateDeckModal = ({ isOpen, handleClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel="Create Deck Form"
      style={{
        content: {
          minWidth: "2em",
          maxWidth: "35em",
          margin: "0 auto",
          borderRadius: "1em"
        },
        overlay: {
          background: "rgba(0,0,0,.6)",
          zIndex: "10"
        }
      }}
    >
      <CloseIcon className="icon ion-md-close" onClick={handleClose} />
      <FormContainer>
        <h2>Create Deck</h2>
        <FormInput
          label="Deck Name"
          placeholder="World Capitals"
          direction="column"
        />
        <FormInput
          label="Description (optional)"
          placeholder="Deck About the Capitals of the World"
          direction="column"
        />
        <FormInput
          label="Tags"
          placeholder="Geography, History"
          direction="column"
        />
        <Button>Create Deck</Button>
      </FormContainer>
    </ReactModal>
  );
};
