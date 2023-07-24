'use client'

import BottomNavigation from '@/components/BottomNavigation'
import HeaderLeaderboardPage from '@/components/HeaderLeaderboardPage'
import MobileMenu from '@/components/MobileMenu'
import useGetLocalTheme from '@/hooks/useGetLocalTheme'
import useGetLocale from '@/hooks/useGetLocale'
import useSelect from '@/hooks/useSelect'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export default function LeaderboardLayout({ children }: { children: React.ReactNode }) {
  const showMenu = useSelect('showMenu')

  const dispatch = useDispatch()

  const [setLocaleData] = useGetLocale()
  const [setLocalTheme] = useGetLocalTheme()

  useEffect(() => {
    setLocaleData()
    setLocalTheme()
  }, [dispatch, setLocaleData, setLocalTheme])

  return (
    <>
      <HeaderLeaderboardPage />
      {children}
      {showMenu && <MobileMenu />}
      <BottomNavigation />
    </>
  )
}
