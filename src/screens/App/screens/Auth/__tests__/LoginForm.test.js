import React from 'react'

// RTL
import {
  render,
  cleanup,
  fireEvent,
  waitForElement,
  waitForElementToBeRemoved,
} from 'utils/test-utils'
import LoginForm from '../Login/LoginForm'

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

describe('Form: Email field error messages', () => {
  test('Error message appears when field is left empty', async () => {
    const { getByLabelText, findByText, debug } = setup()
    const emailInputNode = getByLabelText('email-input')
    let formErrorMessageNode

    emailInputNode.focus()
    fireEvent.blur(emailInputNode)

    formErrorMessageNode = await findByText(/Email is required/i)
    expect(formErrorMessageNode).toBeInTheDocument()
    expect(formErrorMessageNode).toHaveTextContent('Email is Required')
  })

  test('Error message appears when user inputs invalid email', async () => {
    const { getByLabelText, findByText, debug } = setup()
    const emailInputNode = getByLabelText('email-input')
    let formErrorMessageNode

    emailInputNode.focus()
    fireEvent.blur(emailInputNode)

    // Type invalid email
    fireEvent.change(emailInputNode, { target: { value: 'invalidEmail' } })
    formErrorMessageNode = await findByText(/email must be valid/i)
    expect(formErrorMessageNode).toBeInTheDocument()
    expect(formErrorMessageNode).toHaveTextContent('Email Must be Valid')
  })

  test('Error message disappears when user inputs valid email', async () => {
    const { getByLabelText, queryByText, debug } = setup()
    const emailInputNode = getByLabelText('email-input')
    let formErrorMessageNode

    emailInputNode.focus()
    fireEvent.blur(emailInputNode)

    // Type valid email
    fireEvent.change(emailInputNode, { target: { value: 'test@gmail.com' } })
    formErrorMessageNode = queryByText(/email must be valid/i)
    expect(formErrorMessageNode).not.toBeInTheDocument()
  })
})
