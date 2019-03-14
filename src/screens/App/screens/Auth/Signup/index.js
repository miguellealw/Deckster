import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

import Input from "shared/components/Input";
import Navigation from "shared/components/Navigation";
import Button from "shared/components/Button";
import {
  PageContainer,
  FormContainer,
  Title,
  Form,
  LabelContainer,
  InputContainer,
  InputFieldContainer,
  SignupMessage,
  ButtonContainer
} from "./components";

const Login = () => {
  const [value, setValue] = useState("");
  const onChange = e => setValue(e.target.value);

  return (
    <PageContainer>
      <Navigation />

      <FormContainer>
        <Title>Sign Up</Title>

        <Form>
          <InputContainer>
            <LabelContainer>
              <label htmlFor="email">Email:</label>
            </LabelContainer>
            <InputFieldContainer>
              <Input
                type="email"
                id="email"
                name="email"
                onChange={onChange}
                value={value}
              />
            </InputFieldContainer>
          </InputContainer>
          <InputContainer>
            <LabelContainer>
              <label htmlFor="name">Name:</label>
            </LabelContainer>
            <InputFieldContainer>
              <Input
                type="text"
                id="name"
                name="name"
                onChange={onChange}
                value={value}
              />
            </InputFieldContainer>
          </InputContainer>

          <InputContainer>
            <LabelContainer>
              <label htmlFor="password">Password:</label>
            </LabelContainer>
            <InputFieldContainer>
              <Input
                type="password"
                name="password"
                id="password"
                onChange={onChange}
                value={value}
              />
            </InputFieldContainer>
          </InputContainer>

          <InputContainer>
            <LabelContainer>
              <label htmlFor="confirmPassword">Retype Password:</label>
            </LabelContainer>
            <InputFieldContainer>
              <Input
                type="password"
                name="password"
                id="confirmPassword"
                onChange={onChange}
                value={value}
              />
            </InputFieldContainer>
          </InputContainer>

          <ButtonContainer>
            <SignupMessage>
              Already Have an Account? <Link to="/login">Login</Link>
            </SignupMessage>
            <Button>Sign Up</Button>
          </ButtonContainer>
        </Form>
      </FormContainer>
    </PageContainer>
  );
};

export default Login;
