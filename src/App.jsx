import './App.css'
import { Routes, Route, Outlet, Link } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import SignupPage from './pages/SignupPage/SignupPage'
import LoginPage from './pages/LoginPage/LoginPage'
import Navbar from './components/Navbar/Navbar'
import IsPrivate from './components/IsPrivate/IsPrivate'
import IsAnon from './components/IsAnon/IsAnon'
import {
  createFromIconfontCN,
  InstagramFilled,
  FacebookFilled
} from '@ant-design/icons'
import { Space, Layout, Menu } from 'antd'
import DatePage from './pages/DatePage/DatePage'

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'
})

const { Content, Footer } = Layout
function App() {
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
        <Routes>
          <Route path='/' element={<HomePage />} />

          <Route
            path='/profile'
            element={
              <IsPrivate>
                <ProfilePage />
              </IsPrivate>
            }
          />

          <Route
            path='/signup'
            element={
              <IsAnon>
                <SignupPage />
              </IsAnon>
            }
          />
          <Route
            path='/datePage'
            element={
              <IsPrivate>
                <DatePage />
              </IsPrivate>
            }
          />

          <Route
            path='/login'
            element={
              <IsAnon>
                <LoginPage />
              </IsAnon>
            }
          />
        </Routes>
        <Outlet />
      </Content>
      <Footer style={{ background: 'pink' }}>
        <div className='footer'>
          <h1>Siguenos en nuestras redes sociales: </h1>
          <Space className='redes'>
            <img className='imgf' src='/facebook.png' alt='' />
            <p>Facebook</p>
            <img className='imgf' src='/instagram.png' alt='' />
            <p>Instagram</p>
          </Space>
        </div>
      </Footer>
    </Layout>
  )
}

export default App
