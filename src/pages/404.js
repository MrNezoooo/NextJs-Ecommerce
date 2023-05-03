import React from 'react'
import { useEffect } from 'react'
import {useRouter} from 'next/router'

const Error = () => {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <div>
      <h1>404</h1>
      <p>Something is going wrong...</p>
    </div>
  )
}

export default Error