import React from 'react'
import { Link } from 'gatsby'
import Scrollchor from 'react-scrollchor';
import { Col, Layout, Row, Menu, Icon } from 'antd'
import { BrandSingleArrow, brandBrightBlueAccent } from '../assets/brandAssets'
import LayoutTmplt from '../components/genericLayout'
import SolutionFunnel from '../components/solutionFunnel';

import '../assets/assets.css'

const { Content } = Layout
const { Item } = Menu


const solutionsSubMenu = (location: any) => (
<Scrollchor to="analytics-cloud" animate={{offset: -64, duration: 400}} style={{textDecoration: 'none'}} disableHistory={true}>
  <Row type="flex" style={{background: '#E6F7FF'}}>
    <Link
      to="/analytics/"
      style={{
        textAlign: 'center',
      }}
    >
      <Col style={{height: '62px', paddingLeft: 'calc(100vw / 32)'}}>
          <h2 style={{color: 'rgba(0, 0, 0, 0.65)', width: 'calc((100vw / 32) * 5)', lineHeight: '62px', textAlign: 'center', textTransform: 'uppercase', fontFamily: 'Gill Sans, Lato', fontSize: '2em'}}>
            Analytics<span style={{ color: brandBrightBlueAccent, fontSize: '1.2em', paddingLeft: '4px' }}><Icon type="cloud" style={{verticalAlign: '-6px'}}/></span>
            <BrandSingleArrow color={brandBrightBlueAccent} paddingLeft="12px"/>
          </h2>
      </Col>
    </Link>
    <Col>
      <Menu
        theme="light"
        mode={"horizontal"}
        style={{ lineHeight: '62px', fontSize: '16px', fontWeight: 600, letterSpacing: '.6px', height: '62px', borderBottom: '0px solid white', paddingRight: 'calc(100vw / 16)', backgroundColor: '#E6F7FF' }}
        selectedKeys={[location ? location.pathname : '']}
      >
        <Item
          key="/"
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            width: 'calc(75vw / 4)'
          }}
        >
          <Link
            to="/"
            style={{
              textAlign: 'center',
            }}
          >
            <div style={{lineHeight: '28px'}}>
              <Icon type="thunderbolt" style={{ fontSize: '20px', textAlign: 'center'}}/>
              <br />
              Operational Excellence
            </div>
        </Link>
        </Item>
        <Item
          key="/learn-more/"
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',        
            width: 'calc(75vw / 4)'
          }}
        >
          <Link
            to="/learn-more/"
            style={{
              textAlign: 'center'
            }}
          >
            <div style={{ lineHeight: '28px' }}>
              <Icon type="reconciliation" style={{ fontSize: '20px' }} />
              <br />
              Protocol Adherence
            </div>
          </Link>
        </Item>
        <Item
          key="/contact/"
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            width: 'calc(75vw / 4)'
          }}
        >
          <Link
            to="/contact/"
            style={{
              textAlign: 'center'
            }}
          >
            <div style={{ lineHeight: '28px' }}>
              <Icon type="bar-chart" style={{ fontSize: '24px' }} />
              <br />
              Governance Support
            </div>
          </Link>
        </Item>
        <Item
          key="/anotherone/"
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            width: 'calc(75vw / 4)'
          }}
        >
          <Link
            to="/anotherone/"
            style={{
              textAlign: 'center'
            }}
          >
            <div style={{ lineHeight: '28px' }}>
              {/* <Icon 
                component={(props) => (
                  <svg height={props.height} viewBox="0 0 43 40" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                    <g id="Group">
                      <path d="M41.7710769,19.9064615 C41.7710769,17.6633846 40.4055385,15.7427692 38.4793846,14.9544615 C38.1686154,14.8203077 37.8455385,14.712 37.5089231,14.6393846 C38.3870769,13.6492308 38.8830769,12.3587692 38.8830769,10.9747692 C38.8830769,7.94769231 36.4701538,5.48553846 33.504,5.48553846 C33.1483077,5.48553846 32.7938462,5.52246154 32.4436923,5.59569231 C32.1901538,2.808 29.8849231,0.617846154 27.0873846,0.617846154 C24.2215385,0.617846154 21.7083077,3.35076923 21.7083077,6.46646154 L21.7083077,34.5083077 C21.7083077,37.5353846 24.1212308,39.9975385 27.0873846,39.9975385 C30.0529231,39.9975385 32.4664615,37.5353846 32.4664615,34.5083077 C32.4664615,34.4664615 32.4658462,34.4258462 32.4652308,34.3883077 C32.8055385,34.456 33.152,34.4904615 33.504,34.4904615 C36.4701538,34.4904615 38.8830769,32.0283077 38.8830769,29.0024615 C38.8830769,27.6393846 38.3969231,26.36 37.5372308,25.3723077 C39.9544615,24.8350769 41.7704615,22.6350769 41.7704615,20.0098462 C41.7704615,19.9809231 41.7667692,19.9532308 41.7667692,19.9243077 C41.7673846,19.9181538 41.7710769,19.9126154 41.7710769,19.9064615 Z M27.0886154,34.4855385 C26.4061538,34.4855385 25.8516923,33.9310769 25.8516923,33.2492308 C25.8516923,32.5673846 26.4055385,32.0123077 27.0886154,32.0123077 C27.7698462,32.0123077 28.3249231,32.5667692 28.3249231,33.2492308 C28.3243077,33.9310769 27.7698462,34.4855385 27.0886154,34.4855385 Z M33.5292308,29.8990769 C32.8467692,29.8990769 32.2923077,29.3446154 32.2923077,28.6627692 C32.2923077,27.9809231 32.8461538,27.4258462 33.5292308,27.4258462 C34.2104615,27.4258462 34.7655385,27.9803077 34.7655385,28.6627692 C34.7655385,29.3446154 34.2110769,29.8990769 33.5292308,29.8990769 Z M36.3913846,24.2670769 C36.2806154,24.2670769 36.1716923,24.2590769 36.0633846,24.2504615 C35.7809231,24.2227692 35.5187692,24.3975385 35.4276923,24.6664615 C35.3378462,24.9353846 35.4418462,25.2313846 35.6812308,25.3827692 C36.9156923,26.1667692 37.6529231,27.5206154 37.6529231,29.0030769 C37.6529231,31.1261538 36.128,32.8867692 34.1452308,33.2043077 L34.1452308,31.0430769 C35.2067692,30.768 35.9969231,29.8098462 35.9969231,28.6633846 C35.9969231,27.3027692 34.8904615,26.1956923 33.5298462,26.1956923 C32.1692308,26.1956923 31.0621538,27.3027692 31.0621538,28.6633846 C31.0621538,29.8098462 31.8516923,30.768 32.9144615,31.0430769 L32.9144615,33.2116923 C32.5624615,33.16 32.2172308,33.0676923 31.8867692,32.9243077 C31.6670769,32.8301538 31.4116923,32.8701538 31.2332308,33.0295385 C31.0541538,33.1889231 30.9846154,33.4375385 31.0529231,33.6664615 C31.0867692,33.7790769 31.1169231,33.8683077 31.1427692,33.9470769 C31.2166154,34.1667692 31.2363077,34.2264615 31.2363077,34.5083077 C31.2363077,36.6412308 29.6990769,38.408 27.7033846,38.7144615 L27.7033846,35.6289231 C28.7655385,35.3538462 29.5556923,34.3963077 29.5556923,33.2492308 C29.5556923,31.8886154 28.4492308,30.7815385 27.0886154,30.7815385 C25.728,30.7815385 24.6209231,31.8886154 24.6209231,33.2492308 C24.6209231,34.3956923 25.4104615,35.3538462 26.4726154,35.6289231 L26.4726154,38.7144615 C24.4769231,38.408 22.9396923,36.6412308 22.9396923,34.5083077 L22.9396923,21.8535385 L24.7076923,21.8535385 C24.9827692,22.9156923 25.9415385,23.7058462 27.0886154,23.7058462 C28.4492308,23.7058462 29.5556923,22.5993846 29.5556923,21.2387692 C29.5556923,19.8781538 28.4492308,18.7710769 27.0886154,18.7710769 C25.9421538,18.7710769 24.984,19.5606154 24.7083077,20.6227692 L22.9396923,20.6227692 L22.9396923,12.2473846 L27.088,12.2473846 L27.896,12.2473846 L30.5243077,12.2473846 C30.8,13.3095385 31.7581538,14.0990769 32.9052308,14.0990769 C34.2658462,14.0990769 35.3723077,12.9926154 35.3723077,11.632 C35.3723077,10.2713846 34.2658462,9.16430769 32.9052308,9.16430769 C31.7581538,9.16430769 30.7993846,9.95446154 30.5243077,11.0166154 L28.5113846,11.0166154 L28.5113846,8.56615385 C29.5741538,8.29107692 30.3636923,7.33353846 30.3636923,6.18646154 C30.3636923,4.82584615 29.2572308,3.71876923 27.8966154,3.71876923 C26.536,3.71876923 25.4289231,4.82584615 25.4289231,6.18646154 C25.4289231,7.33292308 26.2190769,8.29107692 27.2806154,8.56615385 L27.2806154,11.0166154 L27.088,11.0166154 L22.9396923,11.0166154 L22.9396923,6.46584615 C22.9396923,4.00615385 24.8781538,1.848 27.088,1.848 C29.376,1.848 31.2363077,3.75815385 31.2363077,6.10646154 C31.2363077,6.176 31.2307692,6.24553846 31.2221538,6.37292308 C31.2092308,6.58215385 31.3027692,6.784 31.4707692,6.90830769 C31.64,7.03261538 31.8596923,7.06338462 32.056,6.98830769 C32.5298462,6.80738462 33.0166154,6.71630769 33.5046154,6.71630769 C35.792,6.71630769 37.6529231,8.62646154 37.6529231,10.9747692 C37.6529231,12.4886154 36.8923077,13.8566154 35.6172308,14.6332308 C35.6043077,14.6418462 35.5956923,14.6541538 35.5827692,14.6633846 C33.1544615,15.1236923 31.3095385,17.2978462 31.3095385,19.9064615 C31.3095385,20.2467692 31.5846154,20.5218462 31.9249231,20.5218462 C32.2646154,20.5218462 32.5403077,20.2467692 32.5403077,19.9064615 C32.5403077,17.6424615 34.3347692,15.8006154 36.5403077,15.8006154 C37.0670769,15.8006154 37.5698462,15.9083077 38.0313846,16.0990769 C39.5058462,16.7532308 40.5403077,18.2596923 40.5403077,20.0092308 C40.5403077,22.3569231 38.6793846,24.2670769 36.3913846,24.2670769 Z M25.8516923,21.2387692 C25.8516923,20.5569231 26.4055385,20.0018462 27.0886154,20.0018462 C27.7698462,20.0018462 28.3249231,20.5563077 28.3249231,21.2387692 C28.3249231,21.92 27.7704615,22.4750769 27.0886154,22.4750769 C26.4055385,22.4744615 25.8516923,21.92 25.8516923,21.2387692 Z M27.8966154,7.42276923 C27.2147692,7.42276923 26.6596923,6.86830769 26.6596923,6.18646154 C26.6596923,5.50461538 27.2141538,4.94953846 27.8966154,4.94953846 C28.5790769,4.94953846 29.1329231,5.504 29.1329231,6.18646154 C29.1329231,6.86769231 28.5784615,7.42276923 27.8966154,7.42276923 Z M31.6689231,11.632 C31.6689231,10.9501538 32.2227692,10.3950769 32.9058462,10.3950769 C33.5870769,10.3950769 34.1421538,10.9495385 34.1421538,11.632 C34.1421538,12.3132308 33.5876923,12.8683077 32.9058462,12.8683077 C32.2227692,12.8683077 31.6689231,12.3138462 31.6689231,11.632 Z" id="Shape" fill="currentColor"/>
                      <path d="M0.197538462,19.8990769 C0.197538462,19.928 0.193846154,19.9556923 0.193846154,19.9846154 C0.193846154,22.6098462 2.00984615,24.8098462 4.42707692,25.3470769 C3.568,26.3347692 3.08123077,27.6147692 3.08123077,28.9772308 C3.08123077,32.0030769 5.49415385,34.4652308 8.46030769,34.4652308 C8.81169231,34.4652308 9.15876923,34.4307692 9.49907692,34.3630769 C9.49846154,34.4012308 9.49784615,34.4412308 9.49784615,34.4830769 C9.49784615,37.5101538 11.9113846,39.9723077 14.8769231,39.9723077 C17.8430769,39.9723077 20.256,37.5101538 20.256,34.4830769 L20.256,6.44123077 C20.256,3.32615385 17.7427692,0.592615385 14.8769231,0.592615385 C12.0793846,0.592615385 9.77415385,2.78276923 9.52061538,5.57046154 C9.17107692,5.49723077 8.816,5.46030769 8.46030769,5.46030769 C5.49415385,5.46030769 3.08123077,7.92246154 3.08123077,10.9495385 C3.08123077,12.3335385 3.57784615,13.624 4.45538462,14.6141538 C4.11876923,14.6867692 3.79569231,14.7950769 3.48492308,14.9292308 C1.55876923,15.7175385 0.193230769,17.6381538 0.193230769,19.8812308 C0.193846154,19.8873846 0.197538462,19.8929231 0.197538462,19.8990769 Z M13.6406154,33.224 C13.6406154,32.5421538 14.1950769,31.9870769 14.8769231,31.9870769 C15.5593846,31.9870769 16.1138462,32.5415385 16.1138462,33.224 C16.1138462,33.9052308 15.56,34.4603077 14.8769231,34.4603077 C14.1950769,34.4603077 13.6406154,33.9058462 13.6406154,33.224 Z M7.19938462,28.6375385 C7.19938462,27.9556923 7.75384615,27.4006154 8.43569231,27.4006154 C9.11815385,27.4006154 9.67261538,27.9550769 9.67261538,28.6375385 C9.67261538,29.3187692 9.11876923,29.8738462 8.43569231,29.8738462 C7.75384615,29.8738462 7.19938462,29.3193846 7.19938462,28.6375385 Z M1.42461538,19.9846154 C1.42461538,18.2344615 2.45969231,16.7286154 3.93353846,16.0744615 C4.39507692,15.8830769 4.89723077,15.776 5.42461538,15.776 C7.63015385,15.776 9.42461538,17.6178462 9.42461538,19.8818462 C9.42461538,20.2221538 9.70030769,20.4972308 10.04,20.4972308 C10.3803077,20.4972308 10.6553846,20.2221538 10.6553846,19.8818462 C10.6553846,17.2738462 8.81046154,15.0996923 6.38215385,14.6387692 C6.36923077,14.6295385 6.36123077,14.6172308 6.34769231,14.6086154 C5.07323077,13.8313846 4.312,12.464 4.312,10.9501538 C4.312,8.60246154 6.17292308,6.69169231 8.46030769,6.69169231 C8.94830769,6.69169231 9.43507692,6.78276923 9.90892308,6.96369231 C10.1052308,7.03876923 10.3249231,7.008 10.4941538,6.88369231 C10.6621538,6.75938462 10.7563077,6.55753846 10.7427692,6.34830769 C10.7335385,6.22092308 10.7286154,6.152 10.7286154,6.08184615 C10.7286154,3.73415385 12.5889231,1.82338462 14.8769231,1.82338462 C17.0867692,1.82338462 19.0252308,3.98153846 19.0252308,6.44123077 L19.0252308,10.992 L14.8769231,10.992 L14.6843077,10.992 L14.6843077,8.54153846 C15.7458462,8.26646154 16.536,7.30830769 16.536,6.16184615 C16.536,4.80123077 15.4289231,3.69415385 14.0683077,3.69415385 C12.7076923,3.69415385 11.6012308,4.80123077 11.6012308,6.16184615 C11.6012308,7.30892308 12.3907692,8.26646154 13.4535385,8.54153846 L13.4535385,10.992 L11.44,10.992 C11.1649231,9.92984615 10.2061538,9.13969231 9.05907692,9.13969231 C7.69846154,9.13969231 6.592,10.2467692 6.592,11.6073846 C6.592,12.968 7.69846154,14.0744615 9.05907692,14.0744615 C10.2061538,14.0744615 11.1643077,13.2849231 11.44,12.2227692 L14.0683077,12.2227692 L14.8763077,12.2227692 L19.0246154,12.2227692 L19.0246154,20.5975385 L17.256,20.5975385 C16.9803077,19.5353846 16.0221538,18.7458462 14.8756923,18.7458462 C13.5150769,18.7458462 12.4086154,19.8529231 12.4086154,21.2135385 C12.4086154,22.5741538 13.5150769,23.6806154 14.8756923,23.6806154 C16.0227692,23.6806154 16.9815385,22.8904615 17.2566154,21.8283077 L19.0246154,21.8283077 L19.0246154,34.4830769 C19.0246154,36.616 17.4873846,38.3827692 15.4916923,38.6892308 L15.4916923,35.6036923 C16.5538462,35.3286154 17.3433846,34.3704615 17.3433846,33.224 C17.3433846,31.8633846 16.2363077,30.7563077 14.8756923,30.7563077 C13.5150769,30.7563077 12.4086154,31.8633846 12.4086154,33.224 C12.4086154,34.3710769 13.1987692,35.3286154 14.2609231,35.6036923 L14.2609231,38.6892308 C12.2652308,38.3827692 10.728,36.616 10.728,34.4830769 C10.728,34.2012308 10.7476923,34.1415385 10.8215385,33.9218462 C10.848,33.8430769 10.8781538,33.7538462 10.9113846,33.6412308 C10.9796923,33.4123077 10.9101538,33.1636923 10.7310769,33.0043077 C10.5526154,32.8449231 10.2972308,32.8049231 10.0775385,32.8990769 C9.74707692,33.0418462 9.40184615,33.1347692 9.04984615,33.1864615 L9.04984615,31.0178462 C10.1126154,30.7427692 10.9021538,29.7846154 10.9021538,28.6381538 C10.9021538,27.2775385 9.79507692,26.1704615 8.43446154,26.1704615 C7.07384615,26.1704615 5.96738462,27.2775385 5.96738462,28.6381538 C5.96738462,29.7846154 6.75753846,30.7427692 7.81907692,31.0178462 L7.81907692,33.1790769 C5.83569231,32.8609231 4.31138462,31.1009231 4.31138462,28.9778462 C4.31138462,27.4953846 5.04861538,26.1421538 6.28307692,25.3575385 C6.52246154,25.2061538 6.62707692,24.9095385 6.53661538,24.6412308 C6.44553846,24.3723077 6.18338462,24.1975385 5.90092308,24.2252308 C5.79261538,24.2344615 5.68307692,24.2418462 5.57292308,24.2418462 C3.28553846,24.2418462 1.42461538,22.3316923 1.42461538,19.9846154 Z M14.8763077,22.4492308 C14.1950769,22.4492308 13.64,21.8947692 13.64,21.2129231 C13.64,20.5310769 14.1944615,19.976 14.8763077,19.976 C15.5587692,19.976 16.1132308,20.5304615 16.1132308,21.2129231 C16.1132308,21.8947692 15.5593846,22.4492308 14.8763077,22.4492308 Z M12.832,6.16123077 C12.832,5.47938462 13.3858462,4.92430769 14.0683077,4.92430769 C14.7507692,4.92430769 15.3052308,5.47876923 15.3052308,6.16123077 C15.3052308,6.84246154 14.7507692,7.39753846 14.0683077,7.39753846 C13.3858462,7.39753846 12.832,6.84246154 12.832,6.16123077 Z M9.05907692,12.8430769 C8.37784615,12.8430769 7.82276923,12.2886154 7.82276923,11.6067692 C7.82276923,10.9249231 8.37723077,10.3698462 9.05907692,10.3698462 C9.74153846,10.3698462 10.296,10.9243077 10.296,11.6067692 C10.296,12.2886154 9.74215385,12.8430769 9.05907692,12.8430769 Z" id="Shape" fill="currentColor"/>
                    </g>
                  </svg>
                  )} 
                style={{ fontSize: '26px', marginTop: '4px' }} 
              /> */}
              <Icon type="heat-map" style={{ fontSize: '20px' }} />
              <br />
              Anomaly Discovery
            </div>
          </Link>
        </Item>
      </Menu>
    </Col>
  </Row>
</Scrollchor>
)

const generateCardBullets = (datasource: any) => datasource.map(
  (item: string[], idx: number) =>
  <li className="soln-card-item" id={'c-li' + idx}>
    <div id={'c-li-d' + idx}>
      <Icon
        className="soln-card-item-icon"
        type={item[0]}
      />
      {item[1]}
    </div>
  </li>
  )

const Solutions = ({ location, id }: any) => {
  
  console.log('location is. in analytics.tsx: ', location)

  return (
    <LayoutTmplt
      location={location}
      bgColor="#E6F7FF"
      id={id}
    >
      <Content className="soln-grid-container">
        <div className="soln-title-row" id="insights">
            <h1 className="soln-title">Uncover Actionable Insights</h1>
        </div>
        <div className="soln-card-title-row">
          <div id="ct1" className="soln-card-title">
            <h2>Assess</h2>
          </div>
          <div id="ct2" className="soln-card-title">
            <h2>Insights</h2>
          </div>
        </div>
        <div className="soln-card-row">
          <div className="soln-card" id="c1">
            <ul className="soln-ul">
              {generateCardBullets(
                [
                  ['bar-chart', 'Weekly Activity'],
                  ['dashboard', 'CRO Performance'],
                  ['rise', 'Site Performance'],
                  ['radar-chart', 'Study Health'],
                  ['sliders', 'Cross-Study Evaluation'],
                ])
              }
            </ul>
          </div>
          <div className="soln-card" id="c2">
            <ul className="soln-ul">
              {generateCardBullets(
                [
                  ['hourglass', 'Real-Time Optimization'],
                  ['warning', 'Ecosystem Bottlenecks'],
                  ['fall', 'Potential Painpoints'],
                  ['compass', 'Decision Support'],
                  ['global', 'Strategic Support'],
                ])
              }
            </ul>
          </div>
        </div>
        <div className="soln-fig-container" >
          <SolutionFunnel />
        </div>
      </Content>
    </LayoutTmplt>
  )
}

export default Solutions
