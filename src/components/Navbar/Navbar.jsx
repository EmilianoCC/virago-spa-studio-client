import './Navbar.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'
import { Button } from 'antd'

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext)

  return (
    <nav className='nav'>
      {isLoggedIn && (
        <>
          <button type='primary' onClick={logOutUser}>
            Logout
          </button>

          <Link to='/profile'>
            <button>Profile</button>
          </Link>
          <Link to='/'>
            <Button type='primary'>Home</Button>
          </Link>

          <span>{user && user.name}</span>
        </>
      )}

      {!isLoggedIn && (
        <>
          <div>
            <Link to='/signup'>
              {' '}
              <Button type='primary'>Sign Up</Button>{' '}
            </Link>
            <Link to='/login'>
              {' '}
              <Button type='primary'>Login</Button>{' '}
            </Link>
          </div>
        </>
      )}
    </nav>
  )
}

export default Navbar
