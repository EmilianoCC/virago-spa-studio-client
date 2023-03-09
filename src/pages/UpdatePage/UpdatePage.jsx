import { Button } from 'antd'
import Input from 'antd/es/input/Input'
import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { AuthContext } from '../../context/auth.context'
import spaService from '../../services/spa.service'
import { useLoaderData } from 'react-router-dom'

export const getAppointmentLoader = async ({ params }) => {
  const { data: appointment } = await spaService.getOneAppointment(params.id)
  console.log(appointment)
  return { appointment }
}
function UpdatePage() {
  const { appointment } = useLoaderData()
  console.log(appointment)

  return (
    <div>
      <h1>Crea tu cita</h1>
      <form
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
      >
        <div className='input'>
          <label>Nombre :</label>
          <Input
            className='prueba1'
            type='text'
            name='name'
            defaultValue={appointment.name}
          />
        </div>
        <div className='input'>
          <label>Servicio :</label>
          <select
            className='prueba1'
            name='service'
            defaultValue={appointment.service}
          >
            <option value='maquillaje'>Maquillaje</option>
            <option value='cavitacion'>Cavitacion</option>
            <option value='uñas'>Uñas</option>
            <option value='pestañas'>Pestañas</option>
          </select>
        </div>
        <div className='input'>
          <label>Fecha : </label>
          <Input
            className='prueba1'
            type='date'
            name='date'
            defaultValue={appointment.date}
          />
        </div>
        <div className='input'>
          <label>Coreo Electronico : </label>
          <Input
            className='prueba1'
            type='text'
            name='email'
            defaultValue={appointment.email}
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
