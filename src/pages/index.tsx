import React from 'react'
import { Row, Button, Col, Icon, Input, Form, message } from 'antd'
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

function encode(data: Object) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(typeof data[key] === 'boolean' ? '' + data[key] : data[key]))
    .join("&");
}

class CTAform extends React.Component<any, any> {
  state = {
    opsbtn: false,
    scibtn: false,
    bizbtn: false
  }

  handleSubmit = (e: any) => {
    e.preventDefault()
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        const form = e.target;
        console.log('Received values of form: ', encode({
          "form-name": form.getAttribute("name"),
          ...this.state,
          ...values
        }))
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({
            "form-name": form.getAttribute("name"),
            ...this.state,
            ...values
          })
        })
          .then(() => {
            // navigateTo(form.getAttribute("action"))
            message.success(`Thanks for the information. We'll be in touch.`);
          })
          .catch(error => {
            alert(error)
            message.error('Please try again with a valid email address. Thanks!')
          });
      }
    });
  }

  handleCTAOption = (e: any) => {
    const shallowState = {...this.state}
    shallowState[e.target.id] = !shallowState[e.target.id] 
    this.setState(shallowState)
  }

  render() {

    const { getFieldDecorator } = this.props.form

    return (
      <Form className="splash-grid-container splash-grid-form" onSubmit={(e: any) => this.handleSubmit(e)} name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <div className="splash-grid-i2">
          <div className="splash-opt-container" id="ops">
            <Button type="primary" value={''+this.state.opsbtn} shape="circle" id="opsbtn" name="opsbtn" ghost={!this.state.opsbtn} size="large" className="splash-options" onClick={this.handleCTAOption}>
              <Icon component={({ height }) => <Ops height={height} />} />
            </Button>
            <div className="splash-opt-text">
              Data Operations<br />+ Management
            </div>
          </div>
          <div className="splash-opt-container" id="sci">
            <Button type="primary" value={''+this.state.scibtn} shape="circle" id="scibtn" name="scibtn" ghost={!this.state.scibtn} size="large" className="splash-options" onClick={this.handleCTAOption}>
              <Icon component={({ height }) => <Clinicians height={height} />} />
            </Button>
            <div className="splash-opt-text">
              Clinicians<br />+ Scientists
            </div>
          </div>
          <div className="splash-opt-container" id="biz">
            <Button value={''+this.state.bizbtn} className="splash-options" id="bizbtn" name="bizbtn" type="primary" shape="circle" ghost={!this.state.bizbtn} size="large" onClick={this.handleCTAOption}>
              <Icon component={({ height, width }) => <BizLeaders height={height} width={width} />} />
            </Button>
            <div className="splash-opt-text">
              Business <br />Leadership
            </div>
          </div>
        </div>

        <div className="splash-grid-i4">
          <Form.Item className="splash-cta-container">
          {getFieldDecorator('email', {
            rules: [{ required: true, type: 'email', message: 'Please input your email!' }],
          })(
            <Input size="large" name="email" className="splash-cta-item" id="email" placeholder="name@company.com" style={{marginBottom: '8vh'}}/>
          )}
          </Form.Item>
          <Form.Item className="splash-cta-container">
            <Button htmlType="submit" className="splash-cta-item" id="submit" type="primary" ghost={true} size="large">
              <BrandDoubleArrow color="#F8E71C" /><span style={{ paddingRight: '8px', paddingLeft: '8px' }}>Request Demo</span><BrandInvDoubleArrow color="#F8E71C" />
            </Button>
          </Form.Item>
        </div>

      </Form>
    )
  }
}

const ControlledCTA = Form.create()(CTAform)

const splashContent = (
  <>
    <div className="splash-grid-container" >
      <div className="splash-grid-i1" style={{ color: 'white' }}>
        <h1 className="splash-h1">
          Welcome to the
        <br />
          <span style={{ color: brandBrightBlueAccent, textTransform: 'uppercase', fontWeight: 500 }}>Clinical Imaging Cloud</span>
        </h1>
        <h3 className="splash-h3">
          <a className="splash-subtitle-link">Real-time Decision Support.</a> <a className="splash-subtitle-link">Clinical Insights.</a> <a className="splash-subtitle-link">Operational Excellence.</a> <br />Put your data to work.
      </h3>
      </div>
    </div>
    <ControlledCTA />
  </>
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