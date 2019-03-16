import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
`;

export const FormContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  margin-top: -1rem;

  ${({ theme }) => theme.media.phoneOnly`font-size: .8em;`}
`;

export const Title = styled.h2`
  font-family: "Nunito";
  font-weight: bold;
  font-size: 2.3em;
  text-align: center;
  margin-bottom: 3rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* min-width: 40rem; */
  margin: 0 auto;

  /* background: pink; */
`;

export const LabelContainer = styled.div`
  font-size: 0.8em;
  flex: 1;
  /* background: tomato; */

  display: flex;
  justify-content: flex-end;

  label {
    font-weight: bold;
    /* align-self: flex-start; */
    margin-right: 1rem;
    text-align: right;
  }

  ${({ theme }) => theme.media.phoneOnly`
    width: 100%;
    
    label {
      text-align: left;
      width: 100%;
      margin-right: auto;
      margin-bottom: 0.8rem;
    }
  `}
`;

export const InputContainer = styled.div`
  width: 100%;
  /* background: cyan; */
  margin-bottom: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.media.phoneOnly`
    flex-direction: column;
  `}
`;

export const InputFieldContainer = styled.div`
  flex: 4;
  /* background: purple; */

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignupMessage = styled.span`
  /* background: red; */
  font-size: 0.8em;
  margin-top: -1rem;
  align-self: flex-end;
`;

export const ButtonContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;