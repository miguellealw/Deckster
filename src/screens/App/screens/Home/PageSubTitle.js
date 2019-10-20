import styled from 'styled-components'

export default styled.h3`
  color: #d5d5d5;
  margin-top: 1em;
  text-align: center;

  ${({ theme }) => theme.media.phoneOnly`font-size: .8rem`}
`
