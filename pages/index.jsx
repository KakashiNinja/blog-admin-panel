import React, {
  createContext,
  useEffect,
  useReducer,
} from 'react'

import Explore from '../components/Explore'
import Sidebar from '../components/Sidebar'
import authReducer from '../components/authReducer'
import Login from './login'

const AuthContext = createContext()

const Container = () => {
  return (
    <div className='flex h-full w-full'>
      <Sidebar />
      <Explore />
    </div>
  )
}

export default function Home() {
  const initialState = {
    isAuthenticated: false,
    token: null,
  }
  const [state, dispatch] = useReducer(
    authReducer,
    initialState
  )

  useEffect(() => {
    const token = localStorage.getItem('token')

    token &&
      dispatch({
        type: 'login',
        payload: {
          token: token,
        },
      })
  }, [])

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <div>
        {state.isAuthenticated ? <Container /> : <Login />}
      </div>
    </AuthContext.Provider>
  )
}
