import React, { useState } from "react"
import Sidebar from "../components/Sidebar"
import { useRouter } from "next/router"

const CreatePost = () => {
  const [successMsg, setSuccessMsg] = useState(false)
  const history = useRouter()

  const [values, setValues] = useState({
    title: "",
    text: "",
    author_name: "",
  })

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = localStorage.getItem("token")
    const bearer = `Bearer ${token}`
    console.log(bearer)
    const formData = JSON.stringify(values)

    try {
      const req = await fetch("https://ed-blog-api.herokuapp.com/api/posts", {
        method: "post",
        body: formData,
        headers: {
          Authorization: bearer,
          "Content-Type": "application/json",
        },
      })

      if (req.status !== 200) {
        return
      }
      setSuccessMsg(true)
      history.push("/blogs")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form className='create-post' onSubmit={(e) => handleSubmit(e)}>
      <div className='fields'>
        <label htmlFor='title'>Title</label>
        <input
          placeholder='The song of ice & fire'
          type='text'
          id='title'
          name='title'
          onChange={handleChange}
          required
        />
      </div>

      <div className='fields'>
        <label htmlFor='text'>Text</label>
        <textarea
          placeholder='And here ladyfinger is the biggest mastermind behind all of this'
          type='text'
          id='text'
          onChange={handleChange}
          name='text'
          required
        />
      </div>

      <div className='fields'>
        <label htmlFor='author_name'>Author</label>
        <input
          placeholder='George R.R. Martin'
          type='text'
          onChange={handleChange}
          id='author_name'
          name='author_name'
          required
        />
      </div>

      <div className='is-published'>
        <label htmlFor='published'>Published</label>
        <input type='checkbox' name='published' id='published' />
      </div>

      <button onClick={(e) => handleSubmit(e)}>Submit</button>
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
