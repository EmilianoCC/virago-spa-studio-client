import React from 'react'
import './DatePage.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import spaService from '../../services/spa.service'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'
import { Button, Form, Input, Select } from 'antd'
import { useParams } from 'react-router-dom'

const { Option } = Select

function DatePage() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext)
  const [name, setName] = useState('')
  const [service, setService] = useState('Maquillaje')

  const [date, setDate] = useState('')
  const [email, setEmail] = useState('')
  const [id, setId] = useState(user._id)
  const [errorMessage, setErrorMessage] = useState(undefined)

  const navigate = useNavigate()
  const { citaId } = useParams()
  const handleName = (e) => setName(e.target.value)
  const handleService = (e) => setService(e.target.value)
  const handleDate = (e) => setDate(e.target.value)
  const handleEmail = (e) => setEmail(e.target.value)
  const handleId = (e) => setId(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Create an object representing the request body
    const requestBody = { name, service, date, email, id }

    spaService
      .createOne(requestBody)
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
    <div className='DatePage'>
      <h1>Crea tu cita</h1>
      <form
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onSubmit={handleSubmit}
      >
        <div className='input'>
          <label>Nombre :</label>
          <Input
            className='prueba1'
            type='text'
            name='name'
            value={name}
            onChange={handleName}
          />
        </div>
        <div className='input'>
          <label>Servicio : </label>
          <select
            className='prueba1 content-select'
            name='service'
            onChange={handleService}
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
            value={date}
            onChange={handleDate}
          />
        </div>
        <div className='input'>
          <label>Coreo Electronico : </label>
          <Input
            className='prueba1'
            type='text'
            name='email'
            value={email}
            onChange={handleEmail}
          />
        </div>
        <Button
          className='btn btnprueba'
          type='primary'
          htmlType='submit'
          style={{ background: '#fec89a' }}
        >
          Crear cita
        </Button>
      </form>
    </div>
  )
}

export default DatePage
