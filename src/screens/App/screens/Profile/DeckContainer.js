import styled from 'styled-components'

export default styled.div`
  /* background: pink; */
  padding-top: 3em;
  /* font-size: 1.3rem; */

  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fill, minmax(23em, 1fr));
  justify-items: center;

  /* For pseudo elements of Deck component */
  position: relative;
  z-index: 1;

  ${({ theme }) => theme.media.tabletLandscapeUp`
    width: 100%;
    // margin: 0 auto;
  `}
`
