import { useRouter } from "next/router"
import { useState, useEffect } from "react"

function Blog() {
  const [data, setData] = useState({})

  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://ed-blog-api.herokuapp.com/api/posts/${id}`
      )

      const post = await res.json()

      setData(post)
    }

    fetchData()
  }, [id])

  return <h1>{data._id}</h1>
}

export default Blog
