import React from 'react'
import { Col, Row, Layout, Icon } from 'antd'
import StackGraphic from '../assets/StackGraphic'
import {BrandSingleArrow, BrandDoubleArrow} from '../assets/brandAssets'
import '../assets/assets.css'

interface ImagingStackState {
  activeIdx: string
  hoverIdx: null | string
  isHovering: boolean
}
export default class ImagingStack extends React.Component <{}, ImagingStackState>{
  state = {
    activeIdx: '0',
    hoverIdx: null,
    isHovering: false
  }

  startHover = (e: any) => {
    console.log('starting hover', e.target['id'])
    this.setState({isHovering: true, hoverIdx: e.target['id'] })
  }

  endHover = (e: any) => {
    this.setState({isHovering: false, hoverIdx: null})

    console.log('ending hover', e.target['id'])
  }

  setActive = (e: any) => {
    console.log('setting activeidx', e.target['id'])
    this.setState({activeIdx: e.target['id']})
  }

  render() {

    const stackItemActive = (idx: number) => {
      const displayIdx = this.state.isHovering ? this.state.hoverIdx : this.state.activeIdx
      return '' + idx === displayIdx ? 'stack-item' : 'stack-item-inactive'
    }

    return (
      <Layout.Content className="imaging-stack-wrapper">
        <Row className="title">
          <h1><strong><span className="ehighlight">E</span>ICON</strong> CLINICAL IMAGING STACK</h1>
        </Row>
        <Row>
          <Col span={12}>
            <StackGraphic 
              idx={this.state.isHovering ? 
                this.state.hoverIdx : this.state.activeIdx}
              isHovering={this.state.isHovering}
              startHover={this.startHover}
              endHover={this.endHover}
              setActive={this.setActive}
            />
          </Col>
          <Col span={12}>
            <div className={stackItemActive(0)} id="st1">
              <div className="title">
                <div className="icon"><Icon type="search" /></div> <span className="ehighlight">e</span>xplorer
              </div>
              <div className="content">
                <h3>simple. powerful. insights.</h3>
                <ul>
                  <li style={{paddingTop: '20px'}}>
                    Streamlined Data Exploration + Accelerated Data Discovery {stackItemActive(0) === 'stack-item' && <BrandSingleArrow color="black"/>}
                    <br />
                    <span className="em">1. Overview {stackItemActive(0) === 'stack-item' && <BrandDoubleArrow color="#1890FF"/>} 2. Analysis {stackItemActive(0) === 'stack-item' && <BrandDoubleArrow color="#1890FF"/>} 3. Actionable Insights</span>
                  </li>
                  <li>
                    Pre-built Suite of Analytics Dashboards {stackItemActive(0) === 'stack-item' && <BrandSingleArrow color="black"/>}
                    <br />
                    <span className="em">Industry-driven Reports and Insights</span>
                  </li>
                  <li>
                    Next-Gen Image Review {stackItemActive(0) === 'stack-item' && <BrandSingleArrow color="black"/>}
                    <br />
                    <span className="em">
                      Integrated fully-featured Clinical DICOM Viewer + Secure Workstation Export
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className={stackItemActive(1)} id="st2">
              <div className="title">
                <div className="icon"><Icon type="area-chart" /></div> r<span className="ehighlight">e</span>porter
              </div>
              <div className="content">
                <h3>decision support. delivered daily.</h3>
                <ul>
                  <li style={{paddingTop: '20px'}}>
                    Automated Report Generation + Delivery {stackItemActive(1) === 'stack-item' && <BrandSingleArrow color="black"/>}
                    <br />
                    <span className="em">Powerful abstractions of your data driven by current business priorities.</span>
                  </li>
                  <li>
                    Clinical Process + Governance Support {stackItemActive(1) === 'stack-item' && <BrandSingleArrow color="black"/>}
                    <br />
                    <span className="em">Better optimize Clinical Process flow + Governance.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className={stackItemActive(2)} id="st3">
              <div className="title">
                <div className="icon"><Icon type="eye" /></div> d<span className="ehighlight">e</span>epsight
              </div>
              <div className="content">
                <h3>beyond analytics.</h3>
                <ul>
                  <li style={{paddingTop: '20px'}}>
                    Cognitive Imaging Analysis for Clinical Professionals {stackItemActive(2) === 'stack-item' && <BrandSingleArrow color="black"/>}
                    <br />
                    <span className="em">
                      Harness the power of Deep Learning for novel data insights. 
                    </span>
                  </li>
                  <li>
                    Extensible + Scalable Platform for Third Party Alogorithims {stackItemActive(2) === 'stack-item' && <BrandSingleArrow color="black"/>}
                    <br />
                    <span className="em">Rapid deployment of industry leading cognitive tools/algorithims on an as-needed basis.</span>
                  </li>
                  <li>
                    Retrospective Analysis + Data Repurposing {stackItemActive(2) === 'stack-item' && <BrandSingleArrow color="black"/>}
                    <br />
                    <span className="em">Leverage existing trial data to drive new outcomes.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className={stackItemActive(3)} id="st4">
              <div className="title">
                <div className="icon"><Icon type="swap" /></div> flow
              </div>
              <div className="content">
                <h3>data integration made easy.</h3>
                <ul>
                  <li style={{paddingTop: '20px'}}>
                    End-to-end Data Management {stackItemActive(3) === 'stack-item' && <BrandSingleArrow color="black"/>}
                    <br />
                    <span className="em">Manage complexity and facilitate early clinical review.</span>
                  </li>
                  <li>
                    Vendor Integration, Simplified {stackItemActive(3) === 'stack-item' && <BrandSingleArrow color="black"/>}
                    <br />
                    <span className="em">Widely consumed REST API + next gen. Data Layer.</span>
                  </li>
                  <li>
                    Frictionless Remote Data Collection + Distribution {stackItemActive(3) === 'stack-item' && <BrandSingleArrow color="black"/>}
                    <br />
                    <span className="em">Zero-footprint site/reader integration.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className={stackItemActive(4)} id="st5">
              <div className="title">
                <div className="icon"><Icon type="lock" /></div> vault
              </div>
              <div className="content">
                <h3>secure. validated. quality-first.</h3>
                <ul>
                  <li style={{paddingTop: '20px'}}>
                    Industry Leading Security + Compliance {stackItemActive(4) === 'stack-item' && <BrandSingleArrow color="black"/>}
                    <br />
                    <span className="em">Over 10 years of excellence at Top Global Pharma.</span>
                  </li>
                  <li>
                    Automated Image De-Identification + Real-time Imaging Protocol Checks {stackItemActive(4) === 'stack-item' && <BrandSingleArrow color="black"/>}
                    <br />
                    <span className="em">Applied at data intake, for immediate validation.</span>
                  </li>
                  <li>
                    Integrated Ecosystem + Vendor Neutral Archive + Enhanced Data Access {stackItemActive(4) === 'stack-item' && <BrandSingleArrow color="black"/>}
                    <br />
                    <span className="em">Facilitate global collaboration, reduce management costs + accelerate workflow.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className={stackItemActive(5)} id="st6">
              <div className="title">
                <div className="icon"><Icon type="cloud" /></div> fabric
              </div>
              <div className="content">
                <h3>flexible. scalable. service-driven.</h3>
                <ul>
                  <li style={{paddingTop: '20px'}}>
                    Adaptive Infrastructure {stackItemActive(5) === 'stack-item' && <BrandSingleArrow color="black"/>}
                    <br />
                    <span className="em">Cloud/Hybrid-Cloud/On-Premise solution packs.</span>
                  </li>
                  <li>
                    Containerized, Service-Driven Ecosystem {stackItemActive(5) === 'stack-item' && <BrandSingleArrow color="black"/>}
                    <br />
                    <span className="em">Dockerized + orchestrated + easily deployed.</span>
                  </li>
                  <li>
                    Datasource Agnostic {stackItemActive(5) === 'stack-item' && <BrandSingleArrow color="black"/>}
                    <br />
                    <span className="em">Adaptors for PACS, VNA, Local Filestore, Elasticsearch + SQL/noSQL DBs.</span>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Layout.Content>
    )
  }
}