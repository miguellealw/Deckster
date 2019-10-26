import React from 'react'

// RTL
import { render, cleanup, within } from 'utils/test-utils'
import LoginForm from '../Login/LoginForm'
import { fireEvent } from '@testing-library/dom'

afterEach(cleanup)

const setup = () => {
  const utils = render(<LoginForm />)
  const form = utils.getByTestId('login-form')
  return {
    form,
    ...utils,
  }
}

xtest('Renders all fields with respective labels', () => {})

test('Error validation messages appear when invalid data is entered in email field', async () => {
  const { getByLabelText, findByText } = setup()
  const emailInputNode = getByLabelText('email-input')

  // Focus and blur with no input data
  fireEvent.focus(emailInputNode, { target: { value: '' } })
  fireEvent.blur(emailInputNode)
  let formErrorMessageNode = await findByText(/Email is required/i)
  expect(formErrorMessageNode).toBeInTheDocument()
  expect(formErrorMessageNode).toHaveTextContent('Email is Required')

  // Type invalid email
  fireEvent.change(emailInputNode, { target: { value: 'invalidEmail' } })
  formErrorMessageNode = await findByText(/email must be valid/i)
  expect(formErrorMessageNode).toBeInTheDocument()
  expect(formErrorMessageNode).toHaveTextContent('Email Must be Valid')
})
