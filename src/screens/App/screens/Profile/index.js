import React from "react";
import MediaQuery from "react-responsive";
import { Router } from "@reach/router";
import { withTheme } from "styled-components";

import SideNavigation from "shared/components/SideNavigation";
import Navigation from "shared/components/Navigation";
import DeckSlider from "shared/components/DeckSlider";
import {
  ProfileContainer,
  ContentContainer,
  UserInfo,
  DeckInfo,
  Name,
  Email,
  ImageContainer,
  Tabs,
  NavLink,
  CreateDeckModal
} from "./components";

const Profile = ({ theme }) => {
  const [isOpen, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <ProfileContainer>
      <MediaQuery minWidth={theme.breakpoints.tabletLandscapeUp}>
        {matches => (matches ? <SideNavigation /> : <Navigation />)}
      </MediaQuery>
      {/* <MediaQuery minWidth={500}>
        {matches => (matches ? <SideNavigation /> : <Navigation />)}
      </MediaQuery> */}

      <ContentContainer>
        <UserInfo>
          <ImageContainer>
            <img src="https://source.unsplash.com/JBfdCFeRDeQ/200x100" alt="" />
          </ImageContainer>
          <Name>John Doe</Name>
          <Email>johndoe@gmail.com</Email>
        </UserInfo>

        <DeckInfo>
          <Tabs>
            <li>
              <NavLink to="my-decks">My Decks</NavLink>
            </li>
            <li>
              <NavLink to="favorited">Favorited</NavLink>
            </li>
            <li onClick={handleOpen}>
              <NavLink to="create-deck">Create Deck</NavLink>
            </li>
          </Tabs>

          <Router>
            <DeckSlider path="my-decks" />
            <DeckSlider path="favorited" />
            <CreateDeckModal
              path="create-deck"
              isOpen={isOpen}
              handleClose={handleClose}
            />
          </Router>
        </DeckInfo>
      </ContentContainer>
    </ProfileContainer>
  );
};

export default withTheme(Profile);
