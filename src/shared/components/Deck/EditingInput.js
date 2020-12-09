import React, { useState } from 'react'
import 'styled-components/macro'

import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const EditingInput = ({
  value,
  setValue,
  title,
  setEditing,
  updateDecksInfo,
}) => {
  return (
    <div>
      <input
        value={value}
        autoFocus
        onChange={e => setValue(e.currentTarget.value)}
        css={`
          border: 1px solid ${({ theme }) => theme.colors.secondaryGray};
          border-radius: 50em;
          text-indent: 0.5rem;
          font-size: 1.2rem;
        `}
        onClick={e => {
          e.preventDefault()
          // e.currentTarget.focus()
        }}
      />
      <FontAwesomeIcon
        icon={faCheck}
        css={`
          margin-left: 0.5em;
          &:hover {
            color: black;
          }
        `}
        onClick={e => {
          e.preventDefault()

          // Only make http req if input field is changed
          if (value !== title) updateDecksInfo(value)

          // Wait 100ms to avoid a 'flash' of data
          setTimeout(() => setEditing(false), 100)
        }}
      />
      <span
        css={`
          margin-left: 0.5em;
          color: red;
          &:hover {
            color: black;
          }
        `}
        onClick={e => {
          e.preventDefault()

          //Reset form value to title
          setValue(title)

          // Wait 100ms to avoid a 'flash' of data
          setTimeout(() => setEditing(false), 100)
        }}
      >
        Cancel
      </span>
    </div>
  )
}

export default EditingInput
