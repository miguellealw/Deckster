import React, { Component, Suspense } from "react";
import { createGlobalStyle } from "styled-components";
import { Router } from "@reach/router";
import Loader from "react-loader-spinner";
import styled, { ThemeProvider } from "styled-components";

import theme from "shared/theme";
import Home from "./screens/Home";
import Layout from "shared/components/Layout";
const Profile = React.lazy(() => import("./screens/Profile"));
const Decks = React.lazy(() => import("./screens/Decks"));
const Explore = React.lazy(() => import("./screens/Explore"));
const Login = React.lazy(() => import("./screens/Auth/Login"));
const Signup = React.lazy(() => import("./screens/Auth/Signup"));

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
`;

const LoaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  /* background: pink; */

  display: flex;
  justify-content: center;
  align-items: center;
`;

class App extends Component {
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
                <Login path="login" />
                <Signup path="signup" />
                <Profile path="profile/*" />
                <Decks path="decks" />
                <Explore path="explore" />
              </Router>
            </Layout>
          </ThemeProvider>
        </Suspense>
      </>
    );
  }
}

export default App;
