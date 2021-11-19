import React, { useState, useContext } from 'react'
import Sidebar from '../components/Sidebar'
import axios from 'axios'

const LoginForm = () => {
  // const { dispatch } = useContext(AuthContext)
  const [loginErr, setLoginErr] = useState(false)

  const [values, setValues] = useState({
    username: '',
    password: '',
    confirm_password: '',
  })

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const body = JSON.stringify(values)

      const res = await axios.post(
        'https://ed-blog-api.herokuapp.com/api/login',
        body,
        config
      )

      // dispatch({
      //   type: 'login',
      //   payload: res.data,
      // })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form className='login-form'>
      <h1 className='register-link'>
        New user? <a href='/register'>Register</a>
      </h1>
      <div>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          name='username'
          required
          placeholder='John Doe'
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          placeholder='SomethingSecure@7851'
          onChange={(e) =>
            setConfirmPassword(e.target.value)
          }
          required
        />
      </div>
      {loginErr && <p>Username or password incorrect.</p>}
      <button type='submit' onClick={handleSubmit}>
        Login
      </button>
    </form>
  )
}

const Login = () => {
  return (
    <>
      <Sidebar />
      <LoginForm />
    </>
  )
}

export default Login
