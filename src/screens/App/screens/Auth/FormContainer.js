import styled from 'styled-components'

export default styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;

  /* Move up the height of the nav to center vertically */
  margin-top: -3.5rem;

  ${({ theme }) => theme.media.phoneOnly`font-size: .8em;`}
`