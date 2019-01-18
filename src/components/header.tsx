import { Button, Col, Layout, Modal, Menu, Row, Icon } from 'antd'
import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql, StaticQuery } from 'gatsby'
import Scrollchor from 'react-scrollchor'
import Media from 'react-media'

import * as Logo from '../assets/eicon_atom.svg'
import { BrandDoubleArrow, BrandInvDoubleArrow, brandButtonStyle, brandDarkBlue } from '../assets/brandAssets'
import { PositionProperty } from 'csstype'

const { Header } = Layout
const { SubMenu, ItemGroup, Item } = Menu

const HeaderMenu = ({location, mode}: any) => (
  <Menu
  theme="dark"
  mode={mode ? "inline" : "horizontal"}
  style={{ fontFamily: 'DINPro-Regular', lineHeight: '62px', fontSize: mode ? '18px' : '24px', fontWeight: mode ? 100 : 300, letterSpacing: '.6px', height: '62px', borderBottom: '0px solid white' }}
  selectedKeys={[location ? location.hash : '']}
>
    <Item key="#insights">
      {/* <Link to="#insights" style={{color: 'inherit'}} onClick={(e) => console.log('e is: ', e)}> */}
        <Scrollchor to="#insights" animate={{ offset: -90, duration: 400 }} style={{ textDecoration: 'none', color: 'inherit' }}>
          Insights
        </Scrollchor>
      {/* </Link> */}
    </Item>
    <Item key="#platform" >
      {/* <Link to="#platform" style={{color: 'inherit'}}> */}
        <Scrollchor to="#platform" animate={{ offset: -64, duration: 400 }} style={{ textDecoration: 'none', color: 'inherit' }}>
          Platform
        </Scrollchor>
      {/* </Link> */}
    </Item>
  <Item style={{ height: mode ? '64px' : undefined, top: mode ? undefined : '-10px', }}>
    <Button className="btn-tst" type="primary" ghost={true} size="large" href="/demo/" style={brandButtonStyle}>
      <BrandDoubleArrow color="#F8E71C" /> Request Demo <BrandInvDoubleArrow color="#F8E71C" />
    </Button>
  </Item>
</Menu>
)

export default class MainHeader extends React.Component<{ location: any }> {
  
  state = {
    modal: false
  }

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    })
  }
  
  render() {
    const { location } = this.props

    return (
      <StaticQuery
        query={graphql`
          query HeaderTitleQuery {
            site {  
              siteMetadata {
                title
              }
            }
          }`
        }
          render={data => (
            <section>
              <Helmet
                title={data.site.siteMetadata.title}
                meta={[
                  { name: 'description', content: 'Sample' },
                  { name: 'keywords', content: 'sample, something' },
                ]}
              />
              <Header style={{position: 'fixed', zIndex: 100000, width: '100%'}}>
                <Row>
                  <Col
                    sm={{
                      offset: 0,
                    }}
                    md={{
                      offset: 0,
                    }}
                    lg={{
                      offset: 1,
                    }}
                    xl={{
                      offset: 1,
                    }}
                    xxl={{
                      offset: 1
                    }}
                  >
                    <Media
                      query="(max-width: 576px)"
                    >
                      {(matches: any) => 
                      <Scrollchor to="" style={{textDecoration: 'none'}}>
                        <Link
                          to="/"
                          style={{
                            color: 'white',
                            fontWeight: 400,
                            fontFamily: 'Gill Sans, Lato',
                            letterSpacing: matches ? '1.2px' : '2px',
                            fontSize: matches ? 28 : 44,
                            lineHeight: '62px',
                            textDecoration: 'none',
                            width: matches ? 160 : 260,
                            float: 'left',
                          }}
                        >
                          <img src={Logo as unknown as string} style={{ height: matches ? '32px' : '48px', paddingRight: matches ? '8px' : '16px', marginBottom: '12px' }} />
                          <span style={{ color: '#06A9F4' }}>{data.site.siteMetadata.title[0]}</span>{data.site.siteMetadata.title.slice(1)}
                        </Link>
                      </Scrollchor>
                      }
                    </Media>
                  </Col>
                  <Col
                    xs={{
                      offset: 18
                    }}
                    sm={{
                      offset: 20,
                    }}
                    md={{
                      offset: 20,
                    }}
                    lg={{
                      offset: 22,
                    }}
                    xl={{
                      offset: 12,
                    }}
                    xxl={{
                      offset: 15,
                    }}
                  >
                    <Media
                      query="(max-width: 1223px)"
                    >
                    {(matches: any) => 
                      matches ?
                        <Button type="primary" ghost={true} icon={this.state.modal ? 'close' : 'menu'} style={brandButtonStyle} onClick={() => this.toggleModal()}>{this.state.modal ? 'Close' : 'Menu'}</Button> :
                        <HeaderMenu location={location} mode={matches}/>
                    }
                    </Media>
                  </Col>
                </Row>
              </Header>
              <Modal
                closable={false}
                visible={this.state.modal}
                style={{
                  left: 0,
                  top: 64,
                  minHeight: '100vh',
                  minWidth: '100vw',
                  margin: 0,
                }}
                bodyStyle={{
                  padding: 0,
                  width: '100vw',
                  height: '100vh',
                  background: brandDarkBlue,
                  position: 'absolute' as PositionProperty,
                  display: 'flex',
                  justifyContent: 'center',
                  // alignItems: 'center',
                  margin: 0,
                  top: 0,
                }}
                footer={null}
                keyboard={true}
              >
                <div
                  style={{
                    position: 'absolute' as PositionProperty, 
                    color: 'white', 
                    alignSelf: 'center', 
                    display: 'block', 
                    width: '90%', 
                    marginLeft: 'auto', 
                    marginRight: 'auto', 
                    paddingLeft: '2%', 
                    paddingRight: '2%',
                    top: 40, 
                    height: '100%'
                  }}
                >
                  <Col
                    xs={{ span: 24 }}
                    sm={{ span: 20 }}
                    md={{ span: 16 }}
                    lg={{ span: 10 }}
                  >
                    <Row>
                      <HeaderMenu location={location} mode={true}/>
                    </Row>
                  </Col>
                </div>
              </Modal>
          </section>)
        } />
      )
    }
  }
