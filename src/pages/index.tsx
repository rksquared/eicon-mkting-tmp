import React from 'react'
import { Row, Button, Col, Icon, Input } from 'antd'
import Media from 'react-media'
import * as BG from '../assets/bg3.jpg'
import SplashTemplate from '../components/indexLayout'
import MobileLayout from '../components/mobile/mobileIndex'
import BizLeaders from '../assets/splash-content/biz-leaders'
import Clinicians from '../assets/splash-content/clinicians'
import Ops from '../assets/splash-content/ops'
import { brandBrightBlueAccent, brandButtonStyle, BrandDoubleArrow, BrandInvDoubleArrow } from '../assets/brandAssets'
import ImagingStack from '../components/imagingStack'
import Solutions from './analytics'
import '../assets/assets.css'
import './index.css'

if (typeof window !== `undefined`) {
  const module = require("intersection-observer")
}

const splashContent = (
  <div
    className="splash-grid-container"
  >
    <div className="splash-grid-i1" style={{ color: 'white' }}>
      <h1 className="splash-h1">
        Introducing the
        <br />
        <span style={{ color: brandBrightBlueAccent, textTransform: 'uppercase', fontWeight: 500 }}>Clinical Imaging Cloud</span>
      </h1>
      <h3 className="splash-h3">
        <a className="splash-subtitle-link">Real-time Decision Support.</a> <a className="splash-subtitle-link">Clinical Insights.</a> <a className="splash-subtitle-link">Operational Excellence.</a> <br />Put your data to work.
      </h3>
    </div>
    <div className="splash-grid-i2">

      <div className="splash-opt-container" id="ops">
        <Button type="primary" shape="circle" ghost={true} size="large" className="splash-options">
          <Icon component={({ height }) => <Ops height={height} />} />
        </Button>
        <div className="splash-opt-text">
          Data Operations<br />+ Management
        </div>
      </div>
      <div className="splash-opt-container" id="sci">
        <Button type="primary" shape="circle" ghost={true} size="large" className="splash-options">
          <Icon component={({ height }) => <Clinicians height={height} />} />
        </Button>
        <div className="splash-opt-text">
          Clinicians<br />+ Scientists
        </div>
      </div>
      <div className="splash-opt-container" id="biz">
        <Button className="splash-options" type="primary" shape="circle" ghost={true} size="large" >
          <Icon component={({ height, width }) => <BizLeaders height={height} width={width} />} />
        </Button>
        <div className="splash-opt-text">
          Business <br />Leadership
        </div>
      </div>
    </div>

    <div className="splash-grid-i4">
      <div className="splash-cta-container">
        <Input size="large" className="splash-cta-item" id="email" placeholder="name@company.com" />
      </div>
      <div className="splash-cta-container">
        <Button className="splash-cta-item" id="submit" type="primary" ghost={true} size="large" href="/demo/">
          <BrandDoubleArrow color="#F8E71C" /><span style={{ paddingRight: '8px', paddingLeft: '8px' }}>Request Demo</span><BrandInvDoubleArrow color="#F8E71C" />
        </Button>
      </div>
    </div>
  </div>
)

const landingSplash = {
  content: splashContent,
  background: `url(${BG})`
}

export default class Main extends React.Component <any, any> {

  constructor(props: any) {
    super(props)
    this.state = {
      viewMode: 'desktop'
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize.bind(this))
    this.onResize()
  }

  onResize = () => {
    if (window.innerWidth <= 576 && this.state.viewMode !== 'mobile') {
      this.setState({viewMode: 'mobile'})
    } else if (window.innerWidth > 576 && this.state.viewMode !== 'desktop') {
      this.setState({viewMode: 'desktop'})
    }
  }

  render() {

    const { location } = this.props;


    return this.state.viewMode === 'mobile' ? 
            <MobileLayout loc={location} /> :(
            <SplashTemplate location={location} splash={landingSplash} mobile={false}>
              <Row>
                <Solutions location={location} id="solutions" />
              </Row>
              <Row style={{
                height: '68px',
                color: 'white',
                textAlign: 'center',
                fontFamily: 'DINPro-Regular',
                // paddingLeft: '6vw'
              }}>
                <Button type="primary" size="large" href="/demo/" style={brandButtonStyle}>
                  <BrandDoubleArrow color="#F8E71C" /> Request Demo <BrandInvDoubleArrow color="#F8E71C" />
                </Button>

              </Row>
              <ImagingStack />
            </SplashTemplate>)
  }
}