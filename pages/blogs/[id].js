import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import useSWR from "swr"

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

  return <div>{data.title}</div>
}

export default Blog
