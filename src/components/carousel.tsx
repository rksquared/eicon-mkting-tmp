import React from 'react'
import { Button, Carousel, Icon } from 'antd'

import * as Graph from '../images/d3force.png'
import { TextAlignProperty, PositionProperty } from '../../node_modules/csstype';


const carouselStyle = {
  textAlign: 'center' as TextAlignProperty,
  height: '600px',
  lineHeight: '600px',
  background: '#364d79',
  overflow: 'hidden',
  color: '#fff',
  fontSize: '20px'
}

const overlayStyle = {
  textAlign: 'left' as TextAlignProperty,
  height: '600px',
  lineHeight: '60px',
  fontSize: '64px',
  color: '#002766',
  zIndex: 4,
  position: 'absolute' as PositionProperty,
  top: 'calc(100vh - (90vh - 88px))',
  display: 'inline-block',
  width: '60%',
  margin: '0 34%'
}

export default class BrandCarousel extends React.Component {

  state = {
    hover: null,
  }

  hoverArrow = (arrow: any) => {
    this.setState({
      hover: arrow
    })
  }

  render() {

    const Arrow = (props: any) => {
      const { type, style, onHover, onClick } = props;
      return (
        <Icon
          type={type}
          style={{
            ...style, 
            fontSize: this.state.hover === type ? 40 : 36, 
            left: type === 'left' ? '20' : `calc(100vw - 100px)`, 
            cursor: 'pointer', 
            position: 'absolute',
            top: '48%',
            zIndex: 5,
            display: 'inlineBlock',
            color: this.state.hover === type ? 'white' : '#263f4',
          }}
          onMouseEnter={() => onHover(type)}
          onMouseLeave={() => onHover(null)}
          onClick={onClick}
        />
      )
    }

    return (
      <Carousel
        autoplay
        arrows
        draggable
        fade
        pauseOnHover
        easing="linear"
        nextArrow={<Arrow onHover={this.hoverArrow} type="right" />}
        prevArrow={<Arrow onHover={this.hoverArrow} type="left" />}
      >
        {/* <div>
        <div style={{...carouselStyle, backgroundImage: "url(http://www.maths.qmul.ac.uk/~whitty/MTH6105/Images/network.jpg)"}}>
        </div>
      </div> */}
        <div style={{ width: '100%'}}>
          <div style={{...carouselStyle, backgroundImage: `url(${Graph})`, opacity: .2 }}>
          </div>
          <div style={overlayStyle}>
              Your data,
              <br />
              <br />
              <strong style={{fontSize: '72px'}}> &emsp; &nbsp; Powerful new insights.</strong>
              <br />
              <div><Button size="large" type="primary" style={{
                position: 'relative',
                left: '20%'
              }}>Learn More</Button></div>
            </div>
        </div>
        <div>
          <div style={carouselStyle}>3</div>
        </div>
        <div>
          <div style={carouselStyle}>4</div>
        </div>
      </Carousel>
    )
  }
}