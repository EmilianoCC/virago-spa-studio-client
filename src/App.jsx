import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  Link,
  RouterProvider
} from 'react-router-dom'
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

import { AuthContext, AuthProviderWrapper } from './context/auth.context'

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'
})

const { Content, Footer } = Layout

function App() {
  return <></>
}

export default App
