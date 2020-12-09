import React, { useState } from 'react'
import styled from 'styled-components/macro'
import TextArea from 'shared/components/TextArea'
import IsolatedContainer from 'shared/components/IsolatedContainer'
import Button from 'shared/components/Button'
import MarkdownOutput from 'shared/components/MarkdownOutput'

import InputLabel from 'shared/components/FormFields/InputLabel'
import Field from 'shared/components/FormFields/Field'

import { useStackEdit } from 'use-stackedit'

import { Link } from '@reach/router'

const CardSideBar = styled.div`
  background: ${({ theme }) => theme.colors.primaryGray};
  height: 100%;
  width: 100%;

  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
`

const PreviewWindow = ({ children }) => (
  <div
    css={`
      background: blue;
      max-width: 20em;
      min-width: 20em;
      min-height: 10em;
      // max-height: 15em;
      background-color: ${props =>
        props.background ? props.background : '#f4f4f4'};
      border: 1px solid #ececec;
      border-radius: 0.625em;
    `}
  >
    <MarkdownOutput>{children}</MarkdownOutput>
  </div>
)

const OpenEditorButton = ({ formValue, openStackedit }) => {
  return (
    <span
      css={`
        cursor: pointer;
        color: ${props => props.theme.colors.primary};
        font-weight: bold;
      `}
      onClick={() => {
        openStackedit({
          content: {
            text: formValue, // and the Markdown content.
          },
        })
      }}
    >
      Open Editor
    </span>
  )
}

const CardEditor = () => {
  const [frontValue, setFrontValue] = useState('')
  const [backValue, setBackValue] = useState('')

  const {
    openStackedit: openFrontStackedit,
    onFileChange: onFrontFileChange,
  } = useStackEdit(setFrontValue)
  const {
    openStackedit: openBackStackedit,
    onFileChange: onBackFileChange,
  } = useStackEdit(setBackValue)

  return (
    <IsolatedContainer
      css={`
        display: grid;
        grid-template-columns: 15% auto;
      `}
    >
      <CardSideBar />

      {/* Main Content Container */}
      <div>
        {/* Card Editor Top Part */}
        <div
          css={`
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 70%;
            margin: 2em auto;
          `}
        >
          <div
            css={`
              > * {
                margin: 0.5em 0;
              }
            `}
          >
            <Link to="..">Back to Deck</Link>
            <h1
              css={`
                font-size: 2.5rem;
                font-weight: bold;
                color: ;
              `}
            >
              Card Editor
            </h1>
            <a
              href="https://www.markdownguide.org/basic-syntax/"
              target="_blank"
            >
              How to use Markdown
            </a>
          </div>
          <Button
            css={`
              height: 2.5em;
              padding: 0 2.5em;
              margin: 0;
            `}
          >
            Create Card
          </Button>
        </div>

        {/* Card Editor Preview and Fields */}
        <div
          css={`
            display: flex;
            // background: orange;
          `}
        >
          {/* Card Fields Sections */}
          <div
            css={`
              width: 50%;
              // background: tomato;
            `}
          >
            <Field direction="column">
              <div
                css={`
                  width: 100%;
                  display: flex;
                  justify-content: space-between;
                `}
              >
                <InputLabel
                  htmlFor="cardFront"
                  direction="space-between"
                  css={`
                    display: inline-block;
                    width: 2em;
                    margin-bottom: 0;
                  `}
                >
                  Front
                </InputLabel>
                <OpenEditorButton
                  formValue={frontValue}
                  openStackedit={openFrontStackedit}
                />
              </div>

              <TextArea
                value={frontValue}
                id="cardFront"
                arial-label="card-front"
                placeholder="The front of the card"
                onChange={e => setFrontValue(e.currentTarget.value)}
              />
            </Field>

            <Field direction="column">
              <InputLabel htmlFor="cardBack">Back</InputLabel>
              <OpenEditorButton
                formValue={backValue}
                openStackedit={openBackStackedit}
              />

              <TextArea
                value={backValue}
                id="cardBack"
                arial-label="card-back"
                placeholder="The back of the card"
                onChange={e => setBackValue(e.currentTarget.value)}
              />
            </Field>
          </div>

          {/* Card Preview Section */}
          <div
            css={`
              width: 50%;
              // background: pink;
            `}
          >
            <span>Card Preview</span>

            {/* Preview window */}
            <PreviewWindow>{frontValue}</PreviewWindow>
            <PreviewWindow>{backValue}</PreviewWindow>
          </div>
        </div>
      </div>
    </IsolatedContainer>
  )
}

export default CardEditor
