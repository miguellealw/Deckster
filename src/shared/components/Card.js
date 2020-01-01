import styled from 'styled-components'

const width = 23
const height = width - 9
export default styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  width: ${width}rem;
  height: ${height}rem;
  border-radius: 0.438em;
  margin: 1em;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
  background: white;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.4);
  }
`
