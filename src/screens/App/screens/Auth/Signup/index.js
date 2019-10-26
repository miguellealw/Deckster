import React from 'react'
import 'styled-components/macro'

import FormContainer from '../FormContainer'
import SignupForm from './SignupForm'

const Signup = () => {
  return (
    <div css={{ width: '100%' }}>
      <FormContainer>
        <h2
          data-testid="signup-page-title"
          css={{
            fontFamily: 'Nunito',
            fontWeight: 'bold',
            fontSize: '2.3em',
            textAlign: 'center',
            marginBottom: '3rem',
          }}
        >
          Sign Up
        </h2>
        <SignupForm />
      </FormContainer>
    </div>
  )
}

export default Signup
