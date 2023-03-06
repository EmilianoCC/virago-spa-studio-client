import './HomePage.css'
import { Card, Divider } from 'antd'
import '../../../node_modules/slick-carousel/slick/slick.css'
import '../../../node_modules/slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import React, { Component } from 'react'
const { Meta } = Card
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79'
}
const settings = {
  className: 'center',
  centerMode: true,
  infinite: true,
  // centerPadding: '60px',
  slidesToShow: 3,
  speed: 400,
  adaptiveHeight: true,
  arrows: true,
  autoplay: true
}

function HomePage() {
  return (
    <div className='home'>
      <div className='fondoV'>
        <img src='/Andrea.jpg' height='50%' />
        <div className='antxt'>
          <p>
            {' '}
            HOLAasdasdasdasdadas dasd
            asdaasdasdasdasdasdasdaasadasdasdasdasdasdasd asdoasdkasodkasopkd
            asdklasdkasdklosdkas:D:D:D:D:D:D:D:D
          </p>
        </div>
      </div>
      <div className='carru'>
        <Slider {...settings}>
          <div className='carrusel'>
            <img src='/Carrusel1.jpg' />
            <p>asasdasdasdasdadsasdasdasdasdasdasdasdasdasdasdasdas</p>
          </div>
          <div className='carrusel'>
            <img src='/Carrusel2.jpg' />
            <p>asasdasdasdasdadsasdasdasdasdasdasdasdasdasdasdasdas</p>
          </div>
          <div className='carrusel'>
            <img src='/Carrusel3.jpg' />
          </div>
          <div className='carrusel'>
            <img src='/Carrusel4.jpg' />
          </div>
          <div className='carrusel'>
            <img src='/Carrusel1.jpg' />
          </div>
          <div className='carrusel'>
            <img src='/Carrusel2.jpg' />
          </div>
        </Slider>
      </div>

      <div className='cards'>
        <Card
          hoverable
          style={{
            width: 240
          }}
          cover={
            <img
              alt='example'
              src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
            />
          }
        >
          <Meta title='Europe Street beat' description='www.instagram.com' />
        </Card>
        <Card
          hoverable
          style={{
            width: 240
          }}
          cover={
            <img
              alt='example'
              src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
            />
          }
        >
          <Meta title='Europe Street beat' description='www.instagram.com' />
        </Card>
        <Card
          hoverable
          style={{
            width: 240
          }}
          cover={
            <img
              alt='example'
              src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
            />
          }
        >
          <Meta title='Europe Street beat' description='www.instagram.com' />
        </Card>
      </div>
    </div>
  )
}

export default HomePage
