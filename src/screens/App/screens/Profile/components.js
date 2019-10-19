import React from 'react'
import styled from 'styled-components'
// import { Link } from "@reach/router";
import ReactModal from 'react-modal'

import FormInput from 'shared/components/FormInput'
import Button from 'shared/components/Button'
import TextArea from 'shared/components/TextArea'

export const ProfilePage = styled.div`
  background: #e6e6e6;
  width: 100%;
  min-height: 100vh;
  padding-bottom: 4em;

  /* 900px up */
  ${({ theme }) => theme.media.tabletLandscapeUp`
    // grid-template-columns: 0.8fr 5fr;
  `}
`

export const ContentContainer = styled.div`
  display: grid;

  ${({ theme }) => theme.media.tabletLandscapeUp`
    width: 90%;
    margin: 0 auto;
  `};
`

export const DeckContainer = styled.div`
  /* background: pink; */
  padding-top: 3em;
  /* font-size: 1.3rem; */

  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fill, minmax(23em, 1fr));
  justify-items: center;

  /* For pseudo elements of Deck component */
  position: relative;
  z-index: 1;

  ${({ theme }) => theme.media.tabletLandscapeUp`
    width: 100%;
    // margin: 0 auto;
  `}
`

export const Dropdown = styled.div``

// export const NavLink = props => (
//   <Link
//     {...props}
//     getProps={({ isCurrent }) => ({
//       style: {
//         textDecoration: isCurrent ? "underline" : "none"
//       }
//     })}
//   />
// );

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
    color: ${props => props.theme.colors.primaryGray};
    margin: 1em 0;
  }

  ${({ theme }) => theme.media.phoneOnly`
    font-size: .6em;
    // width: 20em;
  `}
`

const CloseIcon = styled.i`
  font-size: 2em;
  position: absolute;
  top: 0.3em;
  right: 0.5em;
  cursor: pointer;
  color: ${props => props.theme.colors.secondaryGray};
  /* background: red; */
  /* padding: .3em; */

  :hover {
    color: black;
  }

  ${({ theme }) => theme.media.phoneOnly`
    font-size: 1em;
    position: absolute;
    top: .8em;
    right: 1em;
  `}
`

export const CreateDeckModal = ({ isOpen, handleClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel="Create Deck Form"
      style={{
        content: {
          minWidth: '2em',
          maxWidth: '35em',
          margin: '0 auto',
          borderRadius: '1em',
        },
        overlay: {
          background: 'rgba(0,0,0,.6)',
          zIndex: '10',
        },
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
        <FormInput label="Description (optional)" direction="column">
          <TextArea
            rows="4"
            placeholder="Deck About the Capitals of the World"
          />
        </FormInput>
        <FormInput
          label="Tags"
          placeholder="Geography, History"
          direction="column"
        />
        <Button>Create Deck</Button>
      </FormContainer>
    </ReactModal>
  )
}
