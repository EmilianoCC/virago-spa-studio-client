import './HomePage.css'
import { Card, Divider } from 'antd'
import { Carousel } from 'antd'
const { Meta } = Card
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79'
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
            asdaasdasdasdasdasdasdaasadasdasdasdasdasdasd
          </p>
        </div>
      </div>
      <div className='carrusel'>
        <Carousel autoplay>
          <div className='imagencar'>
            <img src='/Carrusel1.jpg' height='200px' />
            <span>hola soy german</span>
          </div>
          <div className='carimg'>
            <img src='/Carrusel2.jpg' height='200px' />
          </div>
          <div>
            <img src='/Carrusel3.jpg' height='200px' />
          </div>
          <div>
            <img src='/Carrusel4.jpg' height='200px' />
          </div>
        </Carousel>
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
