import React from "react";
import MediaQuery from "react-responsive";

import SideNavigation from "shared/components/SideNavigation";
import Navigation from "shared/components/Navigation";

const Decks = () => {
  return (
    <MediaQuery query={"(min-width: 500px)"}>
      {matches => (matches ? <SideNavigation /> : <Navigation />)}
    </MediaQuery>
  );
};

export default Decks;
