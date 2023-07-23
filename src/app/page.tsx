'use client'

import useSelect from '@/hooks/useSelect'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const authUser = useSelect('authUser')

  const router = useRouter()
  useEffect(() => {
    if (authUser) {
      router.push('/thread')
    } else {
      router.push('/thread')
    }
  }, [])

  return <main className='h-screen bg-light'></main>
}
