import React from 'react'
import Sidebar from '../components/Sidebar'
import Link from 'next/link'

const register = () => {
  return (
    <>
      <Sidebar />
      <form className='register-form'>
        <h1 className='register-link'>
          Already a user?{' '}
          <Link href='/login'>
            <a>Login</a>
          </Link>
        </h1>
        <div>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            placeholder='John Doe'
            name='username'
            id='username'
            required
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            placeholder='SomethingSecure@6734'
            name='password'
            id='password'
            required
          />
        </div>
        <div>
          <label htmlFor='confirm-password'>
            Confirm password
          </label>
          <input
            type='password'
            placeholder='SomethingSecure@6734'
            name='confirm-password'
            id='confirm-password'
            required
          />
        </div>
        <button>Register</button>
      </form>
    </>
  )
}

export default register
