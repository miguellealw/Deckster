import styled from 'styled-components'

export default styled.h3`
  color: ${({ theme }) => theme.colors.secondaryGray};
  margin-top: 1em;
  text-align: center;

  ${({ theme }) => theme.media.phoneOnly`font-size: .8rem`}
`
