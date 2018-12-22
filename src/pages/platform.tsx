// import { Layout, Row } from 'antd'
import React from 'react'
// import { PositionProperty, TextTransformProperty, VisibilityProperty } from '../../node_modules/csstype';
// import { Link } from 'gatsby'

// import * as Logo from '../assets/eicon_atom.svg'
// import * as BG from '../assets/bg3.jpg'
import LayoutTmplt from "../components/genericLayout"
// import { brandBrightBlueAccent, BrandDoubleArrow } from '../assets/brandAssets'
// import { SpinnerLogo } from '../assets/spinnerLogo';
import '../assets/assets.css'

export default ({location, children}: any) => {

  return (
    <LayoutTmplt location={location} >
      {children}
      test
    </LayoutTmplt>
  );
}