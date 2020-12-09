import styled from 'styled-components'

export default styled.i`
  font-size: 2em;
  position: absolute;
  top: 0.3em;
  right: 0.5em;
  cursor: pointer;
  color: ${props => props.theme.colors.secondaryGray};
  z-index: 2;
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
