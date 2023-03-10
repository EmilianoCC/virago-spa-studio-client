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
          <div className='bt btnbar'>
            <img className='logotipo' src='/logtipo.jpg' />

            <Link to='/'>
              <Button type='primary'>Inicio</Button>
            </Link>

            <Link to='/profile'>
              <Button type='primary'>Perfil</Button>
            </Link>

            <Link to='/datePage'>
              <Button type='primary'>Crea tu cita</Button>
            </Link>

            <Button type='primary' onClick={logOutUser}>
              Cerrar sesion
            </Button>

            <span>{user && user.name} </span>
          </div>
        </>
      )}

      {!isLoggedIn && (
        <>
          <div className=' abc'>
            <Link className='btnbara' to='/'>
              <Button className='efg' type='primary'>
                Inicio
              </Button>
            </Link>
            <Link className='btnbara' to='/signup'>
              <Button className='efg' type='primary'>
                Crea cuenta
              </Button>
            </Link>

            <Link className='btnbara' to='/login'>
              <Button className='efg' type='primary'>
                Inicia Sesion
              </Button>
            </Link>
          </div>
        </>
      )}
    </nav>
  )
}

export default Navbar
