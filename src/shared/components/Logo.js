import React from 'react'
import { withTheme } from 'styled-components/macro'
const Logo = ({ colorOfText = 'white', theme, ...props }) => {
  return (
    <h2
      css={`
        text-transform: uppercase;
        font-size: 0.7rem;
        font-weight: 900;
        letter-spacing: 0.2rem;
        margin: 0;
        color: ${colorOfText};

      ` + props.css}
      {...props}
    >
      <span
        css={`
          color: ${theme.colors.primary};
        `}
      >
        Deck
      </span>
      ster
      <span role="img" aria-label="flashcards">
        📇
      </span>
    </h2>
  )
}

export default withTheme(Logo)
