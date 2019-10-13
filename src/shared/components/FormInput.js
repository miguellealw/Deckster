import React from "react";
import styled from "styled-components";
import Input from "shared/components/Input";

export const InputContainer = styled.div.attrs(({ direction }) => ({
  flexDirection: direction || "row"
}))`
  /* width: 100%; */
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
`;

export const LabelContainer = styled.div`
  font-size: 0.8em;
  flex: 1;
  /* background: tomato; */

  display: flex;
  justify-content: ${props => (props.direction ? "flex-start" : "flex-end")};
  margin-bottom: ${props => (props.direction ? ".5em" : "none")};

  width: 100%;
  label {
    font-weight: bold;
    margin-right: 1em;
  }
  ${({ theme }) => theme.media.phoneOnly`width: 100%;`}
`;

export const InputFieldContainer = styled.div`
  flex: 4;
  /* background: purple; */

  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormInput = ({
  label,
  type = "text",
  placeholder,
  onChange,
  value,
  direction
}) => {
  return (
    <InputContainer direction={direction}>
      <LabelContainer direction={direction}>
        <label htmlFor={label.toLowerCase()}>{label}:</label>
      </LabelContainer>
      <InputFieldContainer>
        {/* TODO: remove spaces from label when making it id  */}
        <Input
          type={type}
          id={label.toLowerCase()}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        />
      </InputFieldContainer>
    </InputContainer>
  );
};

export default FormInput;