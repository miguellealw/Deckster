import styled from 'styled-components'

export default styled.div.attrs(({ direction }) => ({
  flexDirection: direction || 'row',
}))`
  width: 100%;
  /* background-color: cyan; */
  margin-bottom: 2em;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${props => props.flexDirection};

  ${({ theme }) => theme.media.phoneOnly`
    flex-direction: column;

    label {
      width: 100%;
      margin-right: auto;
      margin-bottom: 0.8em;
    }
  `}
`
