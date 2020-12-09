import React from 'react'
import 'styled-components/macro'
import { Link } from '@reach/router'
import { Formik, Form, Field as FormikField } from 'formik'

import Button from 'shared/components/Button'

import ButtonContainer from '../ButtonContainer'

import Field from 'shared/components/FormFields/Field'
import InputLabel from 'shared/components/FormFields/InputLabel'
import TextField from 'shared/components/FormFields/TextField'
import AuthFormErrorMessage from '../AuthFormErrorMessage'

import { validLoginUserSchema } from 'shared/yup-schemas/user-auth'

function LoginForm() {
  // const [value, setValue] = useState({})

  // const onChange = e =>
  //   setValue({
  //     ...value,
  //     [e.target.name]: e.target.value,
  //   })

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validLoginUserSchema}
      onSubmit={() => {}}
    >
      {({ errors, touched }) => (
        <Form
          css={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 auto',
          }}
          data-testid="login-form"
        >
          <FormikField
            type="email"
            name="email"
            placeholder="jondoe@gmail.com"
            component={EmailField}
          />
          {errors.email && touched.email ? (
            <AuthFormErrorMessage
              css={{ marginTop: '-1em', marginBottom: '1em' }}
            >
              {errors.email}
            </AuthFormErrorMessage>
          ) : null}

          <FormikField
            type="password"
            name="password"
            placeholder="Your Password Here"
            component={PasswordField}
          />
          {errors.password && touched.password ? (
            <AuthFormErrorMessage
              css={{ marginTop: '-1em', marginBottom: '1em' }}
            >
              {errors.password}
            </AuthFormErrorMessage>
          ) : null}

          <ButtonContainer>
            <span
              css={{
                fontSize: '0.8em',
              }}
            >
              Don't Have an Account? <Link to="/signup">Sign Up</Link>
            </span>
            <Button css={{ marginTop: 0 }}>Login</Button>
          </ButtonContainer>
        </Form>
      )}
    </Formik>
  )
}

function PasswordField({ form, field, ...props }) {
  return (
    <Field>
      <InputLabel htmlFor="password">Password:</InputLabel>
      <TextField
        id="password"
        {...field}
        {...props}
        aria-label="password-input"
      />
    </Field>
  )
}

function EmailField({ field, form, ...props }) {
  return (
    <Field>
      <InputLabel htmlFor="email">Email:</InputLabel>
      <TextField id="email" {...field} {...props} aria-label="email-input" />
    </Field>
  )
}

export default LoginForm
