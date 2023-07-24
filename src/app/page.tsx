'use client'

import useSelect from '@/hooks/useSelect'
import { asyncSetIsPreload } from '@/states/isPreload/action'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export default function Home() {
  const authUser = useSelect('authUser')

  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncSetIsPreload())

    if (authUser) {
      router.push('/thread')
    } else {
      router.push('/login')
    }
  }, [authUser, dispatch, router])

  return <main className='h-screen bg-light'></main>
}
