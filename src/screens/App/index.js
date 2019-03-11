import React, { Component, Suspense } from "react";
import { createGlobalStyle } from "styled-components";
import { Router } from "@reach/router";
import Loader from "react-loader-spinner";

import Home from "./screens/Home";
const Profile = React.lazy(() => import("./screens/Profile"));
const Decks = React.lazy(() => import("./screens/Decks"));
const Explore = React.lazy(() => import("./screens/Explore"));

const Login = React.lazy(() => import("./screens/Auth/Login"));
const Signup = React.lazy(() => import("./screens/Auth/Signup"));

const GlobalStyle = createGlobalStyle`
  html {
    min-width: 100%;
    min-height: 100vh;
  }

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
    @media (min-width: 500px) {
      font-size: 1.4em;
    }
  }

  a { 
    text-decoration: none;
    color: #009dff;

    :hover { 
      text-decoration: underline;
    }
  }
`;

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Suspense
          fallback={
            <Loader type="Puff" color="#009dff" height="50" width="50" />
          }
        >
          <Router>
            <Home path="/" />
            <Login path="/login" />
            <Signup path="/signup" />
            <Profile path="/profile" />
            <Decks path="/decks" />
            <Explore path="/explore" />
          </Router>
        </Suspense>
      </>
    );
  }
}

export default App;
