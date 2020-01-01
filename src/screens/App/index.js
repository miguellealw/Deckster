import React, { Component, Suspense } from 'react'
import { Router } from '@reach/router'
import Loader from 'react-loader-spinner'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { getDecks } from 'services/deck-service'

import theme from 'shared/theme'
import Home from './screens/Home'
import Layout from 'shared/components/Layout'
const Profile = React.lazy(() => import('./screens/Profile'))
const Decks = React.lazy(() => import('./screens/Decks'))
const Explore = React.lazy(() => import('./screens/Explore'))
const CurrentDeck = React.lazy(() => import('./screens/CurrentDeck'))
const Login = React.lazy(() => import('./screens/Auth/Login'))
const Signup = React.lazy(() => import('./screens/Auth/Signup'))

const GlobalStyle = createGlobalStyle`
  /* html {
    min-width: 100%;
    min-height: 100vh;
  } */

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
  }

 body {
    font-family: 'Nunito', sans-serif;
  }

  :root {
    font-size: 1rem;
    /* ${theme.media.phoneOnly`
      font-size: 1.2 rem;
    `} */
  }

  a {
    text-decoration: none;
    color: #009dff;

    :hover {
      text-decoration: underline;
    }
  }
`

const LoaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  /* background: pink; */

  display: flex;
  justify-content: center;
  align-items: center;
`

// const decksInfo = [
//   {
//     title: 'test title',
//     firstCardName: 'test first card',
//     tags: ['tag 1', 'tag 2', 'tag 3', 'tag 4', 'tag 5'],
//   },
//   {
//     title: 'test title',
//     firstCardName: 'test second card',
//     tags: ['tag 1', 'tag 2'],
//   },
//   {
//     title: 'test title',
//     firstCardName: 'test third card',
//     tags: ['tag 1', 'tag 2'],
//   },
//   {
//     title: 'test title',
//     firstCardName: 'test fourth card',
//     tags: ['tag 1', 'tag 2', 'tag 3'],
//   },
//   {
//     title: 'test title',
//     firstCardName: 'test fifth card',
//     tags: ['tag 1', 'tag 2', 'tag 3', 'tag 4'],
//   },
//   {
//     title: 'test title',
//     firstCardName: 'test sixth card',
//     tags: ['tag 1', 'tag 2', 'tag 3', 'tag 4', 'tag 5'],
//   },
// ]

class App extends Component {
  state = {
    decksInfo: [],
  }

  async componentDidMount() {
    const decksInfo = await getDecks()
    this.setState({ decksInfo })
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <Suspense
          fallback={
            // FIXME: fix loader
            <LoaderContainer>
              <Loader type="Puff" height="50" width="50" />
            </LoaderContainer>
          }
        >
          <ThemeProvider theme={theme}>
            <Layout>
              <Router>
                <Home path="/" />
                <Login path="/login" />
                <Signup path="/signup" />
                {/* <Profile path="/profile/*" /> */}
                <Profile path="/profile" decksInfo={this.state.decksInfo} />
                <Explore path="/explore" />
                <Decks path="/decks" />
                <CurrentDeck
                  path="/profile/my-decks/:deckId"
                  decksInfo={this.state.decksInfo}
                />
              </Router>
            </Layout>
          </ThemeProvider>
        </Suspense>
      </>
    )
  }
}

export default App
