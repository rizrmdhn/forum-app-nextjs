'use client'

import BottomNavigation from '@/components/BottomNavigation'
import FloatingMenu from '@/components/FloatingMenu'
import MobileMenu from '@/components/MobileMenu'
import useGetLocalTheme from '@/hooks/useGetLocalTheme'
import useGetLocale from '@/hooks/useGetLocale'
import useSelect from '@/hooks/useSelect'
import { useEffect } from 'react'
import { asyncSetIsPreload } from '@/states/isPreload/action'

import { useDispatch } from 'react-redux'
import { redirect, useRouter } from 'next/navigation'

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  const showMenu = useSelect('showMenu')

  const [setLocaleData] = useGetLocale()
  const [setLocalTheme] = useGetLocalTheme()

  useEffect(() => {
    setLocaleData()
    setLocalTheme()
  }, [setLocaleData, setLocalTheme])

  const authUser = useSelect('authUser')

  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncSetIsPreload())

    if (authUser) {
      router.push('/thread')
    }
  }, [authUser, dispatch, router])

  return (
    <>
      {children}
      {showMenu && <MobileMenu />}
      <FloatingMenu />
      <BottomNavigation />
    </>
  )
}
