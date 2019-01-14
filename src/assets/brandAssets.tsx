import * as React from 'react'
import { Layout } from 'antd'
import { VisibilityProperty, PositionProperty, TextTransformProperty } from '../../node_modules/csstype';

import '../fonts/fira-code/font.css'
import '../components/header.css'
// import 'typeface-lato';

export const brandDarkBlue = 'rgb(0, 21, 40)'

export const brandBrightBlueAccent = '#06A9F4'

export const ligatureStyle = {
  fontFamily: 'FiraCode-Retina',
  fontWeight: 300
};

export const brandSplashStyle = {
  width: '100vw',
  height: '100vh',
  position: 'relative' as PositionProperty,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '64px',
  margin: '0 auto',
  minHeight: '300px',
}

export const brandButtonStyle = {
  marginTop: '12px',
  color: 'white',
  textTransform: 'uppercase' as TextTransformProperty,
  fontFamily: 'DINPro-Regular',
  letterSpacing: '.8px',
}


export const BrandDoubleArrow = ({color}: any) => <span style={{...ligatureStyle, color: color ? color : brandDarkBlue, paddingRight: '2px' }}>==></span>
export const BrandInvDoubleArrow = ({color}: any) => <span style={{...ligatureStyle, color: color ? color : brandDarkBlue }}>{`<==`}</span>

export const BrandSingleArrow = ({color, paddingLeft}: any) => <span style={{...ligatureStyle, color: color ? color : brandDarkBlue, paddingRight: '2px', paddingLeft: paddingLeft }}>--></span>
export const BrandInvSingleArrow = ({color}: any) => <span style={{...ligatureStyle, color: color ? color : brandDarkBlue }}>{`<--`}</span>

export const BrandSplashContainer = ({ content, bg }: any) => {
  
  const figStyle = {
    height: 'calc(100% - 64px)',
    width: '100%',
    backgroundImage: bg, 
    backgroundColor: brandDarkBlue,
    zIndex: 1,
    willChange: 'opacity',
    visibility: 'visible' as VisibilityProperty,
    animation: 'fade-in 4s ease both',
    position: 'absolute' as PositionProperty,
    overflow: 'hidden',
    backgroundPosition: '50%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    margin: 0,
    display: 'block'
  }
  
  return (
    <Layout style={brandSplashStyle}>
      <figure style={figStyle}/>
      {content}
    </Layout>
  )
}