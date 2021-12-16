import React from "react"
import Sidebar from "../../components/Sidebar"
import Head from "next/head"

// The issue here is that blogs, as a prop value, is undefined until the asynchronous logic defines and populates it. can fix it using blogs =[] or (blogs ?? [])
const Blogs = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Blogs</title>
        <link rel='icon' href='/favicon.png' />
      </Head>
      <div className='all-blogs'>
        {(posts ?? []).map((post) => {
          const date = new Date(post.date)
          const date_formatted = date.toLocaleDateString("en-gb", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
          })
          return (
            <div className='single-blog' key={post._id}>
              <h1>{post.title}</h1>
              <p>{post.text}</p>
              <div className='author-date'>
                <h6> ~ {post.author_name}</h6>
                <h6>{date_formatted}</h6>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch("https://ed-blog-api.herokuapp.com/api/posts")
  const blogs = await res.json()
  const posts = blogs.posts

  return {
    props: {
      posts,
    },
  }
}

const index = ({ posts }) => {
  return (
    <div className='blog-area'>
      <Sidebar />
      <Blogs posts={posts} />
    </div>
  )
}

export default index
