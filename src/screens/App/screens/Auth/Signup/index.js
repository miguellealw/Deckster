import React, { useState } from 'react'
import { Link } from '@reach/router'
import { withTheme } from 'styled-components/macro'

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

        <Form>
          {/* Email */}
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

          {/* Name */}
          <Field>
            <InputLabel htmlFor="name">Name:</InputLabel>
            <TextField
              type="text"
              id="name"
              name="name"
              placeholder="Jon Doe"
              onChange={onChange}
              value={value.name}
            ></TextField>
          </Field>

          {/* Passowrd */}
          <Field>
            <InputLabel htmlFor="password">Password:</InputLabel>
            <TextField
              type="password"
              name="password"
              id="password"
              onChange={onChange}
              value={value.password}
            ></TextField>
          </Field>

          {/* Confirm Password */}
          <Field
            css={{
              textAlign: 'right',
            }}
          >
            <InputLabel
              htmlFor="password"
              css={`
                ${({ theme }) => theme.media.phoneOnly`
                  text-align: left;
                  width: 100%;
                  margin-right: auto;
                  margin-bottom: 0.8rem;
                `};
              `}
            >
              Confirm Password:
            </InputLabel>
            <TextField
              type="password"
              name="confirmPassword"
              id="password"
              onChange={onChange}
              value={value.confirmPassword}
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
              Already Have an Account? <Link to="/login">Login</Link>
            </span>
            <Button>Sign Up</Button>
          </ButtonContainer>
        </Form>
      </FormContainer>
    </div>
  )
}

export default withTheme(Login)
