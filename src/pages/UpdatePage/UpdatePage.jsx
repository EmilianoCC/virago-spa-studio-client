import { Button } from 'antd'
import './UpdatePage.css'
import Input from 'antd/es/input/Input'
import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { AuthContext } from '../../context/auth.context'
import spaService from '../../services/spa.service'
import { useLoaderData, useNavigate } from 'react-router-dom'

export const getAppointmentLoader = async ({ params }) => {
  const { data: appointment } = await spaService.getOneAppointment(params.id)

  return { appointment }
}

function UpdatePage() {
  const { appointment } = useLoaderData()
  const [name, setName] = useState(appointment.name)
  const [service, setService] = useState(appointment.service)
  const [date, setDate] = useState(appointment.date)
  const [email, setEmail] = useState(appointment.email)
  const [id, setId] = useState(appointment._id)
  const [errorMessage, setErrorMessage] = useState(undefined)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const requestBody = { name, service, date, email, id }
    const appointmentId = { id }
    spaService
      .updateAppointment(appointmentId, requestBody)
      .then((response) => {
        // If the POST request is successful redirect to the login page
        navigate('/profile')
      })
      .catch((error) => {
        // If the request resolves with an error, set the error message in the state
        const errorDescription = error.response.data.message
        setErrorMessage(errorDescription)
      })
  }

  return (
    <div className='pagina'>
      <h1>Actualiza tu cita </h1>
      <form
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onSubmit={handleSubmit}
      >
        <input
          type='hidden'
          name='name'
          value={appointment._id}
          onChange={(e) => setId(e.target.value)}
        />
        <div className='input'>
          <label>Nombre :</label>
          <Input
            className='prueba1'
            type='text'
            name='name'
            defaultValue={appointment.name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='input'>
          <label>Servicio :</label>
          <select
            className='prueba1'
            name='service'
            defaultValue={appointment.service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value='Maquillaje'>Maquillaje</option>
            <option value='Cavitacion'>Cavitacion</option>
            <option value='Uñas'>Uñas</option>
            <option value='Pestañas'>Pestañas</option>
          </select>
        </div>
        <div className='input'>
          <label>Fecha : </label>
          <Input
            className='prueba1'
            type='date'
            name='date'
            defaultValue={appointment.date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className='input'>
          <label>Coreo Electronico : </label>
          <Input
            className='prueba1'
            type='text'
            name='email'
            defaultValue={appointment.email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <Button
          className='btn btnprueba'
          type='primary'
          htmlType='submit'
          style={{ background: '#fec89a' }}
        >
          Actualizar cita
        </Button>
      </form>
    </div>
  )
}

export default UpdatePage
