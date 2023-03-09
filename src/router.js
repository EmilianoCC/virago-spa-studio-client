import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import SignupPage from './pages/SignupPage/SignupPage'
import LoginPage from './pages/LoginPage/LoginPage'
import IsPrivate from './components/IsPrivate/IsPrivate'
import IsAnon from './components/IsAnon/IsAnon'
import DatePage from './pages/DatePage/DatePage'
import UpdatePage, { getAppointmentLoader } from './pages/UpdatePage/UpdatePage'
import Root from './pages/Root/Root'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />}>
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
        path='/update/:id'
        loader={getAppointmentLoader}
        element={
          <IsPrivate>
            <UpdatePage />
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
    </Route>
  )
)
export default router
