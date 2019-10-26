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

import { validSignupUserSchema } from 'shared/yup-schemas/user-auth'

function SignupForm() {
  // const [value, setValue] = useState({})
  // const onChange = e =>
  //   setValue({
  //     ...value,
  //     [e.target.name]: e.target.value,
  //   })

  return (
    <Formik
      initialValues={{
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={validSignupUserSchema}
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
        >
          <FormikField
            type="email"
            name="email"
            placeholder="jondoe@gmail.com"
            component={EmailField}
          />
          {errors.email && touched.email ? (
            <AuthFormErrorMessage>{errors.email}</AuthFormErrorMessage>
          ) : null}

          <FormikField
            type="text"
            name="firstName"
            placeholder="Jon"
            component={FirstNameField}
          />
          {errors.firstName && touched.firstName ? (
            <AuthFormErrorMessage>{errors.firstName}</AuthFormErrorMessage>
          ) : null}

          <FormikField
            type="text"
            name="lastName"
            placeholder="Doe"
            component={LastNameField}
          />
          {errors.lastName && touched.lastName ? (
            <AuthFormErrorMessage>{errors.lastName}</AuthFormErrorMessage>
          ) : null}

          <FormikField
            type="password"
            name="password"
            placeholder="Your Password"
            component={PasswordField}
          />
          {errors.password && touched.password ? (
            <AuthFormErrorMessage>{errors.password}</AuthFormErrorMessage>
          ) : null}

          <FormikField
            type="password"
            name="confirmPassword"
            placeholder="Retype Password"
            component={ConfirmPasswordField}
          />
          {errors.confirmPassword && touched.confirmPassword ? (
            <AuthFormErrorMessage>
              {errors.confirmPassword}
            </AuthFormErrorMessage>
          ) : null}
          {console.log(errors)}

          <ButtonContainer>
            <span
              css={{
                fontSize: '0.8em',
              }}
            >
              Already Have an Account? <Link to="/login">Login</Link>
            </span>
            <Button css={{ marginTop: 0 }}>Sign Up</Button>
          </ButtonContainer>
        </Form>
      )}
    </Formik>
  )
}

function EmailField({ form, field, ...props }) {
  return (
    <Field>
      <InputLabel htmlFor="email">Email:</InputLabel>
      <TextField type="email" id="email" {...field} {...props} />
    </Field>
  )
}

function FirstNameField({ form, field, ...props }) {
  return (
    <Field>
      <InputLabel htmlFor="firstName">First Name:</InputLabel>
      <TextField id="firstName" {...field} {...props} />
    </Field>
  )
}

function LastNameField({ form, field, ...props }) {
  return (
    <Field>
      <InputLabel htmlFor="lastName">Last Name:</InputLabel>
      <TextField id="lastName" {...field} {...props} />
    </Field>
  )
}

function PasswordField({ form, field, ...props }) {
  return (
    <Field>
      <InputLabel htmlFor="password">Password:</InputLabel>
      <TextField id="password" {...field} {...props} />
    </Field>
  )
}

function ConfirmPasswordField({ form, field, ...props }) {
  return (
    <Field
      css={{
        textAlign: 'right',
      }}
    >
      <InputLabel
        htmlFor="confirmPassword"
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
      <TextField id="confirmPassword" {...field} {...props} />
    </Field>
  )
}

export default SignupForm
