import React from 'react'
import './DatePage.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import spaService from '../../services/spa.service'

function DatePage() {
  const [name, setName] = useState('')
  const [service, setService] = useState('')
  const [date, setDate] = useState('')
  const [email, setEmail] = useState('')
  const [errorMessage, setErrorMessage] = useState(undefined)

  const navigate = useNavigate()

  const handleName = (e) => setName(e.target.value)
  const handleService = (e) => setService(e.target.value)
  const handleDate = (e) => setDate(e.target.value)
  const handleEmail = (e) => setEmail(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Create an object representing the request body
    const requestBody = { name, service, date, email }

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
    <div>
      <h1>Date</h1>
      <form onSubmit={handleSubmit}>
        <label>Nombre :</label>
        <input type='text' name='name' value={name} onChange={handleName} />

        <label>Service</label>
        <input
          type='text'
          name='service'
          value={service}
          onChange={handleService}
        />

        <label>Fecha </label>
        <input type='date' name='date' value={date} onChange={handleDate} />

        <label>Email </label>
        <input type='text' name='email' value={email} onChange={handleEmail} />
        <button type='submit'>Crear cita</button>
      </form>
    </div>
  )
}

export default DatePage
