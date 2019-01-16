import React from 'react'
import { Layout } from 'antd'

import '../fonts/din-pro/font.css'
import 'typeface-lato';


import { brandDarkBlue } from '../assets/brandAssets'
import Header from './header'

const { Content } = Layout;

export default ({ id, children, location, customMenu, header, bgColor, siderMenu }: any) => (
  <section style={{ background: brandDarkBlue }} id={id}>
    {header && <Header location={location} />}
    {customMenu && customMenu(location)}
    <Layout
      style={{
        margin: '0 auto',
        padding: '8px 1.0875rem 1.45rem',
        minHeight: 'calc(100vh - 186px)',
        width: '100vw',
        paddingTop: 24,
        borderTop: '2px solid white',
        backgroundColor: bgColor,
      }}
      hasSider={!!siderMenu}
    >
      {siderMenu && 
        <Layout.Sider 
          theme="light" 
          style={{marginLeft: '-1.0875rem', marginBottom: '-1.45rem', marginTop: '-24px', backgroundColor: '#78D0F9'}}
          width="200"
        >
          {siderMenu}
        </Layout.Sider>
      }
      <Content>
        {children}
      </Content>
    </Layout>
    {/* <Footer
      style={{
        position: 'fixed',
        top: '100vh',
        height: '62px',
        backgroundColor: brandDarkBlue,
        color: 'white',
        textAlign: 'center',
        width: '100%'
      }}
    >
      &copy; EICON 2018
    </Footer> */}
  </section>)