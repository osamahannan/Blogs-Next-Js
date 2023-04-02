import React, { useEffect, useState } from 'react'
import styles from '@/styles/Home.module.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link'
import * as fs from "fs"

const Blogs = ({ allBlogs }) => {
  // const [blogs, setBlogs] = useState(props.data)

  const blogs = allBlogs

  return (
    <div className={styles.blogDisplay}>
      <div className={styles.grid}>
        {blogs?.map(blog => {
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
                {blog.metadesc.substring(0, 100)}...
              </p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
  let allBlogs = [];
  const blogs = await fs.promises.readdir("blogdata")
  for (let i = 0; i < blogs.length; i++) {
    const blog = blogs[i];
    const file = await fs.promises.readFile(("blogdata/" + blog), "utf-8")
    allBlogs.push(JSON.parse(file))
  }
  return {
    // Passed to the page component as props
    props: { allBlogs },
  }
}

// export async function getServerSideProps(context) {
//   const res = await fetch("http://localhost:3000/api/blogs")
//   const allBlogs = await res.json();
//   return {
//     props: { allBlogs }, // will be passed to the page component as props
//   }
// }

export default Blogs