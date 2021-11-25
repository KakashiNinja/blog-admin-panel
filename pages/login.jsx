import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Link from 'next/link'
import { useRouter } from 'next/router'

const LoginForm = ({ setUserAuth }) => {
  const router = useRouter()

  const [values, setValues] = useState({
    username: '',
    password: '',
  })

  const [loginErr, setLoginErr] = useState(false)

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = JSON.stringify(values)

    try {
      const req = await fetch(
        'https://ed-blog-api.herokuapp.com/api/login',
        {
          method: 'POST',
          mode: 'cors',
          body: formData,
          headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
          },
        }
      )

      const myJson = await req.json()
      if (req.status !== 200) {
        setLoginErr(true)
        return
      }
      localStorage.setItem('token', myJson.token)
      localStorage.setItem('userAuth', true)
      router.push('/blogs')
    } catch (err) {
      setLoginErr(true)
    }
  }

  return (
    <form className='login-form'>
      <h1 className='register-link'>
        New user?{' '}
        <Link href='register'>
          <a>Register</a>
        </Link>
      </h1>
      <div>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          name='username'
          required
          placeholder='John Doe'
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          placeholder='SomethingSecure@7851'
          onChange={handleChange}
          required
        />
      </div>
      {loginErr ? (
        <p>Oops Login Error...</p>
      ) : (
        <p>Login Successful</p>
      )}
      <button
        type='submit'
        onClick={(e) => handleSubmit(e)}
      >
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
