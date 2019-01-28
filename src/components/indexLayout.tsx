import React from 'react'
import { Layout } from 'antd'
import ScrollPercentage from 'react-scroll-percentage'

import '../fonts/din-pro/font.css'
import 'typeface-lato';

import Header from './header'
import { BrandSplashContainer, brandDarkBlue } from '../assets/brandAssets'
const { Footer } = Layout;

export default class IndexLayout extends React.Component <any, any> {
  state = {
    percentage: 0
  }


  render() {
    const { children, location, splash, mobile } = this.props

    return (
      <ScrollPercentage
        onChange={(percentage: any, inView: any) => {
          this.setState({percentage: parseFloat(percentage.toFixed(2))})
        }}
      >
        <main style={{  background: brandDarkBlue }} id="">
          <Header location={location} renderCTA={this.state.percentage > .68} mobile={mobile}/>
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
        </main>
      </ScrollPercentage>)
  }
}
