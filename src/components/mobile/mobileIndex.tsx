import * as React from 'react'
import ScrollPercentage from 'react-scroll-percentage'
import SplashTemplate from '../indexLayout'
import ProductGraphic from '../../assets/productGraphic'
import BizLeaders from '../../assets/splash-content/biz-leaders'
import Clinicians from '../../assets/splash-content/clinicians'
import Ops from '../../assets/splash-content/ops'
import { brandBrightBlueAccent, brandDarkBlue, BrandDoubleArrow, BrandInvDoubleArrow } from '../../assets/brandAssets'
import * as BG from '../../assets/bg3.jpg'
import './mobile-index.css'
import '../../assets/assets.css'
import { Button, Icon, Input, Form, notification } from 'antd';
import { encode } from '../../utils/serialize';
import { navigate } from 'gatsby';


const splash = {
  content: (
    <div className="m-splash-grid-container">
      <div className="m-splash-grid-i--1">
        <a className="m-splash-h2 splash-subtitle-link">Real-time Decision Support.</a>
      </div>
      <div className="m-splash-grid-i1_2">
        <a className="m-splash-h2 splash-subtitle-link">
          Operational Excellence.
        </a>
      </div>
      <div className="m-splash-grid-i2_3">
        <a className="m-splash-h2 splash-subtitle-link">
          Clinical Insights.
        </a>
      </div>
      <div className="m-splash-grid-i3_4">
        Put your data <br /> <span className="emphasis">to work.</span>
      </div>
      <div 
        className="m-splash-grid-i4_5"
        onClick={() => navigate('#platform')}
      >
        <svg
          width="30px"
          viewBox="0 0 30 117"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g
            transform="translate(-173.000000, -614.000000) translate(0.000000, 92.000000) translate(173.000000, 523.000000)"
            stroke="none"
            strokeWidth={1}
            fill="none"
            fillRule="evenodd"
          >
            <path
              d="M14.928 115.105l14.177-12.622-2.699-3.201-6.585 5.99c-1.402 1.342-2.408 2.455-3.018 3.339V71.249h-3.75v37.407c-.427-.67-.838-1.219-1.235-1.646-.396-.427-.99-1.006-1.783-1.738l-6.585-5.99-2.699 3.2 14.177 12.623z"
              fill="#97DBFA"
            />
            <path
              d="M15 101.551V1.206"
              stroke="#97DBFA"
              strokeWidth={4}
              strokeLinecap="round"
            />
          </g>
        </svg>
      </div>
    </div>
  ),
  background: `url(${BG})`
}



class MobileCTAForm extends React.Component <any, any> {
  state = {
    percentage: 0,
    opsbtn: false,
    scibtn: false,
    bizbtn: false,
  }

  handleSubmit = (e: any) => {
    e.preventDefault()
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        const form = e.target;
        
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
            notification.success({
              description: `We'll be in touch shortly.`, 
              message: `Thank you for Requesting a Demo!`, 
            })
            this.props.form.resetFields()
            this.setState({bizbtn: false, scibtn: false, opsbtn: false})
          })
          .catch(error => {
            alert(error)
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
    const props = this.props

    const { getFieldDecorator, getFieldError, isFieldTouched } = this.props.form

    return (
      <SplashTemplate location={props.loc} splash={splash} mobile={true}>
        <ScrollPercentage
          onChange={(percentage: any, inView: any) => {
            this.setState({percentage: parseFloat(percentage.toFixed(1))})
          }}
          className="scroll-container"
        >
          <div className="m-splash-grid-container sticky" id="platform">
            <div className="m-splash-grid-i1">
              <h1 className="m-splash-h1">Introducing the <br /><span style={{ color: brandBrightBlueAccent, textTransform: 'uppercase', fontWeight: 500 }}>Clinical Imaging Stack</span></h1>
            </div>
            <div className="m-splash-grid-i-fig">
              <ProductGraphic viewPercent={this.state.percentage}/>
            </div>
            <div className="m-splash-grid-i4_5"
              onClick={() => {
                if (this.state.percentage < .3) {
                  this.setState({percentage: .3})
                } else if (this.state.percentage < .8) {
                  this.setState({percentage: parseFloat((this.state.percentage + .1).toFixed(1))})
                } else {
                  navigate('#insights')
                }  
              }}
            >
              <svg
                width="30px"
                viewBox="0 0 30 117"
                version="1.1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g
                  transform="translate(-173.000000, -614.000000) translate(0.000000, 92.000000) translate(173.000000, 523.000000)"
                  stroke="none"
                  strokeWidth={1}
                  fill="none"
                  fillRule="evenodd"
                >
                  <path
                    d="M14.928 115.105l14.177-12.622-2.699-3.201-6.585 5.99c-1.402 1.342-2.408 2.455-3.018 3.339V71.249h-3.75v37.407c-.427-.67-.838-1.219-1.235-1.646-.396-.427-.99-1.006-1.783-1.738l-6.585-5.99-2.699 3.2 14.177 12.623z"
                    fill="#97DBFA"
                  />
                  <path
                    d="M15 101.551V1.206"
                    stroke="#97DBFA"
                    strokeWidth={4}
                    strokeLinecap="round"
                    className={this.state.percentage < .3 ? 'soln-filter-animation' : undefined}
                  />
                </g>
              </svg>
            </div>
          </div>
        </ScrollPercentage>
        <section className="m-cta-container" id="insights">
          <Form className="m-splash-grid-container splash" onSubmit={(e: any) => this.handleSubmit(e)} name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="opsbtn" />
            <input type="hidden" name="bizbtn" />
            <input type="hidden" name="scibtn" />
            <div className="m-cta-grid-i1">
              <div className="m-splash-opt-container" id="ops">
                <Button className="m-splash-options" value={''+this.state.opsbtn} id="opsbtn" ghost={!this.state.opsbtn} onClick={this.handleCTAOption} type="primary" shape="circle" size="large">
                  <Icon component={({ height }) => <Ops height={height} />} style={{fontSize: '10vw'}}/>
                </Button>
                <div className="m-splash-opt-text">
                  Data Operations + <br />Management
              </div>
              </div>
              <div className="m-splash-opt-container" id="sci">
                <Button className="m-splash-options" type="primary" shape="circle" value={''+this.state.scibtn} id="scibtn" ghost={!this.state.scibtn} onClick={this.handleCTAOption} size="large">
                  <Icon component={({ height }) => <Clinicians height={height} />} style={{fontSize: '10vw'}}/>
                </Button>
                <div className="m-splash-opt-text">
                  Clinicians + <br />Scientists
              </div>
              </div>
              <div className="m-splash-opt-container" id="biz">
                <Button className="m-splash-options" type="primary" shape="circle" value={''+this.state.bizbtn} id="bizbtn" ghost={!this.state.bizbtn} onClick={this.handleCTAOption} size="large" >
                  <Icon component={({ height, width }) => <BizLeaders height={height} width={width} />} style={{fontSize: '10vw'}}/>
                </Button>
                <div className="m-splash-opt-text">
                  Business <br />Leadership
                </div>
              </div>
            </div>

            <div className="m-cta-grid-btn-container">
              <div className="m-cta-btn">
                <div className="m-cta-btn-text">
                  Tell us <br /> who you are
                </div>
                {/* <div className="m-cta-plus-btn">
                  <Button shape="circle" ghost={true} icon="plus" type="primary" size="small" style={{borderColor: '#9ADFFA', color: '#F8E71C'}}/>
                </div> */}
              </div>
            </div>

            <div className="m-cta-input-container">
              <Form.Item className="m-splash-cta-container">
                {getFieldDecorator('email', {
                  rules: [{ required: true, type: 'email', message: 'Please input your email!' }],
                })(
                  <Input size="large" className="m-splash-cta-item" id="email" placeholder="name@company.com" />
                )}
              </Form.Item>
              <Form.Item className="m-splash-cta-container">
                <Button htmlType="submit" className="m-splash-cta-item" id="submit" type="primary" ghost={!(!getFieldError('email') && isFieldTouched('email'))} size="large">
                  <BrandDoubleArrow color="#F8E71C" /><span style={{ paddingRight: '8px', paddingLeft: '8px' }}>Request Demo</span><BrandInvDoubleArrow color="#F8E71C" />
                </Button>
              </Form.Item>
            </div>
          </Form>
        </section>
      </SplashTemplate>
    )
  }
}

export default Form.create()(MobileCTAForm)