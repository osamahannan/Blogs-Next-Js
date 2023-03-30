import React, { useEffect, useState } from 'react'
import styles from '@/styles/Home.module.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link'

const Blogs = () => {

  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const getAllBlogs = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/blogs")
        const data = await res.json();
        setBlogs(data)
      } catch (err) {
        console.log(err)
      }
    }
    getAllBlogs();
  }, [])

  console.log("blogs =", blogs)


  return (
    <div className={styles.blogDisplay}>
      <div className={styles.grid}>
        {blogs.map(blog => {
          return (
            <Link
              href={`blogpost/${blog.slug}`}
              className={styles.card}
              key={blog.slug}
            // target="_blank"
            // rel="noopener noreferrer"
            >
              <h2 className={inter.className}>
                {blog.title} <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                {blog.content.substring(0, 100)}...
              </p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Blogs