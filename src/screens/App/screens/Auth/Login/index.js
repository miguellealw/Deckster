import React from 'react'
import 'styled-components/macro'

import FormContainer from '../FormContainer'
import LoginForm from './LoginForm'

const Login = () => {
  return (
    // TODO: Extract PageContainer to Page component and put it in Layout comp (change color depending on auth status)
    <div css={{ width: '100%' }}>
      <FormContainer>
        <h2
          data-testid="login-page-title"
          css={{
            fontFamily: 'Nunito',
            fontWeight: 'bold',
            fontSize: '2.3em',
            textAlign: 'center',
            marginBottom: '3rem',
          }}
        >
          Login
        </h2>
        <LoginForm />
      </FormContainer>
    </div>
  )
}

export default Login
