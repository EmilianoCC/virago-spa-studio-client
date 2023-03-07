import './SignupPage.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import authService from '../../services/auth.service'
import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd'

function SignupPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [errorMessage, setErrorMessage] = useState(undefined)

  const navigate = useNavigate()

  const handleEmail = (e) => setEmail(e.target.value)
  const handlePassword = (e) => setPassword(e.target.value)
  const handleName = (e) => setName(e.target.value)

  const handleSignupSubmit = (e) => {
    e.preventDefault()
    // Create an object representing the request body
    const requestBody = { email, password, name }

    // Send a request to the server using axios
    /* 
    const authToken = localStorage.getItem("authToken");
    axios.post(
      `${process.env.REACT_APP_SERVER_URL}/auth/signup`, 
      requestBody, 
      { headers: { Authorization: `Bearer ${authToken}` },
    })
    .then((response) => {})
    */

    // Or using a service
    authService
      .signup(requestBody)
      .then((response) => {
        // If the POST request is successful redirect to the login page
        navigate('/login')
      })
      .catch((error) => {
        // If the request resolves with an error, set the error message in the state
        const errorDescription = error.response.data.message
        setErrorMessage(errorDescription)
      })
  }

  return (
    <div className='SignupPage'>
      <h1>Sign Up</h1>

      <form
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onSubmit={handleSignupSubmit}
      >
        <div className='input'>
          <label>Email:</label>
          <Input
            className='prueba1'
            type='email'
            name='email'
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div className='input'>
          <label>Password:</label>
          <Input
            className='prueba1'
            type='password'
            name='password'
            value={password}
            onChange={handlePassword}
          />
        </div>
        <div className='input'>
          <label>Name:</label>
          <Input
            className='prueba1'
            type='text'
            name='name'
            value={name}
            onChange={handleName}
          />
        </div>
        <Form.Item className='btnprueba' wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            className='btn'
            type='submit'
            style={{ background: '#fec89a' }}
          >
            Sign Up
          </Button>
        </Form.Item>
      </form>

      {errorMessage && <p className='error-message'>{errorMessage}</p>}

      <p>
        Already have account? <Link to={'/login'}> Login</Link>
      </p>
    </div>
  )
}

export default SignupPage
