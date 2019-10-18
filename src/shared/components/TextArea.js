import styled from 'styled-components'
// import Input from './Input'

export default styled.textarea`
  font-size: 1em;
  max-width: 20em;
  min-width: 20em;
  max-height: 10em;
  /* width: 100%; */
  padding: 0.8em 0;
  text-indent: 1em;
  border-radius: 0.625em;
  border: none;
  background-color: ${props =>
    props.background ? props.background : '#f4f4f4'};
  border: 1px solid #ececec;
  outline: none;
  font-family: 'Nunito', sans-serif;
  font-weight: bold;

  ::placeholder {
    color: ${props => props.theme.colors.secondaryGray};
  }

  &:hover,
  &:focus {
    border-color: #c2c2c2;
  }
`
