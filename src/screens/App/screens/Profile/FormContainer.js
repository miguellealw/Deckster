import styled from 'styled-components'

export default styled.form`
  width: 100%;
  /* width: 100%; */
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
  margin: 0 auto;
  /* background: pink; */

  ${({ theme }) => theme.media.phoneOnly`
    font-size: .6em;
    // width: 20em;
  `}
`
