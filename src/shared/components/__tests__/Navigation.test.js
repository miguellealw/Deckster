import React from 'react'

import { cleanup, renderWithRouter, waitForElement } from 'utils/test-utils'

import App from '../../../screens/App'

afterEach(cleanup)

test('full app rendering/navigating', async () => {
  const {
    history: { navigate },
    getByTestId,
    findByTestId,
  } = renderWithRouter(<App />)

  const homePageTitle = getByTestId('home-page-title')
  expect(homePageTitle).toHaveTextContent('Deckster')

  // Goes to Login Page
  await navigate('/login')
  const loginPageTitle = await findByTestId('login-page-title')
  expect(loginPageTitle).toHaveTextContent('Login')

  // Goes to Sign Up Page
  await navigate('/signup')
  const signupPageTitle = await findByTestId('signup-page-title')
  expect(signupPageTitle).toHaveTextContent('Sign Up')
})
