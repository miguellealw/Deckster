import React from 'react'

import Navigation from 'shared/components/Navigation'
import Footer from 'shared/components/Footer'

// TODO: if authed make backround gray otherwise white
const Layout = props => (
  <div>
    <Navigation />
    {props.children}
    <Footer />
  </div>
)

export default Layout
