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
          <div className='bt'>
            <Button type='primary' onClick={logOutUser}>
              Logout
            </Button>

            <Link to='/profile'>
              <Button type='primary'>Profile</Button>
            </Link>
            {/* <Link to='/'>
              <Button type='primary'>Home</Button>
            </Link> */}
            <Link to='/datePage'>
              <Button type='primary'>Crea tu cita</Button>
            </Link>

            <span>{user && user.name}</span>
          </div>
        </>
      )}

      {!isLoggedIn && (
        <>
          <div>
            <Link className='btnbar' to='/signup'>
              {' '}
              <Button type='primary'>Sign Up</Button>{' '}
            </Link>
            <Link className='btnbar' to='/login'>
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
