import React from 'react'
import styled, { withTheme } from 'styled-components'

export default styled.button`
  margin: 0;
  font-family: Nunito;
  font-weight: bold;
  padding: 0.5rem 2rem;
  border-radius: 100rem;
  background: none;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  color: white;

  &:hover {
    border: 2px solid #0063ff;
    background: ${({ theme }) => theme.colors.gradient};
  }
`
