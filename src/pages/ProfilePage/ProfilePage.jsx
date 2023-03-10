import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/auth.context'
import spaService from '../../services/spa.service'
import { Card, Col, Row, Button, message, Typography } from 'antd'
import { Link, NavLink, useParams } from 'react-router-dom'

import './ProfilePage.css'

function ProfilePage() {
  const { user } = useContext(AuthContext)
  const [citasGuardadas, setCitasGuardadas] = useState([])
  const [loading, setLoading] = useState(false)
  const [citaId, setCitaId] = useState(null)
  const { userid } = useParams()

  useEffect(() => {
    const getCitas = async () => {
      setLoading(true)
      try {
        const { data } = await spaService.getAppointment(user._id)
        setCitasGuardadas(data)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }

    getCitas()
  }, [])
  const handleDelete = async (id) => {
    try {
      await spaService.deleteAppointment(id)
      setCitasGuardadas(citasGuardadas.filter((cita) => cita._id !== id))
      message.success('La cita se eliminó correctamente')
    } catch (error) {
      console.log(error)
      message.error('Hubo un error al eliminar la cita')
    }
  }

  return (
    <div className='a'>
      <div className='profile'>
        <h1>Aqui estan todas tus citas </h1>
        <div className='cards-container'>
          <Row gutter={16}>
            {citasGuardadas.map((cita) => (
              <Col span={8}>
                <Card
                  className='cartas'
                  title={
                    <Typography.Title level={2}>{cita.name}</Typography.Title>
                  }
                  bordered={false}
                >
                  {cita.service === 'Maquillaje' ? (
                    <img src='/Card3.jpg' />
                  ) : null}
                  {cita.service === 'Cavitacion' ? (
                    <img src='/Card2.jpg' />
                  ) : null}
                  {cita.service === 'Uñas' ? <img src='/Card4.jpg' /> : null}
                  {cita.service === 'Pestañas' ? (
                    <img src='/Card5.jpg' />
                  ) : null}
                  <p>{cita.service}</p>
                  <p>Fecha : {cita.date}</p>
                  <Button
                    className='btnE bt'
                    type='primary'
                    danger
                    onClick={() => handleDelete(cita._id)}
                  >
                    Eliminar
                  </Button>
                  <NavLink to={`/update/${cita._id}`}>
                    <Button className='bt'>Actualizar</Button>
                  </NavLink>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  )
}
export default ProfilePage
