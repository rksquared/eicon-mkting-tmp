import React from 'react'
import { Layout } from 'antd'

import '../fonts/din-pro/font.css'
import 'typeface-lato';

import Header from './header'
import { BrandSplashContainer, brandDarkBlue } from '../assets/brandAssets'
const { Footer } = Layout;

export default ({ children, location, splash, mobile }: any) => {

  console.log({ splash });

  return (
    <main style={{  background: brandDarkBlue }} id="">
      <Header location={location} />
      <BrandSplashContainer content={splash.content} bg={splash.background}/>
      <Layout style={{
        top: 'calc(100vh + 64px)',
        width: '100vw',
        backgroundColor: brandDarkBlue,
      }}>
        {children}
      </Layout>
      <Footer
        style={{
          top: mobile ? '600vh' : undefined,
          position: mobile ? 'absolute' : undefined,
          height: '62px',
          backgroundColor: 'rgb(0, 21, 40)',
          color: 'white',
          textAlign: 'center',
          width: '100%'
        }}
      >
        &copy; EICON 2018
      </Footer>
    </main>)
}
