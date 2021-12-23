import React from "react"
import { useRouter } from "next/router"

const BlogInfo = () => {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return <div>In Construction</div>
}

export default BlogInfo
