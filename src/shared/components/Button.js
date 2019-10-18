import styled from 'styled-components'

export default styled.button`
  font-family: Nunito;
  font-size: 1em;
  border-radius: 100em;
  border: none;
  padding: 0.7em 2em;
  background: ${({ theme }) => theme.colors.gradient};
  color: white;
  cursor: pointer;
  font-weight: bold;
  margin-top: 1em;
`
