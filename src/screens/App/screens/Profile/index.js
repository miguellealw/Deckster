import React from "react";
import MediaQuery from "react-responsive";

import SideNavigation from "shared/components/SideNavigation";
import Navigation from "shared/components/Navigation";
import CardSlider from "shared/components/CardSlider";
import {
  ProfileContainer,
  ContentContainer,
  UserInfo,
  DeckInfo,
  Name,
  Email,
  ImageContainer
} from "./components";

const Profile = () => {
  return (
    <ProfileContainer>
      <MediaQuery minWidth={500}>
        {matches => (matches ? <SideNavigation /> : <Navigation />)}
      </MediaQuery>

      <ContentContainer>
        <UserInfo>
          <ImageContainer>
            <img src="https://source.unsplash.com/JBfdCFeRDeQ/200x100" alt="" />
          </ImageContainer>
          <Name>John Doe</Name>
          <Email>johndoe@gmail.com</Email>
        </UserInfo>

        <DeckInfo>
          {/* Deckinfo.. */}
          <CardSlider />
          {/* Slider Component with Cards */}
        </DeckInfo>
      </ContentContainer>
    </ProfileContainer>
  );
};

export default Profile;
