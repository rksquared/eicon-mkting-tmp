import React from 'react'

import LayoutTmplt from "../components/genericLayout"

export default ({ location }: any) => (
  <LayoutTmplt location={location} >
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </LayoutTmplt>
)