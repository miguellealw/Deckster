// import React from "react";
import styled from "styled-components";

export default styled.input`
  width: 20rem;
  padding: 0.8rem 0;
  text-indent: 1rem;
  border-radius: 100rem;
  border: none;
  background-color: ${props =>
    props.background ? props.background : "#f4f4f4"};
  border: 1px solid #ececec;
  outline: none;
  font-family: "Nunito", sans-serif;
  font-weight: bold;

  ::placeholder {
    color: ${props => props.theme.colors.secondaryGray}
  }

  &:hover,
  &:focus {
    border-color: #c2c2c2;
  }
`;
