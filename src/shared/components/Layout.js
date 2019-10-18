import React from 'react'

import Navigation from 'shared/components/Navigation'
import Footer from 'shared/components/Footer'

const Layout = props => (
  <div>
    <Navigation />
    {props.children}
    <Footer />
  </div>
)

export default Layout
