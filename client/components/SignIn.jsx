import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { register, login, logout } from '../firebase/auth'

function SignIn () {
  const signedIn = useSelector(redux => Boolean(redux.auth))

  const [isVisible, setVisible] = useState(false)
  const [error, setError] = useState('')
  const [showRegister, setShowRegister] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value
    })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    if(error) setError('')
    const fn = showRegister ? register : login
    fn(formData.email, formData.password, setError)
  }

  if (signedIn) {
    return <button onClick={logout}>Log Out</button>
  } else {
    return isVisible ? (
      <div className="signin-container">
        <h2>{showRegister ? 'Register' : 'Log in'}</h2>
        <button type="button" onClick={() => setShowRegister(!showRegister)}>
          {showRegister ? 'Already have an account?' : 'Create new account?'}
        </button>
        <button type="button" onClick={() => setVisible(false)}>
          Close
        </button>
        <p>{error && error}</p>
        <form className='center-form' onSubmit={handleSubmit} >
          { showRegister &&          
          <div className='form-row'>
            <label htmlFor='name'>name</label>
            <input type='text' name='name' value={formData.name} onChange={handleChange} />
          </div>
          }
          <div className='form-row'>
            <label htmlFor='email'>email</label>
            <input type='email' name='email' value={formData.email} onChange={handleChange} />
          </div>
          <div className='form-row'>
            <label htmlFor='password'>password</label>
            <input type='password' name='password' value={formData.password} onChange={handleChange} />
          </div>
          <input type='submit' value={showRegister ? 'Register' : 'Log in'} />
        </form>
      </div>
    ) : (
      <button onClick={() => setVisible(true)}>Sign In</button>
    )
  }
}

export default SignIn
