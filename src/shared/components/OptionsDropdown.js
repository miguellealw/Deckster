import React, { useState } from 'react'
import 'styled-components/macro'

import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const OptionsDropdown = ({ showOptions = true, children }) => {
  const [isOptionsOpen, setOptionsOpen] = useState(false)

  return (
    <>
      {showOptions && (
        <>
          {/* Deck Options Icon */}
          <div
            css={`
              font-size: 1rem;
              color: ${({ theme }) => theme.colors.secondaryGray};
              width: 1.5em;
              height: 1.5em;
              margin: 0.5em;
              /* background: gray; */
              /* padding: 1em; */
              border-radius: 100%;
              position: absolute;
              top: 0;
              right: 0;
              z-index: 5;

              display: flex;
              justify-content: center;
              align-items: center;

              &:hover {
                color: black;
              }
            `}
            onClick={e => {
              e.preventDefault()

              setOptionsOpen(!isOptionsOpen)
            }}
          >
            <FontAwesomeIcon icon={faEllipsisH} />
          </div>

          {/* Deck Options */}
          {isOptionsOpen && (
            <div
              css={`
                font-size: 0.85rem;
                background: ${({ theme }) => theme.colors.primaryGray};
                box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
                position: absolute;
                top: 2.5em;
                right: 0.5em;

                display: flex;
                flex-direction: column;
              `}
            >
              {children}
            </div>
          )}
        </>
      )}
    </>
  )
}

// Single Option Compound Component
OptionsDropdown.Option = ({ children, icon, ...props }) => {
  return (
    <span
      css={`
        border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryGray};
        width: 100%;
        height: 50%;
        color: black;
        padding: 0.7em 1.7em;

        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
          background: ${({ theme }) => theme.colors.secondaryGray};
        }
      `}
      {...props}
    >
      <FontAwesomeIcon
        icon={icon}
        css={`
          margin-right: 0.5em;
        `}
      />
      {children}
    </span>
  )
}

export default OptionsDropdown

/**
 * Component Usage
 * 
 * <OptionsDropdown>
 *    <Option onClick={}>
 *      <FontAwesomeIcon
          icon={faEdit}
          css={`
            margin-right: 0.5em;
          `}
        />
 *      Edit
 *    </Option>
 * 
 *    <Option onClick={}>
 *      <FontAwesomeIcon
          icon={faEdit}
          css={`
            margin-right: 0.5em;
          `}
        />
 *      Delete
 *    </Option>
 * </OptionsDropdown>
 *
 */
