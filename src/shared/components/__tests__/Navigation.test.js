import React from 'react'

import { cleanup, renderWithRouter } from 'utils/test-utils'
import { Context as ResponsiveContext } from 'react-responsive'

import App from 'screens/App'
import { fireEvent, within } from '@testing-library/dom'

afterEach(cleanup)

describe('Reach Router is Working', () => {
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

  test('clicking on nav links navigates to respective page', async () => {
    const { getByTestId, findByTestId } = renderWithRouter(
      <ResponsiveContext.Provider value={{ width: 1000 }}>
        <App />
      </ResponsiveContext.Provider>,
    )

    const { getByText } = within(getByTestId('navigation'))

    // Click on Sign Up Nav Link
    fireEvent.click(getByText(/sign up/i))
    const signupPageTitle = await findByTestId('signup-page-title')
    expect(signupPageTitle).toHaveTextContent('Sign Up')

    // Click on Profile Nav Link
    fireEvent.click(getByText(/profile/i))
    const profilePageTitle = await findByTestId('profile-page-title')
    expect(profilePageTitle).toHaveTextContent('Your Decks')
  })
})

describe('Navigation is Responsive', () => {
  test('menu icon appears when navigation is under 599px', () => {
    const { getByLabelText } = renderWithRouter(
      <ResponsiveContext.Provider value={{ width: 400 }}>
        <App />
      </ResponsiveContext.Provider>,
    )

    const menuIcon = getByLabelText('menu')
    expect(menuIcon).toBeInTheDocument()
  })

  test('nav dropdown toggles when you click menu icon', () => {
    const { getByLabelText, getByTestId } = renderWithRouter(
      <ResponsiveContext.Provider value={{ width: 400 }}>
        <App />
      </ResponsiveContext.Provider>,
    )

    const menuIcon = getByLabelText('menu')

    // Check 'toggability'
    fireEvent.click(menuIcon)
    const menuDropdown = getByTestId('menu-dropdown')
    expect(menuDropdown).toBeInTheDocument()

    fireEvent.click(menuIcon)
    expect(menuDropdown).not.toBeInTheDocument()
  })
})
