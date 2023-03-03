import './App.css'
import { Routes, Route, Outlet } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import SignupPage from './pages/SignupPage/SignupPage'
import LoginPage from './pages/LoginPage/LoginPage'
import Navbar from './components/Navbar/Navbar'
import IsPrivate from './components/IsPrivate/IsPrivate'
import IsAnon from './components/IsAnon/IsAnon'
import { createFromIconfontCN } from '@ant-design/icons'
import { Space, ConfigProvider, Layout, Menu } from 'antd'

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'
})

const { Content, Footer } = Layout
function App() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Footer: {
            colorPrimaryBg: '#00b96b'
          }
        }
      }}
    >
      <Layout>
        <Navbar />
        <Content
          className='content'
          style={{
            height: '100%',
            maxHeight: 'calc(100% - 150.09px)'
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

        <Footer>
          <Space>
            <button>
              <IconFont type='icon-facebook' />
            </button>

            <IconFont type='icon-twitter' />
          </Space>
        </Footer>
      </Layout>
    </ConfigProvider>
  )
}

export default App
