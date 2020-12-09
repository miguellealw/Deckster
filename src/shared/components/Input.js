// import React from "react";
import styled from 'styled-components'

export default styled.input`
  font-size: 1em;
  width: 20em;
  /* width: 100%; */
  padding: 0.8em 0;
  text-indent: 1em;
  border-radius: 100em;
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
