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
        <img src='/Andrea.jpg' height='60%' />
        <div className='antxt'>
          <p>
            Andrea es una artista del maquillaje y las uñas con una gran pasión
            por la belleza. Desde joven, se interesó por el mundo del maquillaje
            y las uñas, y decidió seguir su sueño de convertirse en una
            profesional en este campo.
          </p>
          <p>
            Comenzó a estudiar en una academia de belleza y rápidamente demostró
            su talento en la creación de diseños de uñas y en el arte del
            maquillaje.
          </p>
          <p>
            Andrea decidió abrir su propio estudio de uñas y maquillaje, donde
            ofrece servicios de alta calidad y personalizados para cada cliente.
            Es conocida por su enfoque detallado y cuidadoso en cada uña y su
            capacidad para crear looks de maquillaje que realzan la belleza
            natural de cada persona.
          </p>
        </div>
      </div>
      <div className='carru'>
        <Slider {...settings}>
          <div className='carrusel'>
            <img src='/Carrusel1.jpg' />
            <div className='carrusel-texto'>
              <p>Maquillaje profesional para eventos </p>
            </div>
          </div>
          <div className='carrusel'>
            <img src='/Carrusel2.jpg' />
            <div className='carrusel-texto'>
              <p>Maquillaje profesional para bodas</p>
            </div>
          </div>
          <div className='carrusel'>
            <img src='/Carrusel3.jpg' />
            <div className='carrusel-texto'>
              <p>Maquillaje para eventos</p>
            </div>
          </div>
          <div className='carrusel'>
            <img src='/Carrusel4.jpg' />
            <div className='carrusel-texto'>
              <p>Maquillaje profesional para documentales</p>
            </div>
          </div>
          <div className='carrusel'>
            <img src='/Carrusel5.jpg' />
            <div className='carrusel-texto'>
              <p>Maquillaje para modelaje profesional</p>
            </div>
          </div>
        </Slider>
      </div>

      <div className='cards'>
        <div className='servicios'>
          <Card
            hoverable
            style={{
              width: 240
            }}
            cover={<img src='/lipolaser.jpg' />}
          >
            <Meta title='Lipolaser' />
          </Card>
        </div>
        <div className='servicios'>
          <Card
            hoverable
            style={{
              width: 240
            }}
            cover={<img height='400px' src='/Card2.jpg' />}
          >
            <Meta title='Plasma Pen' />
          </Card>
        </div>
        <div className='servicios'>
          <Card
            hoverable
            style={{
              width: 240
            }}
            cover={<img height='400px' src='/Card3.jpg' />}
          >
            <Meta title='Maquillaje para Halloween' />
          </Card>
        </div>
        <div className='servicios'>
          <Card
            hoverable
            style={{
              width: 240
            }}
            cover={<img alt='example' src='/Card4.jpg' />}
          >
            <Meta title='Uñas' />
          </Card>
        </div>
        <div className='servicios'>
          <Card
            hoverable
            style={{
              width: 240
            }}
            cover={<img alt='example' src='/Card5.jpg' />}
          >
            <Meta title='Pestañas' />
          </Card>
        </div>
        <div className='servicios'>
          <Card
            hoverable
            style={{
              width: 240
            }}
            cover={<img height='400px' src='/Card6.jpg' />}
          >
            <Meta title='Radiofrecuencia facial' />
          </Card>
        </div>
      </div>
    </div>
  )
}

export default HomePage
