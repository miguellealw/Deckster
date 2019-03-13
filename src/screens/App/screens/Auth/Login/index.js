import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

import Input from "shared/components/Input";
import Navigation from "shared/components/Navigation";
import Button from "shared/components/Button";

const PageContainer = styled.div`
  width: 100vw;
`;

const FormContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  margin-top: -3.5rem;

  /* position: absolute;
  top: 0; */
`;

const Title = styled.h2`
  font-family: "Nunito";
  font-weight: bold;
  font-size: 2.3em;
  text-align: center;
  margin-bottom: 3rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* min-width: 40rem; */
  margin: 0 auto;

  /* background: pink; */
`;

const LabelContainer = styled.div`
  font-size: 0.8em;
  flex: 1;
  /* background: tomato; */

  display: flex;
  justify-content: flex-end;

  label {
    font-weight: bold;
    align-self: flex-start;
    margin-right: 1rem;
  }

  ${({ theme }) => theme.media.phoneOnly`width: 100%;`}
`;

const InputContainer = styled.div`
  width: 100%;
  /* background: cyan; */
  margin-bottom: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.media.phoneOnly`
    flex-direction: column;

    label {
      width: 100%;
      margin-right: auto;
      margin-bottom: 0.8rem;
    }
  `}
  
`;

const InputFieldContainer = styled.div`
  flex: 4;
  /* background: purple; */

  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignupMessage = styled.span`
  /* background: red; */
  font-size: 0.8em;
  margin-top: -1rem;
  align-self: flex-end;
`;

const ButtonContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

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
