import styled from 'styled-components'

export default styled.div`
  background: #e6e6e6;
  width: 100%;
  min-height: 100vh;
  padding-bottom: 4em;

  /* 900px up */
  ${({ theme }) => theme.media.tabletLandscapeUp`
    // grid-template-columns: 0.8fr 5fr;
  `}
`
