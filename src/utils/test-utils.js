import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import {
  createHistory,
  createMemorySource,
  LocationProvider,
} from '@reach/router'

import theme from 'shared/theme'

const AllTheProviders = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

function renderWithRouter(
  ui,
  { route = '/', history = createHistory(createMemorySource(route)) } = {},
) {
  return {
    ...render(<LocationProvider history={history}>{ui}</LocationProvider>),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  }
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render, renderWithRouter }
