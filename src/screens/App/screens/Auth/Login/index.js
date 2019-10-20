import React, { useState } from 'react'
import 'styled-components/macro'
import { Link } from '@reach/router'

import Button from 'shared/components/Button'

import ButtonContainer from '../ButtonContainer'
import Form from '../Form'
import FormContainer from '../FormContainer'

import Field from 'shared/components/FormFields/Field'
import InputLabel from 'shared/components/FormFields/InputLabel'
import TextField from 'shared/components/FormFields/TextField'

const Login = () => {
  const [value, setValue] = useState({})

  const onChange = e =>
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    })

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

        <Form>
          <Field>
            <InputLabel htmlFor="email">Email:</InputLabel>
            <TextField
              type="email"
              id="email"
              name="email"
              placeholder="jondoe@gmail.com"
              onChange={onChange}
              value={value.email}
            ></TextField>
          </Field>

          <Field>
            <InputLabel htmlFor="password">Password:</InputLabel>
            <TextField
              type="password"
              id="password"
              name="password"
              onChange={onChange}
              value={value.password}
            ></TextField>
          </Field>

          <ButtonContainer>
            <span
              css={{
                fontSize: '0.8em',
                marginTop: '-1rem',
                alignSelf: 'flex-end',
              }}
            >
              Don't Have an Account? <Link to="/signup">Sign Up</Link>
            </span>
            <Button>Login</Button>
          </ButtonContainer>
        </Form>
      </FormContainer>
    </div>
  )
}

export default Login
