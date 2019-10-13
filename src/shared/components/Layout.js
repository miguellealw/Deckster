import React from "react";

import Navigation from "shared/components/Navigation";

const Layout = props => (
  <div>
    <Navigation />
    {props.children}
  </div>
);

export default Layout;
