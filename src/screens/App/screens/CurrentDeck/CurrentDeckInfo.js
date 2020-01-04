import React from 'react'
import 'styled-components/macro'

import Deck from 'shared/components/Deck'
import Button from 'shared/components/Button'

const DeckInfo = ({ selectedDeck, numOfCards }) => (
  <section
    css={`
      width: 100%;
      background: ${({ theme }) => theme.colors.secondary};
      color: white;
      height: 40vh;

      button {
        padding-right: 3rem;
        padding-left: 3rem;
        font-size: 0.9rem;
      }
    `}
  >
    {/* Container for Deck Info */}
    <div
      css={`
        width: 80%;
        margin: 0 auto;
        z-index: 1;
        position: relative;
        display: flex;
        height: 100%;
      `}
    >
      {/* Deck Comp */}
      <div
        css={{
          width: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Deck
          title={selectedDeck.title}
          firstCardName={selectedDeck.firstCardName}
          tags={selectedDeck.tags}
          showOptions={false}
        />
      </div>

      {/* Deck Info */}
      <div
        css={{
          width: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',

          h2: {
            fontSize: '3.5rem',
            fontWeight: 'bold',
            zIndex: 1,
          },

          '> div, button': {
            margin: '1rem 0',
          },
        }}
      >
        <h2>{selectedDeck.title}</h2>
        <div>
          {/* TODO: Make this dynamic */}
          <span>
            {numOfCards} {numOfCards > 1 ? 'Cards' : 'Card'}
          </span>
          <span css={{ padding: '0 .5rem' }}>&middot;</span>
          <span>by John Doe</span>
        </div>
        <Button>Study</Button>
      </div>
    </div>
  </section>
)

export default DeckInfo
