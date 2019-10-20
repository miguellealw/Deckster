import styled from 'styled-components'

export default styled.div`
  display: grid;

  ${({ theme }) => theme.media.tabletLandscapeUp`
    width: 90%;
    margin: 0 auto;
  `};
`