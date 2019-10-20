import styled from 'styled-components'

export default styled.h1`
  font-size: 4.5rem;
  font-weight: 800;
  margin: 0em;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }

  ${({ theme }) => theme.media.phoneOnly`font-size: 3.3rem`}
`
