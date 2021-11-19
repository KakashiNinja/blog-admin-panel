import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Router from 'next/router'
import axios from 'axios'

const CreatePost = () => {
  const [successMsg, setSuccessMsg] = useState(false)

  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [author_name, setAuthorName] = useState('')

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      const req = axios.post(
        'https://ed-blog-api.herokuapp.com/api/posts',
        { title, text, author_name },
        { 'Content-Type': 'application/json' }
      )
      if (req.status !== 200) return
      Router.push('/blogs')
      setSuccessMsg(true)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form
      className='create-post'
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className='fields'>
        <label htmlFor='title'>Title</label>
        <input
          placeholder='The song of ice & fire'
          type='text'
          id='title'
          name='title'
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className='fields'>
        <label htmlFor='text'>Text</label>
        <textarea
          placeholder='And here ladyfinger is the biggest mastermind behind all of this'
          type='text'
          id='text'
          onChange={(e) => setText(e.target.value)}
          name='text'
          required
        />
      </div>

      <div className='fields'>
        <label htmlFor='author_name'>Author</label>
        <input
          placeholder='George R.R. Martin'
          type='text'
          onChange={(e) => setAuthorName(e.target.value)}
          id='author_name'
          name='author_name'
          required
        />
      </div>

      <div className='is-published'>
        <label htmlFor='published'>Published</label>
        <input
          type='checkbox'
          name='published'
          id='published'
        />
      </div>

      <button>Submit</button>
      {successMsg && <p>Successfully Submitted!</p>}
    </form>
  )
}

const Create = () => {
  return (
    <>
      <Sidebar />
      <CreatePost />
    </>
  )
}

export default Create
