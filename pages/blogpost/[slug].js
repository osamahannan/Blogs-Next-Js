import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/Home.module.css'
import { Inter } from 'next/font/google'
import * as fs from "fs"

const inter = Inter({ subsets: ['latin'] })

const Slug = ({ blog }) => {

  const createMarkup = (content) => {
    return { __html: content }
  }
  // const [blog, setBlog] = useState(blog)

  // useEffect(() => {
  //   const getAllBlogs = async () => {
  //     try {
  //       const res = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  //       const data = await res.json();
  //       setBlog(data)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   getAllBlogs();
  // }, [])

  return (
    <>
      {blog && (
        <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>
      )}
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'how-to-learn-javascript' } },
      { params: { slug: 'how-to-learn-next-js' } },
      { params: { slug: 'how-to-learn-react-js' } },
      { params: { slug: 'how-to-learn-react-native' } }
    ],
    fallback: true, // can also be true or 'blocking'
  }
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
  const { slug } = context.params
  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8")
  return {
    // Passed to the page component as props
    props: { blog: JSON.parse(myBlog) },
  }
}

// export async function getServerSideProps(context) {
//   const { slug } = context.query
//   const res = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
//   const blog = await res.json();
//   return {
//     props: { blog }, // will be passed to the page component as props
//   }
// }

export default Slug