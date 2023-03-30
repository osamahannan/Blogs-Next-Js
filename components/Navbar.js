import React from 'react'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navlinks}>
        <Link href="/"><li>Home</li></Link>
        <Link href="/about"><li>About</li></Link>
        <Link href="/blogs"><li>Blogs</li></Link>
        <Link href="/contact"><li>Contact</li></Link>
      </ul>
    </nav>
  )
}

export default Navbar