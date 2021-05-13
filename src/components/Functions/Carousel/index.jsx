import React from 'react'
import { Carousel } from 'antd';
import './index.scss'

export class Carouselz extends React.Component {
  render() {
    const contentStyle = {
        height: 'auto',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
    return (
      <div className='ant-carousel'>
        <Carousel autoplay>
            <div>
                <h3 style={contentStyle}>1</h3>
            </div>
            <div>
                <h3 style={contentStyle}>2</h3>
            </div>
            <div>
                <h3 style={contentStyle}>3</h3>
            </div>
            <div>
                <h3 style={contentStyle}>4</h3>
            </div>
        </Carousel>
      </div>
    );
  }
}
export default Carouselz