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
import { Button, Icon, Input } from 'antd';


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
      <div className="m-splash-grid-i4_5">
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

export default class test extends React.Component <any> {
  state = {
    percentage: 0
  }

  render() {
    const props = this.props

    return (
      <SplashTemplate location={props.loc} splash={splash} mobile={true}>
        <ScrollPercentage
          onChange={(percentage: any, inView: any) => {
            // console.log(parseFloat(percentage.toFixed(1)))
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
            <div className="m-splash-grid-i4_5">

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
          <div className="m-splash-grid-container">
            <div className="m-cta-grid-i1">
              <div className="m-splash-opt-container" id="ops">
                <Button className="m-splash-options" type="primary" shape="circle" ghost={true} size="large">
                  <Icon component={({ height }) => <Ops height={height} />} style={{fontSize: '10vw'}}/>
                </Button>
                <div className="m-splash-opt-text">
                  Data Operations + <br />Management
              </div>
              </div>
              <div className="m-splash-opt-container" id="sci">
                <Button className="m-splash-options" type="primary" shape="circle" ghost={true} size="large">
                  <Icon component={({ height }) => <Clinicians height={height} />} style={{fontSize: '10vw'}}/>
                </Button>
                <div className="m-splash-opt-text">
                  Clinicians + <br />Scientists
              </div>
              </div>
              <div className="m-splash-opt-container" id="biz">
                <Button className="m-splash-options" type="primary" shape="circle" ghost={true} size="large" >
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
                <div className="m-cta-plus-btn">
                  <Button shape="circle" ghost={true} icon="plus" type="primary" size="small" style={{borderColor: '#9ADFFA', color: '#F8E71C'}}/>
                </div>
              </div>
            </div>

            <div className="m-cta-input-container">
              <div className="m-splash-cta-container">
                <Input size="large" className="m-splash-cta-item" id="email" placeholder="name@company.com" />
              </div>
              <div className="m-splash-cta-container">
                <Button className="m-splash-cta-item" id="submit" type="primary" ghost={true} size="large" href="/demo/">
                  <BrandDoubleArrow color="#F8E71C" /><span style={{ paddingRight: '8px', paddingLeft: '8px' }}>Request Demo</span><BrandInvDoubleArrow color="#F8E71C" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </SplashTemplate>
    )
  }
}