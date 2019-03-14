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
        <Title>Login</Title>

        <Form>
          <InputContainer>
            <LabelContainer>
              <label htmlFor="email">Email:</label>
            </LabelContainer>
            <InputFieldContainer>
              <Input
                type="email"
                id="email"
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
                id="password"
                onChange={onChange}
                value={value}
              />
            </InputFieldContainer>
          </InputContainer>

          <ButtonContainer>
            <SignupMessage>
              Don't Have an Account? <Link to="/signup">Sign Up</Link>
            </SignupMessage>
            <Button>Login</Button>
          </ButtonContainer>
        </Form>
      </FormContainer>
    </PageContainer>
  );
};

export default Login;
