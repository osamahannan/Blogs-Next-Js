import React from 'react'
import { useRouter } from 'next/router'
const slug = () => {
    const router = useRouter();
    const { slug } = router.query
    console.log("slug =", slug)
    return (
        <div>this is post regarding {slug}</div>
    )
}

export default slug