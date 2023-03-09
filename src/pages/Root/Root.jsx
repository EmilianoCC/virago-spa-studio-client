import React from 'react'
import './Root.css'
import {
  createFromIconfontCN,
  InstagramFilled,
  FacebookFilled
} from '@ant-design/icons'
import { Space, Layout, Menu } from 'antd'
import Navbar from '../../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'
})

const { Content, Footer } = Layout

function Root() {
  return (
    <Layout>
      <Navbar />
      <Content
        className='content'
        style={{
          height: '100%',
          maxHeight: 'calc(100% - 150.09px)',
          backgroundColor: '#f8edeb'
        }}
      >
        <Outlet />
      </Content>
      <Footer style={{ background: 'pink' }}>
        <div className='footer'>
          <h1>Siguenos en nuestras redes sociales: </h1>
          <Space className='redes'>
            <img className='imgf' src='/facebook.png' />
            <p>Facebook</p>
            <img className='imgf' src='/instagram.png' />
            <p>Instagram</p>
          </Space>
        </div>
      </Footer>
    </Layout>
  )
}

export default Root
