'use client'

import BottomNavigation from '@/components/BottomNavigation'
import MobileMenu from '@/components/MobileMenu'
import useSelect from '@/hooks/useSelect'
import { useEffect } from 'react'
import useGetLocale from '@/hooks/useGetLocale'
import useGetLocalTheme from '@/hooks/useGetLocalTheme'
import FloatingMenu from '@/components/FloatingMenu'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { asyncSetIsPreload } from '@/states/isPreload/action'

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  const showMenu = useSelect('showMenu')
  const authUser = useSelect('authUser')

  const router = useRouter()
  const dispatch = useDispatch()

  const [setLocaleData] = useGetLocale()
  const [setLocalTheme] = useGetLocalTheme()

  useEffect(() => {
    setLocaleData()
    setLocalTheme()
  }, [setLocaleData, setLocalTheme])

  useEffect(() => {
    if (authUser) {
      router.push('/thread')
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authUser, dispatch])

  useEffect(() => {
    dispatch(asyncSetIsPreload())
  }, [dispatch])

  return (
    <>
      {children}
      {showMenu && <MobileMenu />}
      <FloatingMenu />
      <BottomNavigation />
    </>
  )
}
