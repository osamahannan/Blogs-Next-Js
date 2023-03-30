import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
const slug = () => {

  const router = useRouter();
  const { slug } = router.query
  const [blog, setBlog] = useState()

  useEffect(() => {
    const getAllBlogs = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
        const data = await res.json();
        setBlog(data)
      } catch (err) {
        console.log(err)
      }
    }
    getAllBlogs();
  }, [])

  console.log("blog =", blog)
  return (
    <>
      {blog && (
        <>
          <h2>
            {blog.title}
          </h2>
          <p>
            {blog.content}
          </p>
        </>
      )}
    </>
  )
}

export default slug