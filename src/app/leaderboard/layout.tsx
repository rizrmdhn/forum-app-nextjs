'use client'

import BottomNavigation from '@/components/BottomNavigation'
import HeaderLeaderboardPage from '@/components/HeaderLeaderboardPage'
import MobileMenu from '@/components/MobileMenu'
import Spinner from '@/components/Spinner'
import useGetLocalTheme from '@/hooks/useGetLocalTheme'
import useGetLocale from '@/hooks/useGetLocale'
import useSelect from '@/hooks/useSelect'
import { asyncSetIsPreload } from '@/states/isPreload/action'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export default function LeaderboardLayout({ children }: { children: React.ReactNode }) {
  const showMenu = useSelect('showMenu')
  const isPreload = useSelect('isPreload')

  const dispatch = useDispatch()

  const [setLocaleData] = useGetLocale()
  const [setLocalTheme] = useGetLocalTheme()

  useEffect(() => {
    dispatch(asyncSetIsPreload())
    setLocaleData()
    setLocalTheme()
  }, [dispatch, setLocaleData, setLocalTheme])

  if (isPreload) {
    return (
      // create loading spinner
      <div className='flex h-screen w-screen items-center justify-center flex-col bg-light duration-200 dark:bg-dark'>
        <Spinner />
        <div className='text-title text-4xl font-normal duration-200 dark:text-white mt-2'>Loading...</div>
      </div>
    )
  }

  return (
    <>
      <HeaderLeaderboardPage />
      {children}
      {showMenu && <MobileMenu />}
      <BottomNavigation />
    </>
  )
}
