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

  h2 {
    font-size: 3em;
    font-weight: bold;
    text-align: center;
    color: ${props => props.theme.colors.primaryGray};
    margin: 1em 0;
  }

  ${({ theme }) => theme.media.phoneOnly`
    font-size: .6em;
    // width: 20em;
  `}
`
