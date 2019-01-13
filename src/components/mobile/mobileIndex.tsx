import * as React from 'react'
import SplashTemplate from '../indexLayout'
import ProductGraphic from '../../assets/productGraphic'
import { InView } from 'react-intersection-observer'
import { brandBrightBlueAccent, brandDarkBlue } from '../../assets/brandAssets'
import './mobile-index.css'


const splash = {
  content: (
    <div className="m-splash-grid-container">
      <div className="m-splash-grid-i1">
        <a className="splash-h2 splash-subtitle-link">Real-time Decision Support.</a>
      </div>
      <div className="m-splash-grid-i2">
        <a className="splash-h2 splash-subtitle-link">
          Operational Excellence.
        </a>
      </div>
      <div className="m-splash-grid-i3">
        <a className="splash-h2 splash-subtitle-link">
          Clinical Insights.
        </a>
      </div>
      <div className="m-splash-grid-i4">
        Put your data <br /> <span className="emphasis">to work.</span>
      </div>
      <div className="m-splash-grid-i5">
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
  // background: brandDarkBlue
}

export default class test extends React.Component <any> {
  state = {
    scroll: false
  }

  render() {
    const props = this.props

    return (
      <SplashTemplate location={props.loc} splash={splash}>
        <div className="m-splash-grid-container sticky">
          <div className="m-splash-grid-i1_2">
            <h1 className="splash-h1">Introducing the <br /><span style={{ color: brandBrightBlueAccent, textTransform: 'uppercase', fontWeight: 500 }}>Clinical Imaging Stack</span></h1>
          </div>
          <div className="m-splash-grid-i-fig">
            <ProductGraphic />
          </div>
          <div className="m-splash-grid-i5">
            <InView onChange={() => this.setState({scroll: !this.state.scroll})}>
              {({ inView, ref }) => (
                <div ref={ref}>
                  <h2 className={'' + this.state.scroll}>{`Header inside viewport ${inView}.`}</h2>
                </div>
              )}
            </InView>
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
      </SplashTemplate>
    )
  }
}